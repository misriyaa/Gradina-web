import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Compass, Award, Heart, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';
import ThreeDCard from '../components/ThreeDCard';

export default function About() {
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

  const values = [
    {
      title: "Excellence",
      desc: "We are committed to delivering excellence in every aspect of crusher plant operations and maintenance, ensuring the highest quality of service.",
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      bg: "bg-emerald-50 dark:bg-emerald-950/40"
    },
    {
      title: "Safety",
      desc: "The safety of our team members, clients, and the environment is our top priority. We adhere to the highest safety standards in all our operations.",
      icon: <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      bg: "bg-amber-50 dark:bg-amber-950/40"
    },
    {
      title: "Innovation",
      desc: "Embracing innovation is key to our success. We stay ahead of industry trends and adopt cutting-edge technologies to enhance efficiency and effectiveness.",
      icon: <Sparkles className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      bg: "bg-teal-50 dark:bg-teal-950/40"
    },
    {
      title: "Customer Satisfaction",
      desc: "We prioritize your unique needs with tailored solutions. Our goal is exceeding expectations in every single project we deliver with excellence.",
      icon: <Heart className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      bg: "bg-rose-50 dark:bg-rose-950/40"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center"
    >
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.25] pointer-events-none" style={{ backgroundImage: `url('/about_banner.png')` }} />
        <div className="absolute inset-0 grid-industrial opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            variants={itemVariants} 
            className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight uppercase mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-primary-400 font-display font-semibold text-lg tracking-widest uppercase"
          >
            PIONEERING EXCELLENCE IN CRUSHER PLANT
          </motion.p>
        </div>
      </section>

      {/* Corporate Profile - Mission & Vision */}
      <section className="py-24 w-full bg-white dark:bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-earth-950 dark:text-white uppercase">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-earth-700 dark:text-earth-300 leading-relaxed font-sans">
                Gradina is a premier specialist in comprehensive crusher plant operations and maintenance. We deliver <strong>“top-to-bottom”</strong> engineering solutions designed to keep your infrastructure running at peak performance. By combining deep technical expertise with a relentless commitment to excellence, we transform complex operational challenges into seamless, high-yield results for our partners.
              </p>
              <div className="w-full h-[2px] bg-gradient-to-r from-primary-750 via-earth-300 to-transparent dark:via-stone-800" />
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-display font-black text-primary-700 dark:text-primary-400">10+</div>
                <div className="text-xs sm:text-sm text-earth-600 dark:text-earth-450 uppercase font-bold tracking-wider">
                  Years of combined B2B <br />Industrial leadership
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-6 grid grid-cols-1 gap-8">
              
              {/* Mission Card */}
              <ThreeDCard className="p-8 border-l-4 border-l-primary-700 dark:bg-stone-900 bg-earth-50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-earth-950 dark:text-white uppercase">Our Mission</h3>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed font-sans">
                      Our mission is to set the gold standard for industrial reliability. We aim to empower our clients by maximizing plant efficiency and eliminating costly downtime through proactive, safety-first maintenance strategies. By prioritizing sustainability and operational integrity, we ensure that every plant we manage becomes a benchmark for productivity.
                    </p>
                  </div>
                </div>
              </ThreeDCard>

              {/* Vision Card */}
              <ThreeDCard className="p-8 border-l-4 border-l-teal-650 dark:bg-stone-900 bg-earth-50">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-400">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl text-earth-950 dark:text-white uppercase">Our Vision</h3>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed font-sans">
                      Driven by innovation, we envision a future where heavy industry operates with zero maintenance friction. We strive to stay at the forefront of the field by embracing cutting-edge technologies and smarter engineering practices. Our goal is to contribute to the long-term growth of our clients, ensuring their operations are future-proof.
                    </p>
                  </div>
                </div>
              </ThreeDCard>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 w-full bg-earth-50 dark:bg-stone-900/20 border-t border-earth-200/50 dark:border-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-primary-700 dark:text-primary-450 font-bold text-xs uppercase tracking-[0.2em]">Guiding Principles</h3>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-earth-950 dark:text-white uppercase">Our Values</h2>
            <p className="text-earth-750 dark:text-earth-350 font-sans">
              These pillars define how we operate, govern our safety protocols, and ensure customer expectations are consistently exceeded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
              >
                <ThreeDCard className="p-8 h-full bg-white dark:bg-stone-900 hover:shadow-lg">
                  <div className="flex flex-col space-y-4">
                    <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center`}>
                      {v.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-earth-950 dark:text-white uppercase">
                      {v.title}
                    </h3>
                    <p className="text-sm text-earth-700 dark:text-earth-300 leading-relaxed font-sans">
                      {v.desc}
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
