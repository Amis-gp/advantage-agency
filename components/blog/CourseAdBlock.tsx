'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CourseAdBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-16 relative overflow-hidden rounded-2xl border-2 border-red-500/50 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-900/90 backdrop-blur-sm p-8 md:p-12 shadow-2xl shadow-red-600/20"
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-2 bg-red-600/30 border border-red-500/70 rounded-full mb-4 backdrop-blur-sm"
            >
              <span className="text-red-400 font-bold text-sm uppercase tracking-wider">
                🚀 Exclusive Training Program
              </span>
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-red-400 to-red-300 bg-clip-text text-transparent">
              Master Black Affiliate Marketing
            </h3>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl">
              Unlock the secrets of high-performance affiliate marketing. Learn advanced techniques to overcome ad limitations and keep your <span className="text-red-400 font-semibold">ROI always positive</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <span className="text-red-500 font-bold text-lg">✓</span>
                <span className="text-sm">70+ Lessons</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <span className="text-red-500 font-bold text-lg">✓</span>
                <span className="text-sm">Personal Mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                <span className="text-red-500 font-bold text-lg">✓</span>
                <span className="text-sm">Lifetime Access</span>
              </div>
            </div>
            
            <Link
              href="/black-affiliate-marketing-2"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/50 hover:shadow-red-600/70"
            >
              <span>Learn More</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          {/* Right side - Visual element with stats */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ rotate: -5, scale: 0.9 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-56 h-56 md:w-72 md:h-72"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-red-800/40 rounded-2xl rotate-6 blur-2xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-zinc-900 to-black border-2 border-red-500/70 rounded-2xl p-8 flex flex-col items-center justify-center h-full shadow-xl">
                <div className="text-6xl mb-4 animate-bounce">🎯</div>
                <div className="text-red-400 font-bold text-3xl mb-1">€400K+</div>
                <div className="text-gray-400 text-sm mb-4">Net Profit</div>
                <div className="text-center pt-4 border-t border-red-500/30 w-full">
                  <div className="text-red-500 text-xs uppercase tracking-wider mb-1">Real Results</div>
                  <div className="text-gray-300 text-sm">From Our Students</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

