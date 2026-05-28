import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, ShieldAlert, Clock, Sparkles } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: 'AMC',
    message: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API delivery
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        service: 'AMC',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const coordinates = [
    {
      title: "Direct Support Line",
      val: "+91 9447228113",
      sub: "Available 24/7 for emergency AMC audits",
      link: "tel:+919447228113",
      icon: <Phone className="w-6 h-6 text-primary-700 dark:text-primary-400" />,
      bg: "bg-primary-50 dark:bg-primary-950/40"
    },
    {
      title: "Business Inquiry HQ",
      val: "info@gradina.in",
      sub: "Send RFQ and site engineering queries",
      link: "mailto:info@gradina.in",
      icon: <Mail className="w-6 h-6 text-teal-700 dark:text-teal-400" />,
      bg: "bg-teal-50 dark:bg-teal-950/40"
    },
    {
      title: "Operational Office HQ",
      val: "Karur, Tamil Nadu, India",
      sub: "Active engineering clusters in Karur & Salem",
      link: "https://maps.google.com/?q=Karur,TamilNadu,India",
      icon: <MapPin className="w-6 h-6 text-amber-700 dark:text-amber-400" />,
      bg: "bg-amber-50 dark:bg-amber-950/40"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      {/* Hero Header */}
      <section className="relative w-full py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.25] pointer-events-none" style={{ backgroundImage: `url('/hero.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.h1 
            variants={itemVariants} 
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight uppercase"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-primary-400 font-display font-semibold text-lg sm:text-xl tracking-wider max-w-3xl mx-auto"
          >
            Get in touch with Gradina for reliable crusher plant operations and maintenance support.
          </motion.p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="py-24 w-full bg-white dark:bg-stone-950 border-t border-earth-200/50 dark:border-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Inquiry Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <ThreeDCard className="p-8 sm:p-10 bg-earth-50 dark:bg-stone-900/40 border border-earth-200/50 dark:border-stone-850">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10"
                    >
                      <div className="space-y-2">
                        <h2 className="font-display font-black text-2xl text-earth-950 dark:text-white uppercase">
                          Submit Business Inquiry
                        </h2>
                        <p className="text-sm text-earth-700 dark:text-earth-350 font-sans">
                          Fill out the form below. Our machinery engineering team will respond with a custom RFP proposal within 24 business hours.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Your Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe" 
                            className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Business Email</label>
                          <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@company.com" 
                            className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Contact Phone</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX" 
                            className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white font-mono"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Plant Site Location</label>
                          <input 
                            required
                            type="text" 
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. Karur, Tamil Nadu" 
                            className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Operations Contract Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white cursor-pointer font-semibold"
                        >
                          <option value="AMC">Annual Maintenance Contract (Planned AMC)</option>
                          <option value="OMC">Operation & Maintenance Contract (Full OMC)</option>
                          <option value="Manpower">Skilled Manpower Supply</option>
                          <option value="Parts">Equipment Parts & Trading</option>
                        </select>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-earth-650 dark:text-earth-400 font-mono">Message Details</label>
                        <textarea 
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          placeholder="Please provide details about your crusher machinery model, production capacity requirements, etc."
                          className="px-4 py-3 rounded-xl bg-white dark:bg-stone-900 border border-earth-250 dark:border-stone-800 text-sm focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all dark:text-white resize-none font-sans"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-primary-700 hover:bg-primary-600 text-white font-semibold rounded-xl tactile-btn text-base flex items-center justify-center space-x-2 cursor-pointer shadow-md border border-primary-650"
                      >
                        <Send className="w-5 h-5 shrink-0" />
                        <span>Send Proposal Request</span>
                      </button>

                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-16 text-center space-y-6 flex flex-col items-center justify-center relative z-10"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg border border-emerald-200/50">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-display font-black text-2xl text-earth-950 dark:text-white uppercase tracking-wide">
                          Proposal Request Sent!
                        </h3>
                        <p className="text-sm text-earth-700 dark:text-earth-350 max-w-md mx-auto font-sans leading-relaxed">
                          Thank you for contacting Gradina Engineers. We have successfully logged your crusher site parameters and will follow up shortly via email/phone.
                        </p>
                      </div>
                      
                      <div className="inline-flex items-center space-x-2 text-xs text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest font-mono">
                        <Clock className="w-4 h-4" />
                        <span>PROPOSAL ID: GRD-{Math.floor(Math.random() * 90000) + 10000}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </ThreeDCard>
            </motion.div>

            {/* Right Column: Contact Details */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-primary-750 font-bold text-xs uppercase tracking-[0.2em]">Contact Coordinates</h3>
                <h2 className="font-display font-black text-2xl text-earth-950 dark:text-white uppercase leading-tight">
                  Reach Out Directly
                </h2>
                <p className="text-sm text-earth-700 dark:text-earth-350 font-sans">
                  Use the quick actions below to initiate call, mail or maps details with our team support instantly.
                </p>
              </div>

              <div className="space-y-6">
                {coordinates.map((coord, idx) => (
                  <ThreeDCard key={idx} className="p-6 bg-earth-50 dark:bg-stone-900 border border-earth-200/50 dark:border-stone-850 hover:shadow-md">
                    <a 
                      href={coord.link} 
                      target={coord.title === "Operational Office HQ" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-xl ${coord.bg} flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                        {coord.icon}
                      </div>
                      
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-earth-500 font-mono block">
                          {coord.title}
                        </span>
                        <span className="font-display font-bold text-base sm:text-lg text-earth-950 dark:text-white group-hover:text-primary-750 transition-colors block truncate">
                          {coord.val}
                        </span>
                        <span className="text-xs text-earth-700 dark:text-earth-350 block">
                          {coord.sub}
                        </span>
                      </div>
                    </a>
                  </ThreeDCard>
                ))}
              </div>

              {/* Blue-Print Mock Map container */}
              <ThreeDCard className="p-6 bg-stone-900/95 text-stone-300 overflow-hidden relative border border-stone-850 h-56 flex flex-col justify-end">
                <div className="absolute inset-0 grid-industrial opacity-20 pointer-events-none" />
                <div className="absolute top-6 left-6 text-primary-400 font-bold uppercase tracking-widest text-[10px] font-mono flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Site Mapping Grid</span>
                </div>
                
                <div className="space-y-1 relative z-10">
                  <h4 className="font-display font-bold text-sm text-white uppercase">Crusher Grid HQ</h4>
                  <p className="text-xs text-stone-400 font-mono">LAT: 10.9578&deg; N | LON: 78.0833&deg; E</p>
                  <p className="text-xs text-stone-400 font-sans">Karur, Tamil Nadu quarry zones</p>
                </div>
              </ThreeDCard>

            </motion.div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
