
import React from 'react';
import { Plane, Train, ArrowRight, Ticket, Calendar, MapPin } from 'lucide-react';

const Transport: React.FC = () => {
  const getGoogleMapsUrl = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

  const transports = [
    {
      date: '01/23',
      type: 'HSR',
      id: '高鐵 0818 次',
      from: '左營',
      to: '桃園',
      depTime: '10:25',
      arrTime: '12:18',
      note: '自由座請避開 10-12 車廂',
      color: 'bg-[#D8C4B6]'
    },
    {
      date: '01/23',
      type: 'Flight',
      id: 'MH 367',
      from: 'TPE',
      to: 'KUL',
      depTime: '15:10',
      arrTime: '20:05',
      note: '馬來西亞航空 | 直飛 4h 55m',
      color: 'bg-[#4E342E]'
    },
    {
      date: '01/25',
      type: 'Flight',
      id: 'MH 485',
      from: 'KUL',
      to: 'MLE',
      depTime: '09:40',
      arrTime: '11:00',
      note: '馬來西亞航空 | 航廈 T1',
      color: 'bg-[#4E342E]'
    },
    {
      date: '01/30',
      type: 'Flight',
      id: 'MH 484',
      from: 'MLE',
      to: 'KUL',
      depTime: '12:00',
      arrTime: '19:45',
      note: '馬來西亞航空 | 返回吉隆坡',
      color: 'bg-[#4E342E]'
    },
    {
      date: '01/31',
      type: 'Flight',
      id: 'MH 366',
      from: 'KUL',
      to: 'TPE',
      depTime: '09:20',
      arrTime: '14:10',
      note: '馬來西亞航空 | 直飛 4h 50m',
      color: 'bg-[#4E342E]'
    },
    {
      date: '01/31',
      type: 'HSR',
      id: '高鐵 0841 次',
      from: '桃園',
      to: '左營',
      depTime: '16:34',
      arrTime: '18:25',
      note: '平安賦歸 | 車廂 8-12',
      color: 'bg-[#D8C4B6]'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex justify-between items-end px-2">
        <div>
          <h2 className="text-3xl font-bold serif text-[#4E342E]">交通與接駁</h2>
          <p className="text-[11px] text-[#A68A71] font-black uppercase tracking-[0.25em] mt-2">Transportation Schedule</p>
        </div>
        <div className="bg-[#4E342E] text-white p-3 rounded-2xl shadow-xl">
           <Plane size={24} />
        </div>
      </div>
      
      <div className="grid gap-8">
        {transports.map((t, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-[#F5EBE0] flex relative group hover:border-[#D8C4B6] transition-all">
            <div className={`w-2 ${t.color}`} />
            <div className="p-8 flex-1">
              {/* Header Info */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#FDFBF7] p-3 rounded-xl text-[#A68A71] border border-[#F5EBE0]">
                    {t.type === 'Flight' ? <Plane size={18} /> : <Train size={18} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-base text-[#4E342E]">{t.id}</span>
                      <span className={`px-2 py-0.5 text-[9px] font-black rounded-md ${t.type === 'Flight' ? 'bg-[#4E342E] text-[#FDFBF7]' : 'bg-[#D8C4B6] text-[#FDFBF7]'}`}>{t.type}</span>
                    </div>
                    <div className="text-[10px] text-[#A68A71] font-bold mt-1 uppercase tracking-wider">{t.date} · 2026</div>
                  </div>
                </div>
                <Ticket size={18} className="text-[#A68A71] opacity-20" />
              </div>
              
              {/* Main Schedule Row - Times on sides */}
              <div className="flex items-center justify-between gap-2">
                {/* Departure Side */}
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-5xl font-black text-[#4E342E] tracking-tighter shrink-0">{t.depTime}</span>
                  <button onClick={() => window.open(getGoogleMapsUrl(t.from), '_blank')} className="flex flex-col items-start gap-0.5 group/loc">
                    <span className="text-lg font-bold text-[#4E342E] group-hover/loc:text-[#D8C4B6] transition-colors">{t.from}</span>
                    <span className="text-[10px] text-[#A68A71] font-black uppercase tracking-widest flex items-center gap-1">
                       Departure <MapPin size={8} />
                    </span>
                  </button>
                </div>

                {/* Arrow Divider */}
                <div className="flex flex-col items-center justify-center opacity-30 px-2 shrink-0">
                  <ArrowRight size={24} />
                </div>

                {/* Arrival Side */}
                <div className="flex items-center gap-4 flex-1 justify-end">
                  <button onClick={() => window.open(getGoogleMapsUrl(t.to), '_blank')} className="flex flex-col items-end gap-0.5 group/loc">
                    <span className="text-lg font-bold text-[#4E342E] group-hover/loc:text-[#D8C4B6] transition-colors">{t.to}</span>
                    <span className="text-[10px] text-[#A68A71] font-black uppercase tracking-widest flex items-center gap-1">
                       <MapPin size={8} /> Arrival
                    </span>
                  </button>
                  <span className="text-5xl font-black text-[#4E342E] tracking-tighter shrink-0">{t.arrTime}</span>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-5 border-t border-[#F5EBE0] flex justify-between items-center">
                 <div className="flex items-center gap-2">
                    <Calendar size={12} className="text-[#D8C4B6]" />
                    <span className="text-[10px] font-black text-[#A68A71] uppercase tracking-widest">{t.date} Journey</span>
                 </div>
                 <span className="text-[10px] font-bold text-[#A68A71] italic bg-[#FDFBF7] px-3 py-1 rounded-full border border-slate-50">{t.note}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
