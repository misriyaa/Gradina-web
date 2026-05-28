import React from 'react';
import { ChevronUp, Hammer, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ setActivePage }) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-earth-950 text-earth-300 border-t border-stone-850 pt-16 pb-8 overflow-hidden z-10">
      
      {/* Abstract Machinery Circular Graphic */}
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full border-8 border-stone-900/40 pointer-events-none z-0" />
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-4 border-stone-900/30 border-dashed pointer-events-none z-0 animate-[spin_120s_linear_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center text-white shadow-lg">
                <Hammer className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                  GRADINA
                </span>
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-primary-500 -mt-1">
                  ENGINEERS
                </span>
              </div>
            </div>
            
            <p className="text-sm text-earth-400 leading-relaxed font-sans">
              Pioneering excellence in crusher plant operations and maintenance. Delivering comprehensive engineered solutions to optimize downtime and maximize profitability.
            </p>

            <div className="flex space-x-3">
              {[
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  ), 
                  url: "https://gradina.in/", 
                  label: "LinkedIn" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  ), 
                  url: "https://gradina.in/", 
                  label: "Facebook" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ), 
                  url: "https://gradina.in/", 
                  label: "Instagram" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.096-2.098C19.56 3.793 12 3.793 12 3.793S4.44 3.793 2.598 4.065c-1.022.272-1.824 1.076-2.096 2.098C.24 8.002.24 12 .24 12s0 3.998.262 5.837c.272 1.022 1.074 1.826 2.096 2.098 1.842.272 9.402.272 9.402.272s7.56 0 9.402-.272c1.022-.272 1.824-1.076 2.096-2.098.262-1.839.262-5.837.262-5.837s0-3.998-.262-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ), 
                  url: "https://gradina.in/", 
                  label: "YouTube" 
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-earth-400 hover:text-white hover:bg-primary-700 hover:border-primary-650 hover:-translate-y-1 transition-all duration-300 shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide uppercase border-l-2 border-primary-600 pl-3">
              Sitemap
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'careers', label: 'Careers' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-primary-400 text-earth-400 transition-colors text-left font-medium cursor-pointer flex items-center space-x-1"
                  >
                    <span>&rsaquo;</span> <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Distributors / Corporate Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide uppercase border-l-2 border-primary-600 pl-3">
              Corporate Info
            </h3>
            <ul className="space-y-2.5 text-sm text-earth-400 font-sans">
              <li>
                <a href="#locations" onClick={() => handleNavClick('contact')} className="hover:text-primary-400 transition-colors">&rsaquo; Locations</a>
              </li>
              <li>
                <a href="#distributors" onClick={() => handleNavClick('about')} className="hover:text-primary-400 transition-colors">&rsaquo; Distributors</a>
              </li>
              <li>
                <a href="#concern" onClick={() => handleNavClick('contact')} className="hover:text-primary-400 transition-colors">&rsaquo; Report A Concern</a>
              </li>
              <li>
                <a href="#access" onClick={() => handleNavClick('about')} className="hover:text-primary-400 transition-colors">&rsaquo; Access with whistle</a>
              </li>
              <li>
                <span className="text-[12px] bg-stone-900 border border-stone-800 text-stone-400 px-2 py-1 rounded inline-block mt-2 font-mono">
                  B2B Certified ISO:9001
                </span>
              </li>
            </ul>
          </div>

          {/* Core Contacts */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wide uppercase border-l-2 border-primary-600 pl-3">
              HQ Contacts
            </h3>
            <ul className="space-y-3.5 text-sm text-earth-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span>Karur, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+919447228113" className="hover:text-primary-400 transition-colors font-mono">
                  +91 9447228113
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:info@gradina.in" className="hover:text-primary-400 transition-colors font-mono">
                  info@gradina.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-stone-900/60 flex flex-col md:flex-row items-center justify-between text-xs text-earth-500">
          <div className="mb-4 md:mb-0">
            Copyright &copy; {year} Gradina &bull; Sitemap &bull; Legal &bull; Privacy &bull; Trademark
          </div>
          
          {/* Scroll to Top Trigger with micro-animation */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center text-earth-400 hover:text-white hover:bg-primary-750 transition-all cursor-pointer shadow-lg group hover:-translate-y-1"
            aria-label="Scroll to Top"
          >
            <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
