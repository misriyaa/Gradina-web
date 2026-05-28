import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Filter, HardHat, Cog, Activity } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const categories = [
    { id: 'all', label: 'All Operations', icon: <Activity className="w-4 h-4" /> },
    { id: 'equipment', label: 'Equipment & Gears', icon: <Cog className="w-4 h-4" /> },
    { id: 'maintenance', label: 'Safety & Maintenance', icon: <HardHat className="w-4 h-4" /> }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Crusher Plant Primary Startup",
      category: "equipment",
      desc: "High-yield primary crushers setup and operating system validation.",
      img: "/hero.png"
    },
    {
      id: 2,
      title: "Precision Industrial Gears Setup",
      category: "equipment",
      desc: "Polished carbon-steel gears engineered for heavy torque transmission.",
      img: "/about_banner.png"
    },
    {
      id: 3,
      title: "Heavy-Duty Crusher Servicing",
      category: "maintenance",
      desc: "Qualified plant technicians executing thorough safety mechanical diagnosis.",
      img: "/maintenance_work.png"
    },
    {
      id: 4,
      title: "Conveyor System Wear Analysis",
      category: "maintenance",
      desc: "Regular roller wear and belt tracking metrics audit to reduce breakdown risks.",
      img: "/about_banner.png"
    },
    {
      id: 5,
      title: "Quarry Production Site Launch",
      category: "equipment",
      desc: "Overview of crusher plant machinery running at maximum output capacities.",
      img: "/hero.png"
    },
    {
      id: 6,
      title: "Field Engineers Safety Briefing",
      category: "maintenance",
      desc: "HSE supervisors performing site risk and safety parameters analysis.",
      img: "/maintenance_work.png"
    }
  ];

  const filteredItems = selectedFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      {/* Hero Banner */}
      <section className="relative w-full py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.25] pointer-events-none" style={{ backgroundImage: `url('/hero.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.h1 
            variants={itemVariants} 
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight uppercase"
          >
            Our Gallery
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-primary-400 font-display font-semibold text-lg sm:text-xl tracking-widest uppercase"
          >
            Raise Above The Possible
          </motion.p>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section className="py-24 w-full bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="text-xs text-earth-500 font-bold uppercase tracking-widest mr-2 flex items-center gap-1 font-mono">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center space-x-2 cursor-pointer shadow-sm ${
                    isSelected 
                      ? 'bg-primary-700 text-white border border-primary-650' 
                      : 'bg-earth-100 dark:bg-stone-900 text-earth-700 dark:text-earth-300 border border-earth-200/50 dark:border-stone-800 hover:bg-earth-200 dark:hover:bg-stone-800'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="h-full"
                >
                  <ThreeDCard className="h-full group hover:shadow-2xl bg-earth-50 dark:bg-stone-900/40">
                    <div 
                      onClick={() => setActiveImage(item)}
                      className="p-4 flex flex-col justify-between h-full space-y-4 cursor-pointer"
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 relative shadow-inner">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover brightness-[0.95] group-hover:scale-105 transition-transform duration-500" 
                        />
                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                          <div className="w-12 h-12 rounded-full bg-white text-primary-950 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="px-2 pb-2 space-y-1">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary-650 bg-primary-100/50 dark:bg-primary-950/40 border border-primary-200/30 px-2 py-0.5 rounded font-mono">
                          {item.category === 'equipment' ? 'Equipment' : 'Maintenance'}
                        </span>
                        <h3 className="font-display font-bold text-lg text-earth-950 dark:text-white uppercase pt-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-earth-700 dark:text-earth-350 leading-relaxed font-sans pt-1">
                          {item.desc}
                        </p>
                      </div>

                    </div>
                  </ThreeDCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Zoom Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          >
            {/* Close trigger outside */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveImage(null)} />
            
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="max-w-4xl w-full bg-stone-900 border border-stone-850 rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              <div className="aspect-video w-full bg-stone-950 overflow-hidden relative">
                <img 
                  src={activeImage.img} 
                  alt={activeImage.title} 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="p-6 sm:p-8 space-y-2 bg-stone-900 text-stone-200">
                <span className="text-xs uppercase font-extrabold tracking-widest text-primary-400 font-mono">
                  {activeImage.category.toUpperCase()}
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  {activeImage.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
