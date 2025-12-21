import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  ClipboardCheck, Map as MapIcon, Plane, Bed, Sparkles, MessageSquare, 
  Compass, Coins, X, Send, Bot, User, Loader2, Clock, Star, Waves, 
  Calendar, MapPin, ExternalLink, Train, ArrowRight, ChevronRight,
  Check, Utensils, Camera, ShoppingBag, Info, Luggage, Home, Ticket
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// --- 常數資料 ---
const USD_TO_TWD = 32.5;
const MYR_TO_TWD = 7.5;

const PREPARATION_CHECKLIST = [
  { id: 'p1', category: 'Document', title: '護照正本 (效期 6 個月以上)', description: '拍照存於手機或準備兩份影本分開放。' },
  { id: 'p2', category: 'Document', title: '馬爾地夫 IMUGA 申報', description: '入境前 96 小時內填寫，截圖 QR Code。' },
  { id: 'p3', category: 'Document', title: '馬來西亞 MDAC 電子卡', description: '抵達前 3 天內線上申報。' },
  { id: 'p4', category: 'Document', title: '機票與飯店憑證', description: '包含 MH 航班、Mercure、h78 訂房證明。' },
  { id: 'p6', category: 'Gear', title: '浮潛裝備 (面鏡、呼吸管)', description: '建議自備，蛙鞋可現場租。' },
  { id: 'p7', category: 'Gear', title: '水母衣與潛水襪', description: '防曬防刮傷，海島必備。' },
  { id: 'p11', category: 'Health', title: '常備藥品 (暈船、腸胃、止痛)', description: '快艇轉運易暈船，務必隨身攜帶。' },
  { id: 'p13', category: 'Money', title: '美金現金 (1元新鈔)', description: '備 50-100 張 1 元用於各類小費。' },
];

const MALDIVES_ACTIVITIES = [
  { id: '1', nameEn: 'Whale Shark Safari', nameZh: '鯨鯊追蹤遊 (必去)', priceUsd: 220 },
  { id: '2', nameEn: 'Manta Ray Snorkeling', nameZh: '魟魚浮潛體驗', priceUsd: 115 },
  { id: '3', nameEn: 'Sunset Fishing', nameZh: '傳統黃昏海釣', priceUsd: 95 },
  { id: '4', nameEn: 'Parasailing', nameZh: '高空拖曳傘', priceUsd: 160 },
  { id: '5', nameEn: 'Discover Scuba Diving', nameZh: '體驗深潛 (免證照)', priceUsd: 195 },
  { id: '6', nameEn: 'SPA Treatment', nameZh: '水上 SPA 舒壓按摩', priceUsd: 150 },
];

const TRAVEL_ITINERARY = [
  { date: '1/23', title: '啟程：吉隆坡孟沙', activities: [{ time: '10:25', title: '高鐵左營 -> 桃園', loc: '高鐵左營站' }, { time: '15:10', title: 'MH367 起飛', loc: '桃園機場' }, { time: '21:30', title: '入住飯店', loc: 'Holiday Inn Bangsar' }], summary: '由左營高鐵出發，經桃園轉機飛抵吉隆坡。' },
  { date: '1/24', title: '大馬文化漫遊', activities: [{ time: '09:00', title: '黑風洞探索', loc: 'Batu Caves' }, { time: '12:30', title: '道地肉骨茶午餐', loc: 'Bukit Bintang', isRec: true, rating: 4.4 }, { time: '19:00', title: '孟沙區晚餐', loc: 'Bangsar Village', isRec: true, rating: 4.5 }], summary: '體驗吉隆坡文化與孟沙區美食。' },
  { date: '1/25', title: '飛向美居渡假村', isMaldives: true, activities: [{ time: '09:40', title: 'MH485 飛馬累', loc: 'KLIA T1' }, { time: '16:00', title: '抵達美居渡假村', loc: 'Mercure Maldives Kooddoo' }], summary: '轉機馬累，前往頂級水上別墅。' },
  { date: '1/26', title: '渡假村全日休閒', isMaldives: true, activities: [{ time: '09:00', title: '別墅外浮潛', loc: 'Mercure Reef' }, { time: '19:00', title: '夕陽晚宴', loc: 'Alita Restaurant' }], summary: '全包式享受，盡情在玻璃海中漫遊。' },
  { date: '1/27', title: '鯨鯊與海洋探險', isMaldives: true, activities: [{ time: '08:30', title: '自費：鯨鯊探險', loc: 'Gaafu Alifu Atoll', isRec: true, rating: 4.9 }, { time: '17:00', title: '黃昏海釣', loc: 'Traditional Dhoni' }], summary: '追蹤海洋巨人，體驗馬爾地夫日常。' },
  { date: '1/28', title: '高空俯瞰環礁', isMaldives: true, activities: [{ time: '10:00', title: '高空拖曳傘', loc: 'Kooddoo Lagoon' }, { time: '15:00', title: 'SPA 按摩', loc: 'Wellness Center' }], summary: '從空中視角欣賞印度洋珍珠。' },
  { date: '1/29', title: '移師居民島 h78', activities: [{ time: '11:00', title: '前往居民島', loc: 'Hulhumale' }, { time: '17:00', title: '沙灘夕陽漫步', loc: 'h78 Maldives' }], summary: '前往胡魯馬累，感受在地生活。' },
  { date: '1/30', title: '返程：大馬 Umi', activities: [{ time: '12:00', title: 'MH484 返大馬', loc: 'Velana Airport' }, { time: '21:30', title: '入住 Umi 民宿', loc: 'Umi SplashMania Homestay' }], summary: '飛回吉隆坡，入住機場周邊民宿。' },
  { date: '1/31', title: '平安賦歸', activities: [{ time: '09:20', title: 'MH366 返台', loc: 'KLIA T1' }, { time: '16:34', title: '高鐵返家', loc: '高鐵桃園站' }], summary: '搭機回台，高鐵返回左營。' },
];

const getMapsUrl = (loc: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}`;

// --- 子組件 ---

const Chatbot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState([{ role: 'assistant', content: '您好！我是您的 AI 旅遊管家。想了解 2026 年的行程細節或想更換景點嗎？' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const msg = input.trim(); setInput('');
    setMessages(prev => [...prev, { role: 'user', content: msg }]);
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env as any).API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一位專業且親切的旅遊管家。針對 2026/1/23-1/31 的吉隆坡與馬爾地夫行程回答問題。用戶問：${msg}`,
        config: { systemInstruction: "你是親切的旅遊助手。1/23-24 KL, 1/25-29 Maldives Resort, 1/29-30 Local Island, 1/31 Return. 請簡短回答。" }
      });
      setMessages(prev => [...prev, { role: 'assistant', content: response.text || '連線逾時。' }]);
    } catch { setMessages(prev => [...prev, { role: 'assistant', content: 'AI 目前忙碌中。' }]); }
    setLoading(false);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 bg-slate-900 text-white flex justify-between items-center pt-safe">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-2xl flex items-center justify-center"><Bot size={24} /></div>
            <div><h2 className="font-bold">AI 旅遊助手</h2><div className="text-[10px] text-teal-400">正在線上</div></div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full"><X size={24} /></button>
        </div>
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[85%] ${m.role === 'user' ? 'bg-[#D8C4B6] text-white shadow-md' : 'bg-white text-slate-700 border border-[#F5EBE0]'}`}>{m.content}</div>
            </div>
          ))}
          {loading && <div className="flex justify-start"><div className="p-4 rounded-2xl bg-white border border-[#F5EBE0] flex items-center gap-2 text-slate-400 text-sm"><Loader2 size={16} className="animate-spin" /> 思考中...</div></div>}
        </div>
        <div className="p-4 border-t border-[#F5EBE0] bg-white pb-safe">
          <div className="flex gap-2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="輸入問題..." className="flex-1 bg-[#FDFBF7] border border-[#F5EBE0] rounded-2xl px-5 py-3 text-sm outline-none" />
            <button onClick={handleSend} disabled={!input.trim() || loading} className="bg-[#4E342E] text-white p-4 rounded-2xl shadow-lg disabled:opacity-50"><Send size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 主介面 ---

const App = () => {
  const [activeTab, setActiveTab] = useState('ITINERARY');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'PREPARATION':
        return (
          <div className="fade-in space-y-8">
            <div className="bg-[#D8C4B6] p-7 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
              <Luggage className="absolute top-0 right-0 opacity-10 w-32 h-32" />
              <h2 className="text-2xl font-bold serif mb-2">行前準備清單</h2>
              <p className="text-[11px] opacity-90 leading-relaxed">參考 Stan Travel 建議，確保旅途無礙。</p>
            </div>
            <div className="grid gap-3">
              {PREPARATION_CHECKLIST.map(item => (
                <div key={item.id} className="bg-white p-5 rounded-2xl border border-[#F5EBE0] flex items-start gap-4 shadow-sm group hover:border-[#D8C4B6]">
                  <Check size={16} className="text-[#D8C4B6] mt-1 shrink-0" />
                  <div><h4 className="font-bold text-sm text-[#4E342E]">{item.title}</h4><p className="text-[10px] text-[#A68A71] mt-0.5">{item.description}</p></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'ITINERARY':
        return <ItineraryView />;
      case 'TRANSPORT':
        return (
          <div className="fade-in space-y-6">
            <h2 className="text-3xl font-bold serif text-[#4E342E] px-2">交通安排</h2>
            {[
              { date: '01/23', id: '高鐵 0818', from: '左營', to: '桃園', time: '10:25-12:18', isTrain: true },
              { date: '01/23', id: 'MH 367', from: 'TPE', to: 'KUL', time: '15:10-20:05' },
              { date: '01/25', id: 'MH 485', from: 'KUL', to: 'MLE', time: '09:40-11:00' },
              { date: '01/30', id: 'MH 484', from: 'MLE', to: 'KUL', time: '12:00-19:45' },
              { date: '01/31', id: 'MH 366', from: 'KUL', to: 'TPE', time: '09:20-14:10' },
              { date: '01/31', id: '高鐵 0841', from: '桃園', to: '左營', time: '16:34-18:25', isTrain: true },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-[#F5EBE0] flex overflow-hidden shadow-sm">
                <div className={`w-2 ${t.isTrain ? 'bg-[#D8C4B6]' : 'bg-[#4E342E]'}`} />
                <div className="p-7 flex-1 flex justify-between items-center">
                  <div>
                    <div className="font-black text-lg text-[#4E342E]">{t.id}</div>
                    <div className="text-[10px] text-[#A68A71] font-bold uppercase">{t.date} · {t.from} ➔ {t.to}</div>
                  </div>
                  <div className="text-right"><div className="text-base font-black text-[#4E342E]">{t.time}</div></div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'ACCOMMODATION':
        return (
          <div className="fade-in space-y-8">
            <h2 className="text-3xl font-bold serif text-[#4E342E] px-2">旅宿清單</h2>
            {[
              { name: 'Holiday Inn Bangsar', nameZh: '吉隆坡孟沙假日酒店', date: '1/23-1/25', img: 'https://images.unsplash.com/photo-1551882547-ff43c63e17e5?auto=format&fit=crop&q=80&w=800' },
              { name: 'Mercure Maldives Resort', nameZh: '美居馬爾地夫渡假村', date: '1/25-1/29', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800' },
              { name: 'h78 Maldives', nameZh: 'h78 馬爾地夫飯店', date: '1/29-1/30', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800' },
              { name: 'Umi Homestay', nameZh: 'Umi SplashMania 民宿', date: '1/30-1/31', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800' },
            ].map((h, i) => (
              <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-[#F5EBE0]">
                <img src={h.img} alt={h.name} className="h-56 w-full object-cover" />
                <div className="p-8">
                  <h3 className="text-xl font-bold serif text-[#4E342E]">{h.nameZh}</h3>
                  <p className="text-[11px] text-[#A68A71] mt-1">{h.name}</p>
                  <div className="mt-6 pt-5 border-t border-slate-50 flex justify-between items-center text-sm font-bold text-[#4E342E]">
                    <div className="flex items-center gap-2"><Calendar size={14} className="text-[#D8C4B6]" /> {h.date}</div>
                    <button onClick={() => window.open(getMapsUrl(h.name), '_blank')} className="text-[#D8C4B6] flex items-center gap-1">地圖 <ChevronRight size={12} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'RECOMMENDATION':
        return (
          <div className="fade-in space-y-8">
            <h2 className="text-3xl font-bold serif text-[#4E342E] px-2">在地推薦</h2>
            {[
              { title: '在地美食', icon: Utensils, items: ['Nasi Lemak Wanjo (KL)', '新峰肉骨茶 (KL)', 'Ithaa 水下餐廳 (MV)'] },
              { title: '必訪景點', icon: Camera, items: ['黑風洞 Batu Caves (KL)', '迪格拉島 Dhigurah (MV)', '雙子星塔 (KL)'] },
            ].map((cat, i) => (
              <div key={i} className="bg-white p-7 rounded-[2.5rem] border border-[#F5EBE0] shadow-sm">
                <h3 className="font-bold text-lg text-[#4E342E] flex items-center gap-3 mb-4"><cat.icon size={20} className="text-[#D8C4B6]" /> {cat.title}</h3>
                <div className="grid gap-3">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-[#A68A71] cursor-pointer" onClick={() => window.open(getMapsUrl(item), '_blank')}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D8C4B6]" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'CURRENCY':
        return <CurrencyConverter />;
      default: return <ItineraryView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-safe">
      <header className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-[#F5EBE0] py-4 pt-safe">
        <div className="max-w-xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D8C4B6] rounded-2xl flex items-center justify-center text-white shadow-md"><Compass size={20} /></div>
            <div><h1 className="font-bold text-lg serif text-[#4E342E]">2026 嶼海紀行</h1><p className="text-[9px] font-black text-[#A68A71] uppercase tracking-[0.2em]">Travel Planner</p></div>
          </div>
          <button onClick={() => setIsChatOpen(true)} className="bg-[#4E342E] text-white p-2.5 rounded-2xl shadow-lg active:scale-95"><MessageSquare size={20} /></button>
        </div>
      </header>
      <main className="flex-grow pt-24 pb-32 max-w-xl mx-auto w-full px-4">{renderContent()}</main>
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-lg z-50">
        <div className="glass-effect rounded-[2.5rem] shadow-2xl border border-[#F5EBE0]/60 p-2 flex justify-between items-center">
          {[
            { id: 'PREPARATION', icon: ClipboardCheck, label: '準備' },
            { id: 'ITINERARY', icon: MapIcon, label: '行程' },
            { id: 'TRANSPORT', icon: Plane, label: '交通' },
            { id: 'ACCOMMODATION', icon: Bed, label: '住宿' },
            { id: 'RECOMMENDATION', icon: Sparkles, label: '推薦' },
            { id: 'CURRENCY', icon: Coins, label: '換算' }
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)} className={`flex flex-col items-center justify-center py-3 rounded-[1.8rem] transition-all flex-1 ${activeTab === item.id ? 'tab-active scale-105' : 'text-[#A68A71]'}`}>
              <item.icon size={20} /><span className={`text-[10px] mt-1 font-bold ${activeTab === item.id ? 'block' : 'hidden'}`}>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

const ItineraryView = () => {
  const [dayIdx, setDayIdx] = useState(0);
  const day = TRAVEL_ITINERARY[dayIdx];
  return (
    <div className="fade-in">
      <div className="flex overflow-x-auto gap-3 pb-6 no-scrollbar snap-x">
        {TRAVEL_ITINERARY.map((d, i) => (
          <button key={i} onClick={() => setDayIdx(i)} className={`flex-shrink-0 w-12 h-16 rounded-2xl flex flex-col items-center justify-center transition-all border ${dayIdx === i ? 'bg-[#4E342E] text-white' : 'bg-white text-[#A68A71] border-[#F5EBE0]'}`}>
            <span className="text-[8px] font-black uppercase opacity-60">Jan</span><span className="text-lg font-black mt-1">{d.date.split('/')[1]}</span>
          </button>
        ))}
      </div>
      <div className="bg-white p-7 rounded-[2.5rem] border border-[#F5EBE0] shadow-sm mb-6">
        <div className="flex justify-between items-start mb-6">
          <div><div className="text-[10px] font-black text-[#A68A71] uppercase tracking-[0.2em] mb-1">Day 0{dayIdx + 1} · {day.date}</div><h2 className="text-2xl font-bold text-[#4E342E] serif">{day.title}</h2></div>
          <div className={`p-4 rounded-2xl ${day.isMaldives ? 'bg-[#D8C4B6]/20 text-[#4E342E]' : 'bg-[#4E342E] text-white'}`}>{day.isMaldives ? <Waves size={24} /> : <MapPin size={24} />}</div>
        </div>
        <p className="text-[13px] text-[#A68A71] italic border-l-4 border-[#D8C4B6]/30 pl-4 mb-8 leading-relaxed">{day.summary}</p>
        <div className="space-y-8 relative ml-1">
          <div className="absolute left-[17px] top-3 bottom-3 w-[1px] bg-[#F5EBE0]" />
          {day.activities.map((act, i) => (
            <div key={i} className="flex gap-5 relative z-10">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border-2 ${act.isRec ? 'bg-amber-50 text-amber-500 border-amber-200' : 'bg-white text-[#4E342E] border-[#F5EBE0]'}`}>
                {act.isRec ? <Star size={16} fill="currentColor" /> : <Clock size={16} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5"><span className="text-[11px] font-black text-[#D8C4B6]">{act.time}</span></div>
                <h4 className="font-bold text-base text-[#4E342E]">{act.title}</h4>
                <button onClick={() => window.open(getMapsUrl(act.loc), '_blank')} className="text-[11px] text-[#A68A71] flex items-center gap-1 font-bold mt-1.5"><MapPin size={10} /> {act.loc} <ExternalLink size={10} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {day.isMaldives && (
        <div className="bg-[#4E342E] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
          <h3 className="text-xl font-bold serif mb-6 flex items-center gap-3"><Waves className="text-[#D8C4B6]" /> 度假村自費精選</h3>
          <div className="grid gap-4">
            {MALDIVES_ACTIVITIES.map(item => (
              <div key={item.id} className="bg-white/5 p-4 rounded-2xl flex justify-between items-center border border-white/5">
                <div><h4 className="font-bold text-sm text-[#D8C4B6]">{item.nameZh}</h4><p className="text-[9px] opacity-40 font-bold uppercase">{item.nameEn}</p></div>
                <div className="text-right">
                  <div className="text-lg font-black text-white">${item.priceUsd}</div>
                  <div className="text-[9px] text-[#D8C4B6] font-bold">≈ NT$ {Math.round(item.priceUsd * USD_TO_TWD).toLocaleString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CurrencyConverter = () => {
  const [val, setVal] = useState('');
  const [mode, setMode] = useState('USD');
  const result = val ? Math.round(parseFloat(val) * (mode === 'USD' ? USD_TO_TWD : MYR_TO_TWD)) : 0;
  return (
    <div className="fade-in space-y-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold serif text-[#4E342E] px-2">匯率換算</h2>
      <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-[#F5EBE0] space-y-8">
        <div className="flex bg-[#FDFBF7] p-1.5 rounded-2xl border border-[#F5EBE0]">
          <button onClick={() => setMode('USD')} className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${mode === 'USD' ? 'bg-[#4E342E] text-white shadow-lg' : 'text-[#A68A71]'}`}>美金 USD</button>
          <button onClick={() => setMode('MYR')} className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${mode === 'MYR' ? 'bg-[#4E342E] text-white shadow-lg' : 'text-[#A68A71]'}`}>令吉 MYR</button>
        </div>
        <div className="relative">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="輸入金額" className="w-full bg-[#FDFBF7] border-2 border-[#F5EBE0] rounded-2xl px-6 py-4 text-xl font-black text-[#4E342E] focus:border-[#D8C4B6] outline-none" />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-[#A68A71] text-sm">{mode}</span>
        </div>
        <div className="bg-[#FDFBF7] p-7 rounded-2xl border border-dashed border-[#D8C4B6] text-center">
          <div className="text-[11px] font-black text-[#A68A71] mb-1 uppercase tracking-widest">估計台幣</div>
          <div className="text-4xl font-black text-[#4E342E]">{result.toLocaleString()} <span className="text-sm">TWD</span></div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);