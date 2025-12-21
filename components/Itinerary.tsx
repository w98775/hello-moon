
import React, { useState } from 'react';
import { TRAVEL_ITINERARY, MALDIVES_ACTIVITIES, USD_TO_TWD } from '../constants';
import { Clock, Star, Waves, Calendar, MapPin } from 'lucide-react';

const Itinerary: React.FC = () => {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const currentDay = TRAVEL_ITINERARY[activeDayIdx];

  const getGoogleMapsUrl = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-400 max-w-2xl mx-auto">
      {/* Date Tabs - Small & Compact */}
      <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar mb-6 snap-x justify-start sm:justify-center">
        {TRAVEL_ITINERARY.map((day, idx) => (
          <button
            key={day.date}
            onClick={() => setActiveDayIdx(idx)}
            className={`flex-shrink-0 w-12 h-14 rounded-2xl flex flex-col items-center justify-center transition-all snap-start border ${
              activeDayIdx === idx 
                ? 'bg-[#4E342E] text-white border-[#4E342E] shadow-md scale-105' 
                : 'bg-white text-[#A68A71] border-[#F5EBE0]'
            }`}
          >
            <span className="text-[8px] font-black uppercase opacity-60">Jan</span>
            <span className="text-base font-black leading-none mt-1">{day.date.split('/')[1]}</span>
          </button>
        ))}
      </div>

      {/* Main Itinerary Content - Single Column Focus */}
      <div className="space-y-6">
        <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-sm border border-[#F5EBE0]">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#A68A71]">
                <Calendar size={14} strokeWidth={3} />
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Day 0{activeDayIdx + 1} · {currentDay.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#4E342E] serif leading-tight">{currentDay.title}</h2>
            </div>
            <div className={`p-4 rounded-2xl ${currentDay.isMaldivesResort ? 'bg-[#D8C4B6]/20 text-[#4E342E]' : 'bg-[#4E342E] text-white'}`}>
              {currentDay.isMaldivesResort ? <Waves size={22} /> : <MapPin size={22} />}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[14px] text-[#A68A71] leading-relaxed italic border-l-4 border-[#D8C4B6]/30 pl-4 py-1">
              {currentDay.summary}
            </p>
          </div>

          {/* Timeline Activities - Focused & Readable */}
          <div className="space-y-8 relative ml-1">
            <div className="absolute left-[17px] top-3 bottom-3 w-[1.5px] bg-[#F5EBE0]" />
            
            {currentDay.activities.map((act, i) => (
              <div key={i} className="flex gap-5 group relative">
                <div className="relative z-10 flex flex-col items-center pt-1.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border-2 ${act.isRecommendation ? 'bg-[#FDFBF7] text-[#D8C4B6] border-[#D8C4B6]' : 'bg-white text-[#4E342E] border-[#F5EBE0]'}`}>
                    {act.isRecommendation ? <Star size={16} fill="currentColor" /> : <Clock size={16} />}
                  </div>
                </div>
                <div 
                  className="flex-1 pb-1 cursor-pointer hover:opacity-75 transition-opacity"
                  onClick={() => window.open(getGoogleMapsUrl(act.locationName || act.title), '_blank')}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black text-[#D8C4B6] tracking-wider">{act.time}</span>
                      {act.rating && (
                        <div className="flex items-center gap-1 text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100/30">
                          <Star size={10} fill="currentColor" /> {act.rating}
                        </div>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-base text-[#4E342E] leading-snug mb-2">{act.title}</h4>
                  <div className="flex items-center gap-1.5 text-[#A68A71] text-[11px] font-bold">
                    <MapPin size={12} className="text-[#D8C4B6]" />
                    <span className="underline underline-offset-4 decoration-[#F5EBE0] decoration-2">{act.locationName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Section: Maldives Resort Activities (Integrated at the bottom) */}
        {currentDay.isMaldivesResort && (
          <div className="bg-[#4E342E] rounded-[2.5rem] p-8 text-[#FDFBF7] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Waves size={24} className="text-[#D8C4B6]" />
              </div>
              <div>
                <h3 className="text-xl font-bold serif text-[#FDFBF7]">度假村精選自費活動</h3>
                <p className="text-[10px] text-[#D8C4B6] font-black uppercase tracking-widest mt-1 opacity-70">Optional Excursions</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {MALDIVES_ACTIVITIES.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-white/5 border border-white/5 p-4 rounded-2xl group hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-[#D8C4B6] truncate">{item.nameZh}</h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase truncate tracking-tight">{item.nameEn}</p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <div className="text-lg font-black text-white">${item.priceUsd}</div>
                      <div className="text-[9px] font-bold text-[#D8C4B6] opacity-60">NT$ {Math.round(item.priceUsd * USD_TO_TWD).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[10px] text-white/40 leading-relaxed italic text-center">
                * 活動預約請與您的專屬管家聯繫。價格僅供參考，以現場公告為準。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
