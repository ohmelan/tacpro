"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function PackagesReveal({ packages }: { packages: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full bg-brand-deep text-white px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-brand-deep/90 hover:shadow-lg hover:shadow-brand/20 active:scale-95"
      >
        {isOpen ? "Hide Packages" : "View Packages"}
        <svg 
          className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-8 animate-in slide-in-from-top-6 fade-in duration-700 ease-out">
          <div className="bg-white/10 ring-1 ring-white/10 rounded-[2rem] p-[1px] shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 overflow-hidden rounded-[calc(2rem-1px)]">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.title} 
                  className="bg-brand-deep p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-brand-deep/80 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1">
                <div className="inline-flex items-center justify-between w-full mb-6">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase border ${
                    pkg.badge === "GROWTH" ? "bg-blue-500/20 text-blue-400 border-blue-500/30" :
                    pkg.badge === "PREMIUM" ? "bg-purple-500/20 text-purple-400 border-purple-500/30" :
                    pkg.badge === "ENTERPRISE" ? "bg-rose-500/20 text-rose-400 border-rose-500/30" :
                    pkg.badge === "STARTER" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" :
                    "bg-brand/15 text-brand border-brand/20"
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
                    
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 min-h-[40px]">
                      {pkg.bestFor}
                    </p>
                    
                    <div className="mb-8 pb-8 border-b border-white/10">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-brand font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-white/50 text-xs font-medium uppercase tracking-widest">
                          {pkg.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="flex flex-col gap-5">
                      {pkg.features.map((feature: string, i: number) => {
                        if (feature.trim().toUpperCase() === "OR") {
                          return (
                            <li key={i} className="flex items-center justify-start py-0.5">
                              <span className="text-sm font-semibold text-white/80 pl-8">
                                OR
                              </span>
                            </li>
                          );
                        }
                        
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-0.5 rounded-full bg-brand/20 p-1 shrink-0 group-hover:bg-brand/30 transition-colors">
                              <Check className="w-3 h-3 text-brand" strokeWidth={3} />
                            </div>
                            <span className="text-sm text-white/80 leading-relaxed group-hover:text-white transition-colors">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
