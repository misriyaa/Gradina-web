import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * ThreeDCard Component
 * Wraps content in a 3D perspective card that tracks cursor movement to create a tilt and sheen highlight.
 */
export default function ThreeDCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for X/Y rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to avoid jittery movements
  const rotateX = useSpring(x, { damping: 25, stiffness: 200 });
  const rotateY = useSpring(y, { damping: 25, stiffness: 200 });

  // Transforms for gradient glares
  const sheenX = useTransform(y, [-15, 15], ['100%', '-100%']);
  const sheenY = useTransform(x, [-15, 15], ['100%', '-100%']);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized cursor positions (-0.5 to 0.5)
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    // Convert mouse position to degrees of rotation (max 12 deg)
    const degX = -(mouseY / (height / 2)) * 12;
    const degY = (mouseX / (width / 2)) * 12;

    x.set(degX);
    y.set(degY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`perspective-1000 transform-style-3d tactile-card rounded-2xl transition-all duration-300 relative overflow-hidden bg-white dark:bg-stone-900/60 ${className} ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      }`}
    >
      {/* Glare Sheen Layer */}
      <motion.div
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)',
          left: sheenX,
          top: sheenY,
          width: '200%',
          height: '200%',
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute pointer-events-none z-10 mix-blend-overlay"
      />

      {/* Child content container with 3D translation support */}
      <div className="h-full w-full transform-style-3d">
        {children}
      </div>
    </motion.div>
  );
}
