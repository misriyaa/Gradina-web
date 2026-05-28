import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, Award, CheckCircle, ChevronRight, Activity, TrendingUp, Users, ArrowRight, Settings, Hammer, Truck } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Home({ setActivePage }) {
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

  const services = [
    {
      title: "Annual maintenance contract",
      desc: "Planned maintenance to ensure smooth operations, reduced breakdowns, and longer equipment life.",
      icon: <Settings className="w-6 h-6 text-[#ff0800]" />
    },
    {
      title: "Operation maintenance contract",
      desc: "Complete plant operations and maintenance for efficient performance and reduced downtime.",
      icon: <Activity className="w-6 h-6 text-[#ff0800]" />
    },
    {
      title: "Manpower supply",
      desc: "Skilled manpower for reliable plant operations, maintenance, and safe working conditions.",
      icon: <Users className="w-6 h-6 text-[#ff0800]" />
    },
    {
      title: "Trading (import & export)",
      desc: "Reliable sourcing and supply of quality equipment and spare parts for your plant.",
      icon: <Truck className="w-6 h-6 text-[#ff0800]" />
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      
      {/* 1. NEW SCREENSHOT-Style Initial White Hero Section */}
      <section className="relative w-full bg-white dark:bg-primary-950 py-16 sm:py-24 border-b border-slate-200 dark:border-white/5 overflow-hidden">
        <div className="absolute inset-0 grid-industrial opacity-5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Solid Red Rectangular Text Panel */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-6 bg-[#ff0800] text-white p-8 sm:p-12 rounded shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[450px]"
            >
              {/* Abstract decorative machinery angles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center space-x-2 text-white/90 text-xs font-black uppercase tracking-[0.2em]">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Crusher Plant Excellence</span>
                </div>
                
                <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-none text-white">
                  Gradina Quality Industry which is rich in material
                </h1>
                
                <p className="text-sm sm:text-base text-red-50 leading-relaxed font-sans opacity-95">
                  Gradina delivers top-tier turnkey operations and planned annual maintenance contracts (AMC) that secure maximum plant efficiency, eliminate downtime, and elevate heavy industrial productivity.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap gap-4 relative z-10">
                <button
                  onClick={() => setActivePage('about')}
                  className="px-6 py-3.5 bg-[#001c3d] hover:bg-[#002752] text-white font-bold rounded text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md border-none"
                >
                  Learn More
                </button>
                <button
                  onClick={() => setActivePage('contact')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-100 text-primary-800 font-bold rounded text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md border-none"
                >
                  Get Proposal
                </button>
              </div>

            </motion.div>

            {/* Right: Giant high-quality crawler bulldozer/loader image */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-4 bg-slate-200/40 dark:bg-white/5 rounded blur-2xl pointer-events-none" />
              <img 
                src="/hero.png" 
                alt="Industrial Crusher Plant bulldozer heavy machinery" 
                className="w-full h-[480px] object-cover border-4 border-slate-100 dark:border-white/10 shadow-2xl rounded relative z-10"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SCREENSHOT-Style Why Choose Us with 2x2 Grid Statistics */}
      <section className="py-24 w-full bg-white dark:bg-primary-950 border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Description on Left */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <h3 className="text-[#ff0800] font-black text-xs uppercase tracking-[0.2em] font-mono">Our Capabilities</h3>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-primary-800 dark:text-white leading-tight uppercase">
                We established a crusher operations business for you.
              </h2>
              <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                Gradina is a leading specialist in the field of crusher plant operations and maintenance. We manage comprehensive engineered solutions designed to secure operational integrity, optimize uptime parameters, and eliminate costly site friction.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => setActivePage('services')}
                  className="px-6 py-3.5 bg-[#ff0800] hover:bg-[#e60700] text-white font-bold rounded text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md border-none"
                >
                  View All Services
                </button>
              </div>
            </motion.div>

            {/* 2x2 Clean Statistics Grid on Right */}
            <motion.div variants={itemVariants} className="lg:col-span-6 grid grid-cols-2 gap-6 select-none">
              {[
                { val: "425+", label: "Active Plants", desc: "Monitored sites globally" },
                { val: "27+", label: "Years Experience", desc: "Combined field expertise" },
                { val: "153+", label: "Operations Team", desc: "Certified HSE engineers" },
                { val: "634+", label: "Happy Customers", desc: "turnkey AMC agreements" }
              ].map((metric, i) => (
                <div key={i} className="bg-slate-50 dark:bg-[#001c3d] p-6 border border-slate-200 dark:border-white/5 rounded shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-display font-black text-3xl sm:text-4xl text-[#ff0800] block">{metric.val}</span>
                  <span className="text-sm font-bold text-primary-800 dark:text-white block mt-1 uppercase">{metric.label}</span>
                  <span className="text-xs text-stone-500 dark:text-primary-200 block mt-0.5 font-sans">{metric.desc}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. SCREENSHOT-Style "WHAT SERVICES WE PROVIDE" (Clean white card list) */}
      <section className="py-24 w-full bg-slate-50 dark:bg-primary-900/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-[#ff0800] font-bold text-xs uppercase tracking-[0.2em] font-mono">Our Services</h3>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-primary-800 dark:text-white uppercase leading-tight">
              What Services We Provide
            </h2>
            <p className="text-stone-600 dark:text-stone-300 font-sans">
              We provide highly focused engineering services designed to minimize plant downtime, increase production outputs, and maintain equipment efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
              >
                {/* Clean rectangular services card matching Utopia layout */}
                <div className="bg-white dark:bg-[#001c3d] border border-slate-200 dark:border-white/5 p-6 rounded shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[300px]">
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-primary-50 dark:bg-[#002752] flex items-center justify-center rounded text-[#ff0800]">
                      {s.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary-800 dark:text-white uppercase group-hover:text-[#ff0800] transition-colors leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-300 leading-relaxed font-sans">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                    <button
                      onClick={() => setActivePage('services')}
                      className="text-xs font-bold text-primary-800 dark:text-primary-300 group-hover:text-[#ff0800] transition-colors flex items-center space-x-1 cursor-pointer uppercase font-mono"
                    >
                      <span>View More</span>
                      <span>&rsaquo;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SCREENSHOT-Style RED Split Banner ("WE CAN SET UP A MINING BUSINESS") */}
      <section className="w-full bg-white dark:bg-primary-950 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Block: Solid Red background banner */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 bg-[#ff0800] text-white p-12 sm:p-20 flex flex-col justify-center space-y-6"
          >
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase leading-none text-white">
              We can set up a crusher plant operations business for you.
            </h2>
            <p className="text-sm sm:text-base text-red-50 leading-relaxed font-sans opacity-95">
              Embark on a journey of hassle-free industrial operations with us. We specialize in providing comprehensive solutions by completely undertaking the lease, operation, and maintenance of your crusher plant under strict ISO standards.
            </p>
            <div className="pt-4">
              <button
                onClick={() => setActivePage('contact')}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#ff0800] font-black rounded text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md border-none"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Block: Landscape crusher machinery image */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-6 min-h-[350px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/15 z-10" />
            <img 
              src="/about_banner.png" 
              alt="Crusher plant rollers and conveyor machinery details" 
              className="absolute inset-0 w-full h-full object-cover select-none"
            />
          </motion.div>

        </div>
      </section>

      {/* 5. Hardhat Engineer Quote Segment */}
      <section className="py-24 w-full bg-white dark:bg-primary-950 border-t border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16">
            
            <motion.div variants={itemVariants} className="w-full md:w-2/5 shrink-0 relative">
              <div className="absolute -inset-2 bg-[#ff0800]/10 rounded shadow blur-lg" />
              <img 
                src="/maintenance_work.png" 
                alt="Hardhat Site Engineer Conducting Audit" 
                className="w-full h-96 object-cover border-4 border-[#ff0800] shadow-2xl relative rounded"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex-grow space-y-6">
              <span className="text-[#ff0800] font-black text-7xl font-serif leading-none block">“</span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-primary-800 dark:text-white uppercase leading-tight -mt-6">
                We optimize Beautifully with the best possible materials and resources
              </h2>
              <div className="w-20 h-1.5 bg-[#ff0800]" />
              <div>
                <h4 className="font-display font-bold text-xl text-primary-800 dark:text-white uppercase">GRADINA ENGINEERS</h4>
                <p className="text-xs text-stone-500 uppercase tracking-widest font-bold font-mono">Crusher Operations & AMC HQ</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. Partner Sponsor Logos Ribbon */}
      <section className="py-12 w-full bg-slate-50 dark:bg-primary-900/10 border-y border-slate-200 dark:border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-[#001c3d] dark:text-white">ANDINA</span>
            <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-[#001c3d] dark:text-white">BIG BUILDING</span>
            <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-[#001c3d] dark:text-white">AMERICAN</span>
            <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-[#001c3d] dark:text-white">OPEN HOUSE</span>
          </div>
        </div>
      </section>

      {/* 7. Solid Navy CTA Banner */}
      <section className="py-20 w-full bg-[#001c3d] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.15] opacity-25 pointer-events-none" style={{ backgroundImage: `url('/about_banner.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight max-w-4xl mx-auto leading-tight">
            Partner for Hassle-Free Crusher Plant Operations
          </h2>
          <p className="text-base sm:text-lg text-stone-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Gradina delivers end-to-end solutions for crusher plant operations and maintenance. We help improve efficiency, reduce downtime, and enhance overall plant performance through expert management, skilled manpower, and advanced technologies.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setActivePage('contact')}
              className="px-8 py-4 bg-[#ff0800] hover:bg-[#e60700] text-white font-bold rounded-md tactile-btn text-base flex items-center justify-center space-x-2 mx-auto cursor-pointer shadow-lg border-none"
            >
              <span>Get Free Site Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
