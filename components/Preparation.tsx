
import React from 'react';
import { PREPARATION_CHECKLIST } from '../constants';
import { Check, Luggage, ShieldCheck, FileText, Anchor, Activity, CreditCard } from 'lucide-react';

const Preparation: React.FC = () => {
  const categories = ['Document', 'Gear', 'Health', 'Money'] as const;

  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'Document': return { label: '證件與電子卡', icon: FileText, color: 'text-blue-500' };
      case 'Gear': return { label: '潛水與日常裝備', icon: Anchor, color: 'text-teal-500' };
      case 'Health': return { label: '個人醫藥與防護', icon: Activity, color: 'text-rose-500' };
      case 'Money': return { label: '金流與當地通訊', icon: CreditCard, color: 'text-amber-500' };
      default: return { label: cat, icon: Check, color: 'text-gray-500' };
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Hero Header */}
      <div className="bg-[#D8C4B6] p-7 rounded-[2.5rem] text-[#FDFBF7] shadow-xl shadow-[#D8C4B6]/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Luggage size={140} />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2 serif">嶼海紀行 · 行前檢查</h2>
          <p className="text-[#FDFBF7]/90 text-[11px] font-medium tracking-wide leading-relaxed max-w-[90%]">
            參考 Stan Travel 建議之清單，確保 2026 馬來西亞與馬爾地夫之旅萬無一失。
          </p>
        </div>
      </div>

      {/* Grid of Checklists */}
      <div className="grid gap-8">
        {categories.map((cat) => {
          const meta = getCategoryMeta(cat);
          const Icon = meta.icon;
          return (
            <section key={cat} className="space-y-4">
              <div className="flex items-center gap-3 px-2">
                <div className="w-9 h-9 bg-white rounded-xl shadow-sm border border-[#F5EBE0] flex items-center justify-center">
                  <Icon size={18} className={meta.color} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#4E342E] uppercase tracking-widest">{meta.label}</h3>
                  <span className="text-[8px] font-black text-[#A68A71] uppercase">{cat} Checklist</span>
                </div>
              </div>
              
              <div className="grid gap-3">
                {PREPARATION_CHECKLIST.filter(i => i.category === cat).map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl border border-[#F5EBE0] flex items-start gap-4 hover:border-[#D8C4B6] transition-all group shadow-sm">
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-6 h-6 rounded-lg border-2 border-[#F5EBE0] flex items-center justify-center text-[#D8C4B6] group-hover:bg-[#D8C4B6] group-hover:text-white group-hover:border-[#D8C4B6] transition-all cursor-pointer">
                        <Check size={14} strokeWidth={4} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4E342E] text-sm mb-1">{item.title}</h4>
                      <p className="text-[10px] text-[#A68A71] leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Warning / Important Notes */}
      <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-white/5">
        <div className="flex items-center gap-4 mb-5">
           <div className="bg-amber-400 p-2 rounded-lg">
              <ShieldCheck size={20} className="text-slate-900" />
           </div>
           <h4 className="font-bold text-white text-base">管家特別叮嚀</h4>
        </div>
        <div className="space-y-4 text-[11px] text-slate-400 leading-relaxed font-medium">
          <p className="flex gap-3">
            <span className="text-amber-400 font-black">●</span>
            <span><strong className="text-slate-200">禁止攜帶:</strong> 馬爾地夫嚴禁攜帶「酒類、豬肉製品」入境，海關檢查極嚴。</span>
          </p>
          <p className="flex gap-3">
            <span className="text-amber-400 font-black">●</span>
            <span><strong className="text-slate-200">環保意識:</strong> 建議自備可循環水壺。防曬乳務必選擇珊瑚友善 (Reef Safe) 成分。</span>
          </p>
          <p className="flex gap-3">
            <span className="text-amber-400 font-black">●</span>
            <span><strong className="text-slate-200">網路通訊:</strong> 吉隆坡機場可辦 DIGI/Celcom，馬爾地夫建議購買 Ooredoo/Dhiraagu。</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
