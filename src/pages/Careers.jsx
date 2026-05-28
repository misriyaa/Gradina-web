import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ArrowUpRight, MessageCircle, ShieldCheck, HeartHandshake, Compass, Users, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Careers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const jobs = [
    {
      family: "OPERATIONS",
      city: "Karur",
      country: "India",
      title: "Crusher Plant Manager",
      dueDate: "May 18, 2026",
      whatsappText: "Interested in Crusher Plant Manager Job"
    },
    {
      family: "TECHNICAL",
      city: "Karur",
      country: "India",
      title: "Heavy Equipment Operator",
      dueDate: "May 18, 2026",
      whatsappText: "Interested in Heavy Equipment Operator Job"
    },
    {
      family: "ENGINEERING",
      city: "Karur",
      country: "India",
      title: "Maintenance Lead (Crusher)",
      dueDate: "May 18, 2026",
      whatsappText: "Interested in Maintenance Lead Job"
    },
    {
      family: "LOGISTICS",
      city: "Karur",
      country: "India",
      title: "Weighbridge Clerk",
      dueDate: "May 18, 2026",
      whatsappText: "Interested in Weighbridge Clerk Job"
    },
    {
      family: "QUALITY CONTROL",
      city: "Karur",
      country: "India",
      title: "Lab Technician (Aggregates)",
      dueDate: "May 18, 2026",
      whatsappText: "Interested in Lab Technician Job"
    },
    {
      family: "SAFETY",
      city: "Karur",
      country: "India",
      title: "Site Safety Inspector",
      dueDate: "June 05, 2026",
      whatsappText: "Interested in Site Safety Inspector Job"
    },
    {
      family: "TECHNICAL",
      city: "Salem",
      country: "India",
      title: "Electrical Panel Technician",
      dueDate: "June 05, 2026",
      whatsappText: "Interested in Electrical Panel Technician Job"
    },
    {
      family: "OPERATIONS",
      city: "Salem",
      country: "India",
      title: "Quarry Supervisor",
      dueDate: "June 12, 2026",
      whatsappText: "Interested in Quarry Supervisor Job"
    },
    {
      family: "LOGISTICS",
      city: "Trichy",
      country: "India",
      title: "Dumper Truck Driver",
      dueDate: "June 15, 2026",
      whatsappText: "Interested in Dumper Truck Driver Job"
    },
    {
      family: "ENGINEERING",
      city: "Trichy",
      country: "India",
      title: "Conveyor Belt Fitter",
      dueDate: "June 20, 2026",
      whatsappText: "Interested in Conveyor Belt Fitter Job"
    }
  ];

  // Dynamic Searching & Filtering Logic
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.family.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Calculus
  const totalEntries = filteredJobs.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  
  // Adjust current page if search filters narrow down the list
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [searchQuery, entriesPerPage, totalPages]);

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const visibleJobs = filteredJobs.slice(startIndex, endIndex);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center font-sans bg-white dark:bg-primary-950"
    >
      {/* Hero Header */}
      <section className="relative w-full py-20 bg-[#001c3d] text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.25] pointer-events-none" style={{ backgroundImage: `url('/about_banner.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.h1 
            variants={itemVariants} 
            className="font-display font-black text-4xl sm:text-6xl tracking-tight uppercase"
          >
            Careers
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-primary-400 font-display font-bold text-lg sm:text-xl tracking-widest uppercase"
          >
            Raise Above The Possible
          </motion.p>
        </div>
      </section>

      {/* Intro Description */}
      <section className="py-16 w-full bg-white dark:bg-primary-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            Join Gradina and be part of a team committed to excellence in crusher plant operations and maintenance. We are always looking for skilled professionals who are passionate about delivering quality work, ensuring safety, and driving operational efficiency. At Gradina Engineers, you will have the opportunity to grow your career, work with experienced experts, and contribute to projects that make a real impact.
          </p>
        </div>
      </section>

      {/* SCREENSHOT-STYLE DYNAMIC JOB SEARCH TABLE SECTION */}
      <section className="py-16 w-full bg-white dark:bg-primary-950 border-t border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white dark:bg-primary-950 border border-slate-200 dark:border-white/5 p-6 rounded-md shadow-sm">
            
            {/* Table Top Controls (Dropdown & Search Bar) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              
              {/* Show Entries Dropdown */}
              <div className="flex items-center space-x-2 text-sm text-stone-600 dark:text-stone-300 font-semibold select-none">
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1.5 rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#001c3d] text-primary-850 dark:text-white outline-none cursor-pointer font-bold focus:ring-2 focus:ring-[#ff0800] focus:border-transparent transition-all"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                </select>
                <span>entries per page</span>
              </div>

              {/* Live Search Input */}
              <div className="flex items-center space-x-2 text-sm font-semibold text-stone-600 dark:text-stone-300 w-full sm:w-auto">
                <span className="shrink-0">Search:</span>
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    placeholder="Search jobs..."
                    className="w-full pl-3 pr-8 py-1.5 rounded border border-slate-200 dark:border-white/10 bg-white dark:bg-[#001c3d] text-primary-850 dark:text-white outline-none focus:ring-2 focus:ring-[#ff0800] focus:border-transparent transition-all"
                  />
                  <Search className="w-4 h-4 text-stone-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Dynamic Search Table Grid (Responsive scroll) */}
            <div className="w-full overflow-x-auto">
              <table className="min-w-full text-left font-sans">
                
                {/* Column Headers with subtle arrow icons */}
                <thead>
                  <tr className="border-b border-primary-800 dark:border-white/10 text-[11px] sm:text-xs font-black uppercase text-stone-500 dark:text-primary-200 tracking-wider select-none">
                    <th className="py-4 px-4 font-bold flex items-center space-x-1">
                      <span>Job Family</span>
                      <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                    </th>
                    <th className="py-4 px-4 font-bold">
                      <div className="flex items-center space-x-1">
                        <span>City</span>
                        <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                      </div>
                    </th>
                    <th className="py-4 px-4 font-bold">
                      <div className="flex items-center space-x-1">
                        <span>Country</span>
                        <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                      </div>
                    </th>
                    <th className="py-4 px-4 font-bold">
                      <div className="flex items-center space-x-1">
                        <span>Job Title</span>
                        <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                      </div>
                    </th>
                    <th className="py-4 px-4 font-bold">
                      <div className="flex items-center space-x-1">
                        <span>Due Date</span>
                        <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                      </div>
                    </th>
                    <th className="py-4 px-4 font-bold text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <span>Apply Link</span>
                        <span className="text-[9px] text-stone-400 opacity-60">▲▼</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Alternating Table Rows */}
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  <AnimatePresence mode="popLayout">
                    {visibleJobs.length > 0 ? (
                      visibleJobs.map((job, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                          <motion.tr
                            key={job.title}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                            className={`${
                              isEven 
                                ? 'bg-white dark:bg-[#001c3d]/20' 
                                : 'bg-slate-50 dark:bg-[#001c3d]/50'
                            } text-stone-600 dark:text-stone-300 text-sm`}
                          >
                            <td className="py-6 px-4 font-bold text-stone-500 dark:text-primary-300 text-[11px] sm:text-xs tracking-wider font-mono">
                              {job.family}
                            </td>
                            <td className="py-6 px-4 font-semibold text-stone-700 dark:text-stone-200">
                              {job.city}
                            </td>
                            <td className="py-6 px-4 font-semibold text-stone-500 dark:text-stone-400">
                              {job.country}
                            </td>
                            <td className="py-6 px-4 font-display font-extrabold text-base sm:text-lg text-primary-800 dark:text-white leading-tight">
                              {job.title}
                            </td>
                            <td className="py-6 px-4 font-medium text-stone-500 dark:text-stone-400">
                              {job.dueDate}
                            </td>
                            <td className="py-6 px-4 text-center">
                              <a
                                href={`https://wa.me/919447228113?text=${encodeURIComponent(job.whatsappText)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-[#ff0800] hover:text-[#e60700] font-black uppercase text-xs sm:text-sm tracking-wide select-none group"
                              >
                                <span>Apply Now</span>
                                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                              </a>
                            </td>
                          </motion.tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-12 text-center text-stone-400 dark:text-stone-500 font-semibold">
                          No matching job openings found.
                        </td>
                      </tr>
                    )}
                  </AnimatePresence>
                </tbody>

              </table>
            </div>

            {/* Table Bottom Controls (Showing X to Y entries & Pagination Links) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-white/5 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300">
              
              {/* Entries Summary Info */}
              <div className="select-none font-medium">
                {totalEntries > 0 ? (
                  `Showing ${startIndex + 1} to ${endIndex} of ${totalEntries} entries`
                ) : (
                  'Showing 0 to 0 of 0 entries'
                )}
              </div>

              {/* Dynamic Flipping Pagination Links */}
              <div className="flex items-center space-x-1 select-none">
                
                {/* Prev Trigger */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="p-1.5 rounded border border-slate-200 dark:border-white/10 text-stone-500 dark:text-stone-300 hover:bg-[#ff0800] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-500 transition-all cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Number Pills */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isCurrent = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded border font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isCurrent 
                          ? 'bg-[#ff0800] text-white border-[#ff0800]' 
                          : 'border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-primary-900 text-stone-700 dark:text-stone-350'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Trigger */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="p-1.5 rounded border border-slate-200 dark:border-white/10 text-stone-500 dark:text-stone-300 hover:bg-[#ff0800] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-stone-500 transition-all cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Workplace Culture & Benefits */}
      <section className="py-20 w-full bg-white dark:bg-primary-950 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-[#ff0800] font-bold text-xs uppercase tracking-[0.2em] font-mono">Workplace Culture</h3>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-primary-800 dark:text-white uppercase leading-tight">
              Why Work With Us
            </h2>
            <p className="text-stone-600 dark:text-stone-300 font-sans">
              We empower our crew members with complete safety parameters, technical coaching, and a growth-focused environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Safety First Environment",
                desc: "We adhere strictly to international safety standards, providing premium gear and fully monitored, safe sites.",
                icon: <ShieldCheck className="w-6 h-6 text-primary-800 dark:text-[#ff0800]" />
              },
              {
                title: "Technical Mentorship",
                desc: "Learn from veteran mechanical engineers and plant managers with decades of hands-on expertise.",
                icon: <Compass className="w-6 h-6 text-primary-800 dark:text-[#ff0800]" />
              },
              {
                title: "Competitive Compensation",
                desc: "We offer attractive monthly pay scales, provident funds, overtime, and safety incentives.",
                icon: <HeartHandshake className="w-6 h-6 text-primary-800 dark:text-[#ff0800]" />
              },
              {
                title: "Career Elevation",
                desc: "Grow into supervisors, senior fitters, and operations managers through our structured promotion paths.",
                icon: <Users className="w-6 h-6 text-primary-800 dark:text-[#ff0800]" />
              }
            ].map((b, i) => (
              <div key={i} className="tactile-card p-6 h-full bg-white dark:bg-[#001c3d]">
                <div className="flex flex-col space-y-4">
                  <div className="w-12 h-12 rounded bg-primary-50 dark:bg-[#002752] flex items-center justify-center shadow-inner text-[#ff0800]">
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary-800 dark:text-white uppercase leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed font-sans">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
