
import React, { useState } from 'react';
import { DollarSign, CreditCard, RefreshCw, TrendingUp, Info } from 'lucide-react';
import { USD_TO_TWD, MYR_TO_TWD } from '../constants';

const CurrencyConverter: React.FC = () => {
  const [usd, setUsd] = useState<string>('');
  const [myr, setMyr] = useState<string>('');

  const handleUsdChange = (val: string) => {
    setUsd(val);
    if (val === '') {
      setUsd('');
    }
  };

  const handleMyrChange = (val: string) => {
    setMyr(val);
    if (val === '') {
      setMyr('');
    }
  };

  const usdToTwdResult = usd ? Math.round(parseFloat(usd) * USD_TO_TWD) : 0;
  const myrToTwdResult = myr ? Math.round(parseFloat(myr) * MYR_TO_TWD) : 0;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20 max-w-lg mx-auto">
      <div className="px-2">
        <h2 className="text-3xl font-bold serif text-[#4E342E]">匯率即時換算</h2>
        <p className="text-[11px] text-[#A68A71] font-black uppercase tracking-[0.25em] mt-2">Currency Converter</p>
      </div>

      <div className="grid gap-6">
        {/* USD Card */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#F5EBE0] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <DollarSign size={20} />
            </div>
            <div>
              <h3 className="font-black text-sm text-[#4E342E] uppercase tracking-wider">USD 美金換算</h3>
              <p className="text-[10px] text-[#A68A71] font-bold">1 USD ≈ {USD_TO_TWD} TWD</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="number"
                value={usd}
                onChange={(e) => handleUsdChange(e.target.value)}
                placeholder="輸入美金金額"
                className="w-full bg-[#FDFBF7] border-2 border-[#F5EBE0] rounded-2xl px-6 py-4 text-xl font-black text-[#4E342E] focus:border-[#D8C4B6] outline-none transition-all placeholder:text-[#D8C4B6]/50"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[#A68A71] text-sm">USD</span>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl p-6 border border-dashed border-[#D8C4B6]">
              <div className="text-[11px] font-black text-[#A68A71] uppercase tracking-widest mb-1">估計台幣金額</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#4E342E]">{usdToTwdResult.toLocaleString()}</span>
                <span className="text-sm font-black text-[#A68A71]">TWD</span>
              </div>
            </div>
          </div>
        </div>

        {/* MYR Card */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-[#F5EBE0] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className="font-black text-sm text-[#4E342E] uppercase tracking-wider">MYR 令吉換算</h3>
              <p className="text-[10px] text-[#A68A71] font-bold">1 MYR ≈ {MYR_TO_TWD} TWD</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="number"
                value={myr}
                onChange={(e) => handleMyrChange(e.target.value)}
                placeholder="輸入令吉金額"
                className="w-full bg-[#FDFBF7] border-2 border-[#F5EBE0] rounded-2xl px-6 py-4 text-xl font-black text-[#4E342E] focus:border-[#D8C4B6] outline-none transition-all placeholder:text-[#D8C4B6]/50"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[#A68A71] text-sm">MYR</span>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl p-6 border border-dashed border-[#D8C4B6]">
              <div className="text-[11px] font-black text-[#A68A71] uppercase tracking-widest mb-1">估計台幣金額</div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#4E342E]">{myrToTwdResult.toLocaleString()}</span>
                <span className="text-sm font-black text-[#A68A71]">TWD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <Info size={20} className="text-amber-400" />
          <h4 className="font-bold text-base">換匯小叮嚀</h4>
        </div>
        <div className="space-y-3 text-[11px] text-slate-400 font-medium leading-relaxed">
          <p className="flex gap-2">
            <span className="text-amber-400">●</span>
            <span><strong className="text-slate-200">馬爾地夫:</strong> 主要使用美金 (USD)，當地貨幣羅非亞 (MVR) 僅在居民島小店使用，通常收美金會找羅非亞。</span>
          </p>
          <p className="flex gap-2">
            <span className="text-amber-400">●</span>
            <span><strong className="text-slate-200">馬來西亞:</strong> 使用令吉 (MYR)，刷卡普及率高，建議準備少量現金用於小吃店。</span>
          </p>
          <p className="flex gap-2">
            <span className="text-amber-400">●</span>
            <span><strong className="text-slate-200">提醒:</strong> 匯率隨市場波動，此換算僅供預算參考。建議出發前確認銀行海外刷卡匯率與手續費。</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
