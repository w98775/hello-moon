
import React from 'react';
import { Bed, MapPin, Calendar, Star, Info, Home, ExternalLink } from 'lucide-react';

const Accommodation: React.FC = () => {
  const getGoogleMapsUrl = (name: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)}`;

  const hotels = [
    {
      name: 'Holiday Inn Kuala Lumpur Bangsar, an IHG Hotel',
      nameZh: '吉隆坡孟沙假日酒店 (1/23-25)',
      location: 'Holiday Inn Kuala Lumpur Bangsar, No 1 Jalan Bangsar, KL',
      googleMapsUrl: 'https://maps.app.goo.gl/GFej4dCnh7r4B1hK9',
      locationZh: '吉隆坡孟沙區 (Bangsar)',
      dates: 'Jan 23 - Jan 25 (2 晚)',
      type: 'Modern Upscale Hotel',
      typeZh: '孟沙區頂級質感酒店',
      image: 'https://images.unsplash.com/photo-1551882547-ff43c63e17e5?auto=format&fit=crop&q=80&w=800',
      rating: 4.5,
      note: '位於極具文青氣息的孟沙區，鄰近購物中心與眾多特色異國餐廳。'
    },
    {
      name: 'Mercure Maldives Kooddoo Resort',
      nameZh: '美居馬爾地夫庫杜度假村 (1/25-29)',
      location: 'Mercure Maldives Kooddoo Resort, Gaafu Alifu Atoll',
      locationZh: '卡夫阿里夫環礁',
      dates: 'Jan 25 - Jan 29 (4 晚)',
      type: 'Overwater Villa',
      typeZh: '全包式水上別墅度假村',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
      rating: 4.7,
      note: '擁有絕美珊瑚礁與全包式餐飲服務，內陸飛機即可抵達，無需長時間等候。'
    },
    {
      name: 'h78 Maldives',
      nameZh: 'h78 馬爾地夫飯店 (1/29-30)',
      location: 'h78 Maldives, Hulhumale, Maldives',
      locationZh: '馬累胡魯馬累居民島',
      dates: 'Jan 29 - Jan 30 (1 晚)',
      type: 'Boutique Beachfront Hotel',
      typeZh: '居民島精選海濱飯店',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
      rating: 4.5,
      note: '位於胡魯馬累海灘首排，鄰近機場，是轉機或短期停留居民島的首選。'
    },
    {
      name: 'Umi SplashMania Homestay',
      nameZh: 'Umi SplashMania 民宿 (1/30-31)',
      location: 'Gamuda Cove, Umi SplashMania Homestay, Kuala Langat, Selangor',
      locationZh: '吉隆坡機場周邊/水上樂園區',
      dates: 'Jan 30 - Jan 31 (1 晚)',
      type: 'Modern Homestay',
      typeZh: '現代質感民宿',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      rating: 4.6,
      note: '位於 Gamuda Cove 區，鄰近 SplashMania 水上樂園，適合回台前的最後休憩。'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="px-2">
        <h2 className="text-3xl font-bold serif text-[#4E342E]">精選住宿安排</h2>
        <p className="text-[11px] text-[#A68A71] font-black uppercase tracking-[0.25em] mt-2">Verified Reservations</p>
      </div>
      
      <div className="grid gap-10">
        {hotels.map((h, idx) => (
          <div key={idx} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-[#F5EBE0] flex flex-col group hover:shadow-2xl hover:shadow-[#D8C4B6]/20 transition-all duration-700">
            <div className="h-64 overflow-hidden relative">
              <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl text-[12px] font-black text-[#4E342E] flex items-center gap-2 shadow-sm">
                <Star size={14} className="text-[#D8C4B6]" fill="currentColor" /> {h.rating}
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="bg-[#4E342E]/85 backdrop-blur-md text-[#FDFBF7] px-4 py-1.5 rounded-xl text-[11px] font-bold uppercase tracking-widest">
                  {h.typeZh}
                </div>
              </div>
            </div>

            <div className="p-9">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#4E342E] leading-tight serif">{h.nameZh}</h3>
                  <p className="text-[10px] text-[#A68A71] font-black uppercase tracking-tight mt-1.5 opacity-60">{h.name}</p>
                </div>
                <div className="w-12 h-12 bg-[#FDFBF7] rounded-2xl flex items-center justify-center text-[#D8C4B6] border border-[#F5EBE0]">
                  <Home size={22} />
                </div>
              </div>

              <button 
                onClick={() => window.open(h.googleMapsUrl || getGoogleMapsUrl(h.location), '_blank')}
                className="flex items-center gap-2 text-[#A68A71] text-xs mb-8 font-bold hover:text-[#4E342E] transition-colors bg-[#FDFBF7] px-4 py-2 rounded-full border border-slate-100 shadow-sm"
              >
                <MapPin size={14} />
                <span>查看 Google 地圖導航</span>
                <ExternalLink size={12} />
              </button>
              
              <div className="space-y-6 pt-7 border-t border-[#F5EBE0]">
                <div className="flex items-center gap-5">
                  <div className="bg-[#FDFBF7] p-3 rounded-2xl text-[#D8C4B6] border border-[#F5EBE0] shadow-sm">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-[13px] font-black text-[#4E342E]">{h.dates}</div>
                    <div className="text-[10px] text-[#A68A71] font-bold uppercase tracking-widest mt-0.5">Check-in Duration</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-[#FDFBF7]/60 p-5 rounded-[2rem] border border-[#F5EBE0]">
                  <Info size={16} className="text-[#D8C4B6] shrink-0 mt-0.5" />
                  <span className="text-[12px] text-[#4E342E] leading-relaxed font-medium italic">{h.note}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accommodation;
