import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Activity, Users, Truck, ShieldCheck, ChevronRight, Zap, Target, Hammer, RefreshCw, BarChart, MessageSquare } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Services() {
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

  const mainServices = [
    {
      title: "Operation & Maintenance Contract",
      desc: "We take complete responsibility for both plant operations and maintenance under a single contract. This ensures smooth functioning, improved efficiency, reduced downtime, and hassle-free management.",
      icon: <Activity className="w-8 h-8 text-primary-700 dark:text-primary-400" />,
      features: ["Full machinery lease & startup", "Downtime prevention audits", "Efficiency charting & KPIs"]
    },
    {
      title: "Annual Maintenance Contract",
      desc: "Our planned and preventive maintenance services keep your equipment running efficiently throughout the year. This helps minimize breakdowns, extend equipment lifespan, and control maintenance costs.",
      icon: <Settings className="w-8 h-8 text-primary-700 dark:text-primary-400" />,
      features: ["Routine grease/oil/roller audits", "Structural wear diagnostics", "24/7 emergency support"]
    },
    {
      title: "Manpower Supply",
      desc: "We provide skilled and experienced manpower for all plant operations and maintenance activities. Our workforce is trained to deliver reliable performance while maintaining high safety standards.",
      icon: <Users className="w-8 h-8 text-primary-700 dark:text-primary-400" />,
      features: ["Certified plant supervisors", "Experienced mechanical fitters", "Fully certified HSE officers"]
    },
    {
      title: "Trading (Import & Export)",
      desc: "We handle the import and export of high-quality equipment, spare parts, and materials. Our strong sourcing network ensures reliable supply and timely delivery for your operational needs.",
      icon: <Truck className="w-8 h-8 text-primary-700 dark:text-primary-400" />,
      features: ["Premium jaw/cone plates sourcing", "Heavy conveyor belt modules", "High-durability roller bearings"]
    }
  ];

  const secondaryCapabilities = [
    {
      title: "Full Operational Responsibility",
      desc: "We manage complete plant operations from start to finish, ensuring smooth workflow and consistent output. Our team handles every aspect to deliver hassle-free and efficient performance.",
      icon: <Target className="w-5 h-5 text-teal-600 dark:text-teal-400" />
    },
    {
      title: "Skilled Operational Personnel",
      desc: "Our team consists of highly trained professionals with strong industry experience. They ensure accurate operations, improved productivity, and safe working conditions at all times.",
      icon: <Hammer className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: "Advanced Technology Integration",
      desc: "We implement modern technologies and systems to enhance operational efficiency and accuracy. This helps improve productivity, reduce errors, and support long-term plant performance.",
      icon: <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Comprehensive Maintenance",
      desc: "We provide complete maintenance services, including inspection, servicing, and repairs. This ensures equipment reliability, reduces unexpected failures, and improves overall plant efficiency.",
      icon: <RefreshCw className="w-5 h-5 text-primary-600 dark:text-primary-400" />
    },
    {
      title: "Swift Issue Resolution",
      desc: "We take complete responsibility for both plant operations and maintenance under a single contract. This ensures smooth functioning, improved efficiency, reduced downtime, and hassle-free management.",
      icon: <BarChart className="w-5 h-5 text-rose-600 dark:text-rose-400" />
    },
    {
      title: "Transparent Communication",
      desc: "We maintain clear and consistent communication throughout all operations. Regular updates and reporting ensure complete transparency and better decision-making.",
      icon: <MessageSquare className="w-5 h-5 text-steel-655 dark:text-steel-400" />
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      {/* 1. Header Hero */}
      <section className="relative w-full py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.22] pointer-events-none" style={{ backgroundImage: `url('/hero.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.h1 
            variants={itemVariants} 
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight uppercase"
          >
            Our Services
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-primary-400 font-display font-semibold text-lg sm:text-xl tracking-wider max-w-3xl mx-auto"
          >
            Helping you get the most out of your equipment and processes
          </motion.p>
        </div>
      </section>

      {/* Intro Lease Statement */}
      <section className="py-20 w-full bg-white dark:bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-primary-750 font-extrabold text-sm tracking-widest uppercase">
            <ShieldCheck className="w-5 h-5" />
            <span>Turnkey Lease & Operation Operations</span>
          </div>
          <p className="text-lg sm:text-xl text-earth-800 dark:text-earth-200 font-sans leading-relaxed">
            Embark on a journey of hassle-free industrial operations with us. We specialize in providing comprehensive solutions by completely undertaking the lease, operation, and maintenance of your crusher plant. Our commitment is to deliver a seamless business experience, allowing you to focus on your core competencies while we handle the intricacies of plant management.
          </p>
        </div>
      </section>

      {/* Main Services Detail Grid */}
      <section className="py-24 w-full bg-earth-50 dark:bg-stone-900/20 border-t border-earth-200/50 dark:border-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-16">
            {mainServices.map((serv, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-950 flex items-center justify-center border border-primary-200/55 dark:border-primary-800/30">
                      {serv.icon}
                    </div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-earth-950 dark:text-white uppercase leading-tight">
                      {serv.title}
                    </h2>
                    <p className="text-base text-earth-700 dark:text-earth-300 font-sans leading-relaxed">
                      {serv.desc}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {serv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-sm text-earth-850 dark:text-earth-200 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <ThreeDCard className="p-8 bg-white dark:bg-stone-900 shadow-md">
                      <div className="aspect-[4/3] bg-stone-900 rounded-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-cover bg-center brightness-75" style={{ backgroundImage: `url('/about_banner.png')` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-primary-350 bg-primary-950/70 border border-primary-800/40 px-2 py-1 rounded inline-block mb-2 font-mono">
                            Capabilities Log
                          </span>
                          <h3 className="font-display font-bold text-lg text-white uppercase">Operational Standard {index + 1}</h3>
                        </div>
                      </div>
                    </ThreeDCard>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose us / Capabilities Segment */}
      <section className="py-24 w-full bg-white dark:bg-stone-950 border-t border-earth-200/50 dark:border-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h3 className="text-primary-700 dark:text-primary-450 font-bold text-xs uppercase tracking-[0.2em]">Detailed Capabilities</h3>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-earth-950 dark:text-white uppercase leading-tight">
              Value Engineered For Performance
            </h2>
            <p className="text-earth-700 dark:text-earth-300 font-sans">
              Our core workflow is structured around detailed engineering, transparent data sharing, and advanced safety controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryCapabilities.map((cap, cIdx) => (
              <motion.div 
                key={cIdx} 
                variants={itemVariants}
              >
                <ThreeDCard className="p-8 h-full bg-white dark:bg-stone-900/50 border border-earth-200/60 dark:border-stone-850 hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-earth-100 dark:bg-stone-800 flex items-center justify-center shadow-inner">
                      {cap.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-earth-950 dark:text-white uppercase">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-earth-750 dark:text-earth-350 leading-relaxed font-sans">
                      {cap.desc}
                    </p>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
