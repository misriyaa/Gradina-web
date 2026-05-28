import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hammer, Sun, Moon, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'careers', label: 'Careers' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col z-50 relative font-sans">
      
      {/* 1. BUILDERON-Style Top Contact Bar (Dark Navy) */}
      <div className="w-full bg-primary-950 text-stone-200 border-b border-white/5 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold">
          
          {/* Coordinates on Left */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="tel:+919447228113" className="flex items-center space-x-2 hover:text-[#ff0800] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#ff0800]" />
              <span className="font-mono">+91 9447228113</span>
            </a>
            <a href="mailto:info@gradina.in" className="flex items-center space-x-2 hover:text-[#ff0800] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#ff0800]" />
              <span className="font-mono">info@gradina.in</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#ff0800]" />
              <span>Karur, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Social Coordinates / Certificates on Right */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-[10px] bg-[#001c3d] border border-white/10 px-2 py-0.5 rounded text-primary-200 uppercase font-mono tracking-widest">
              AMC Certified
            </span>
            <div className="flex space-x-3 text-stone-400">
              {[
                { 
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current hover:text-white" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ), 
                  url: "https://gradina.in/" 
                },
                { 
                  icon: (
                    <svg className="w-3.5 h-3.5 fill-current hover:text-white" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ), 
                  url: "https://gradina.in/" 
                }
              ].map((s, i) => (
                <a href={s.url} key={i} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2. BUILDERON-Style Flat Main Navbar */}
      <nav className="w-full bg-white dark:bg-primary-950 border-b border-slate-200 dark:border-white/5 transition-all duration-300 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Highly accurate geometric SVG G-Logo & Brand Text */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group shrink-0"
            >
              <div className="w-12 h-12 flex items-center justify-center relative transform group-hover:scale-105 transition-all">
                <svg viewBox="0 0 100 100" className="w-11 h-11 shrink-0">
                  {/* Navy upper-left bracket */}
                  <path d="M52 14 L28 14 L12 45 L28 45 L37 29 L52 29 Z" fill="#001c3d" />
                  {/* Red lower-right bracket */}
                  <path d="M48 86 L72 86 L88 55 L72 55 L63 71 L48 71 Z" fill="#ff0800" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-primary-800 dark:text-white select-none flex items-center">
                  Grad<span className="relative">i<span className="absolute -top-1 left-0 right-0 text-center text-[#ff0800] text-xl font-black">&bull;</span></span>na
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-3 text-sm uppercase tracking-wider font-extrabold transition-colors duration-250 cursor-pointer ${
                      isActive 
                        ? 'text-[#ff0800]' 
                        : 'text-primary-800 dark:text-stone-300 hover:text-[#ff0800]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-1 bg-[#ff0800]"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 ml-4 bg-primary-50 dark:bg-[#001c3d] text-primary-800 dark:text-stone-300 hover:bg-[#ff0800] hover:text-white rounded transition-all cursor-pointer border border-slate-200/50 dark:border-white/5 shadow-sm"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile Menu & Theme button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-primary-50 dark:bg-[#001c3d] text-primary-800 dark:text-stone-350 hover:bg-[#ff0800] hover:text-white rounded transition-all cursor-pointer border border-slate-200/50 dark:border-white/5 shadow-sm"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 bg-primary-800 text-white hover:bg-[#ff0800] rounded transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile sliding full drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden border-t border-slate-200 dark:border-white/5 bg-white dark:bg-primary-950 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {menuItems.map((item) => {
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 text-sm uppercase tracking-wider font-extrabold transition-all rounded ${
                        isActive 
                          ? 'bg-[#ff0800] text-white' 
                          : 'text-primary-800 dark:text-stone-300 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:text-[#ff0800]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </div>
  );
}
