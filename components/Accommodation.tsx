
import React from 'react';
import { Bed, MapPin, Star, ExternalLink, Calendar } from 'lucide-react';

const AccommodationView: React.FC = () => {
  // Define accommodation data for the trip
  const accommodations = [
    {
      name: 'Holiday Inn Kuala Lumpur Bangsar',
      date: '01/23 - 01/25',
      type: 'City Hotel',
      location: 'Bangsar, Kuala Lumpur',
      rating: 4.5,
      features: ['近谷中城購物中心', '無邊際泳池', '高評價早餐'],
      desc: '位於吉隆坡時尚的孟沙區，交通便利，是探索城市與購物的不二之選。',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Mercure Maldives Kooddoo Resort',
      date: '01/25 - 01/29',
      type: 'Overwater Villa',
      location: 'Gaafu Alifu Atoll, Maldives',
      rating: 4.9,
      features: ['全包式服務', '玻璃地板水上屋', '豐富浮潛點'],
      desc: '坐落於清澈見底的礁湖之上，提供無與倫比的隱私與美景。全包式內容包含餐飲與部分活動。',
      imageUrl: 'https://images.unsplash.com/photo-1506929199039-b024474ff1f8?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'h78 Maldives',
      date: '01/29 - 01/30',
      type: 'Beachfront Hotel',
      location: 'Hulhumale, Maldives',
      rating: 4.3,
      features: ['近機場接駁', '沙灘第一排', '質感設計'],
      desc: '位於胡魯馬累居民島，提供溫馨舒適的住宿，適合在回程前享受最後的沙灘與日落。',
      imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Umi SplashMania Homestay',
      date: '01/30 - 01/31',
      type: 'Homestay',
      location: 'Kuala Langat, Malaysia',
      rating: 4.2,
      features: ['近機場', '現代居家感', '休整首選'],
      desc: '位於吉隆坡機場周邊，適合在最後一晚進行休整，為隔天的航程做準備。',
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Header Section */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h2 className="text-3xl font-bold serif text-[#4E342E]">住宿安排</h2>
          <p className="text-[11px] text-[#A68A71] font-black uppercase tracking-[0.25em] mt-2">Accommodations</p>
        </div>
        <div className="bg-[#4E342E] text-white p-3 rounded-2xl shadow-xl">
           <Bed size={24} />
        </div>
      </div>

      {/* Accommodation Cards List */}
      <div className="grid gap-8">
        {accommodations.map((hotel, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-[#F5EBE0] group hover:border-[#D8C4B6] transition-all flex flex-col sm:flex-row">
            {/* Hotel Image */}
            <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
               <img 
                 src={hotel.imageUrl} 
                 alt={hotel.name}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute top-4 left-4 bg-[#4E342E]/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {hotel.type}
               </div>
            </div>
            
            {/* Hotel Content */}
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-[#D8C4B6] mb-1">
                     <Calendar size={12} strokeWidth={3} />
                     <span className="text-[10px] font-black uppercase tracking-widest">{hotel.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100/30">
                    <Star size={10} fill="currentColor" /> {hotel.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#4E342E] mb-2 serif">{hotel.name}</h3>
                
                <div className="flex items-center gap-1.5 text-[#A68A71] text-[11px] font-bold mb-4">
                  <MapPin size={12} className="text-[#D8C4B6]" />
                  <span>{hotel.location}</span>
                </div>
                
                <p className="text-[11px] text-[#A68A71] leading-relaxed mb-6 font-medium">
                  {hotel.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.features.map((f, i) => (
                    <span key={i} className="text-[9px] font-black text-[#4E342E] bg-[#FDFBF7] border border-[#F5EBE0] px-2.5 py-1 rounded-lg">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name)}`, '_blank')}
                  className="flex items-center gap-2 text-[10px] font-black text-[#4E342E] uppercase tracking-widest hover:text-[#D8C4B6] transition-colors"
                >
                  View Details <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccommodationView;
