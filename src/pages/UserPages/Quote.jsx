import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, ShieldCheck, Clock, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

import CasualWearForm from "../../components/UserSide/CasualWearForm";
import SportsWearForm from "../../components/UserSide/SportsWearForm";
import LeatherWearForm from "../../components/UserSide/LeatherWearForm";

export default function GetQuoteMain() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'casual',
      title: 'Casual & Streetwear',
      subtitle: 'Heavyweight Hoodies, Oversized Tees, Joggers & Vintage Acid Wash Apparel',
      // High-resolution default image with local asset fallback
      image: '/CasualWear.png',
      fallbackImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
      badge: 'Private Label Choice',
      badgeColor: 'bg-amber-100/80 text-amber-900 border-amber-200/80',
      accentGlow: 'from-amber-500/10 via-orange-400/5 to-transparent',
      borderColor: 'hover:border-amber-400/60 hover:shadow-amber-500/10',
      btnColor: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-amber-500/20'
    },
    {
      id: 'sports',
      title: 'Sports & Activewear',
      subtitle: 'Performance Sublimated Jerseys, Tracksuits, Gym Apparel & Compression Wear',
      image: '/SportsWear.png',
      fallbackImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      badge: 'High Performance',
      badgeColor: 'bg-blue-100/80 text-blue-900 border-blue-200/80',
      accentGlow: 'from-blue-500/10 via-cyan-400/5 to-transparent',
      borderColor: 'hover:border-blue-400/60 hover:shadow-blue-500/10',
      btnColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/20'
    },
    {
      id: 'leather',
      title: 'Leather & Outerwear',
      subtitle: 'Genuine Cowhide & Sheepskin Jackets, Biker Wear & Tailored Custom Leather Coats',
      image: '/LeatherWear.png',
      fallbackImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      badge: 'Premium Genuine Leather',
      badgeColor: 'bg-emerald-100/80 text-emerald-900 border-emerald-200/80',
      accentGlow: 'from-emerald-500/10 via-teal-400/5 to-transparent',
      borderColor: 'hover:border-emerald-400/60 hover:shadow-emerald-500/10',
      btnColor: 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-emerald-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 text-slate-800 font-sans relative overflow-hidden selection:bg-amber-100 selection:text-amber-900">
      
      {/* Subtle Ambient Glass Spheres - Seamless Blend with Sticky Nav */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55rem] h-80 bg-gradient-to-r from-amber-100/30 via-slate-100/50 to-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[30rem] h-[30rem] bg-orange-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        
        {/* Top Floating Control Bar (Shows back action when inside a form) */}
        {selectedCategory && (
          <div className="flex justify-between items-center mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/90 hover:bg-white text-slate-800 text-xs font-bold backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
            >
              <ArrowLeft className="w-4 h-4 text-slate-500 group-hover:-translate-x-1 transition-transform" /> 
              Back to Category Selection
            </motion.button>

            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Auric Custom Quotation Builder
            </span>
          </div>
        )}

        {/* Dynamic Title / Hero Header */}
        <AnimatePresence mode="wait">
          {!selectedCategory && (
            <motion.div
              key="selection-header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/80 shadow-sm text-slate-700 text-xs font-bold mb-4 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> B2B OEM & ODM Custom Apparel Manufacturing
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Request a Custom <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent">Production Quote</span>
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                Choose your garment division below to build your production spec sheet. Get direct Sialkot factory pricing, vector mockup assistance, and sampling options.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Cards Grid or Specific Form Render */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="category-cards"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`bg-white/80 backdrop-blur-2xl border border-white/90 rounded-3xl p-6 shadow-xl shadow-slate-200/50 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${cat.borderColor}`}
                >
                  {/* Subtle Top Accent Mesh */}
                  <div className={`absolute top-0 left-0 right-0 h-36 bg-gradient-to-b ${cat.accentGlow} opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block px-3 py-1 text-[11px] font-extrabold rounded-full border shadow-2xs backdrop-blur-md ${cat.badgeColor}`}>
                        {cat.badge}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors" />
                    </div>

                    {/* Image Box */}
                    <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200/60 shadow-inner relative group-hover:shadow-md transition-shadow">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = cat.fallbackImage;
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors" />
                    </div>

                    <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                      {cat.subtitle}
                    </p>
                  </div>

                  {/* Dynamic Action Button */}
                  <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full py-4 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${cat.btnColor}`}
                  >
                    Start {cat.title.split('&')[0]} Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="selected-form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {selectedCategory === 'casual' && <CasualWearForm onBack={() => setSelectedCategory(null)} />}
              {selectedCategory === 'sports' && <SportsWearForm onBack={() => setSelectedCategory(null)} />}
              {selectedCategory === 'leather' && <LeatherWearForm onBack={() => setSelectedCategory(null)} />}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Value Badges Footer Bar */}
        {!selectedCategory && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-200/80 pt-10 text-slate-700 text-xs font-bold"
          >
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-sm flex items-center gap-3 hover:bg-white/90 transition-colors">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <span>24-Hour Express Spec Evaluation & Quote</span>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-sm flex items-center gap-3 hover:bg-white/90 transition-colors">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>Strict Quality Assurance & Doorstep Export</span>
            </div>
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-sm flex items-center gap-3 hover:bg-white/90 transition-colors">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600">
                <Layers className="w-5 h-5" />
              </div>
              <span>Free Tech Pack & Custom Sample Development</span>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}