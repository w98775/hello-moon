import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import Preparation from './components/Preparation';
import Itinerary from './components/Itinerary';
import Transport from './components/Transport';
import AccommodationView from './components/Accommodation';
import Recommendations from './components/Recommendations';
import CurrencyConverter from './components/CurrencyConverter';
import Chatbot from './components/Chatbot';
import { 
  ClipboardCheck, 
  Map as MapIcon, 
  Plane, 
  Bed, 
  Sparkles, 
  MessageSquare,
  Compass,
  Coins
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    const saved = localStorage.getItem('activeTab');
    return (saved as TabType) || TabType.ITINERARY;
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case TabType.PREPARATION: return <Preparation />;
      case TabType.ITINERARY: return <Itinerary />;
      case TabType.TRANSPORT: return <Transport />;
      case TabType.ACCOMMODATION: return <AccommodationView />;
      case TabType.RECOMMENDATION: return <Recommendations />;
      case TabType.CURRENCY: return <CurrencyConverter />;
      default: return <Itinerary />;
    }
  };

  const navItems = [
    { type: TabType.PREPARATION, label: '準備', icon: ClipboardCheck },
    { type: TabType.ITINERARY, label: '行程', icon: MapIcon },
    { type: TabType.TRANSPORT, label: '交通', icon: Plane },
    { type: TabType.ACCOMMODATION, label: '住宿', icon: Bed },
    { type: TabType.RECOMMENDATION, label: '推薦', icon: Sparkles },
    { type: TabType.CURRENCY, label: '換算', icon: Coins },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#4E342E] selection:bg-[#EAE0D5] selection:text-[#4E342E]">
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-effect shadow-sm py-2 border-b border-[#F5EBE0]' : 'bg-[#FDFBF7] py-4'}`}>
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-9 h-9 bg-[#D8C4B6] rounded-xl flex items-center justify-center text-white shadow-md">
                <Compass size={18} />
             </div>
             <div>
                <h1 className="font-bold text-lg serif tracking-tight text-[#4E342E]">嶼海紀行</h1>
                <p className="text-[9px] font-black text-[#A68A71] uppercase tracking-[0.2em]">MY & MV Journey</p>
             </div>
          </div>
          <button 
            onClick={() => setIsChatOpen(true)}
            className="flex items-center gap-1.5 bg-[#4E342E] text-[#FDFBF7] px-3 py-1.5 rounded-xl text-[10px] font-bold shadow-lg active:scale-95"
          >
            <MessageSquare size={14} />
            <span>AI 管家</span>
          </button>
        </div>
      </header>

      <main className="flex-grow pt-20 pb-28 max-w-4xl mx-auto w-full px-4">
        {renderContent()}
      </main>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[96%] max-w-md z-50">
        <div className="glass-effect rounded-[2rem] shadow-xl border border-[#F5EBE0]/60 p-1.5 flex justify-between items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.type;
            return (
              <button
                key={item.type}
                onClick={() => setActiveTab(item.type)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-[1.5rem] transition-all duration-300 flex-1 ${isActive ? 'bg-[#D8C4B6] text-white shadow-md scale-105' : 'text-[#A68A71]'}`}
              >
                <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                <span className={`text-[9px] mt-1 font-bold ${isActive ? 'block' : 'hidden'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;