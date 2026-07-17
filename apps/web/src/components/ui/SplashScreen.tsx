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
            className="absolute w-[600px] h-[600px] rounded-full opacity-40"
            style={{
              background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, 200, -150, 100, 0],
              y: [0, -180, 120, -80, 0],
              scale: [1, 1.3, 0.9, 1.2, 1],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: 0 }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, #F4C2C2 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, -200, 180, -100, 0],
              y: [0, 150, -200, 80, 0],
              scale: [1, 0.8, 1.4, 1.1, 1],
            }}
            transition={{ duration: 3.5, ease: 'easeInOut', repeat: 0 }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, #1E4D8C 0%, transparent 70%)',
              filter: 'blur(80px)',
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
            className="absolute w-48 h-48 rounded-full border border-gold-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: 'linear', repeat: 0 }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-white/5"
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
              className="w-36 h-36 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl shadow-gold-500/20 border border-white/10 overflow-hidden mb-6"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(212,175,55,0.1)',
                  '0 0 60px rgba(212,175,55,0.3)',
                  '0 0 30px rgba(212,175,55,0.1)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src="/logo.png"
                alt="Aurora Havens"
                className="w-28 h-28 object-contain"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.h1
              className="font-display text-3xl font-bold text-white tracking-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Aurora Havens
            </motion.h1>

            <motion.p
              className="text-sm tracking-[0.3em] uppercase font-medium"
              style={{ color: '#D4AF37' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ delay: 1, duration: 1.5 }}
            >
              Building Prosperity
            </motion.p>

            {/* Loading bar */}
            <motion.div className="mt-8 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
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
