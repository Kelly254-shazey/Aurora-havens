'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#0A0F1A' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: [0, 200, -150, 100, 0],
              y: [0, -180, 120, -80, 0],
              scale: [1, 1.3, 0.9, 1.2, 1],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: 0 }}
          />
          <motion.div
            className="absolute w-[700px] h-[700px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #F4C2C2 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: [0, -200, 180, -100, 0],
              y: [0, 150, -200, 80, 0],
              scale: [1, 0.8, 1.4, 1.1, 1],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: 0 }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, #1E4D8C 0%, transparent 70%)',
              filter: 'blur(100px)',
            }}
            animate={{
              x: [0, 150, -200, 50, 0],
              y: [0, -100, 150, -150, 0],
              scale: [1, 1.2, 0.7, 1.3, 1],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: 0 }}
          />

          {/* Rotating ring */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border-2 border-gold-500/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: 'linear', repeat: 0 }}
          />
          <motion.div
            className="absolute w-[26rem] h-[26rem] rounded-full border border-white/5"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, ease: 'linear', repeat: 0 }}
          />

          {/* Logo center */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="w-60 h-60 sm:w-72 sm:h-72 bg-white/10 backdrop-blur-xl rounded-[2rem] flex items-center justify-center shadow-2xl shadow-gold-500/30 border border-white/10 overflow-hidden mb-8"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(212,175,55,0.15)',
                  '0 0 80px rgba(212,175,55,0.4)',
                  '0 0 40px rgba(212,175,55,0.15)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src="/logo.png"
                alt="Aurora Havens"
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl font-bold text-white tracking-tight mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Aurora Havens
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg tracking-[0.35em] uppercase font-semibold"
              style={{ color: '#D4AF37' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Building Prosperity
            </motion.p>

            {/* Loading bar */}
            <motion.div className="mt-10 w-56 h-[3px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #D4AF37, #F4C2C2, #D4AF37)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
