
import React from 'react';
import { Sparkles, MapPin, Star, Utensils, Camera, ShoppingBag, ExternalLink } from 'lucide-react';

const Recommendations: React.FC = () => {
  const categories = [
    { name: '在地美饌', nameEn: 'Gourmet', icon: Utensils, items: [
      { name: 'Nasi Lemak Wanjo', nameZh: '萬州椰漿飯 (甘榜峇魯)', rating: 4.6, location: 'Kampung Baru, KL', desc: '傳承超過半世紀的道地馬來早餐，辣椒醬 (Sambal) 口味一絕，是體驗大馬庶民美食的首選。', tags: ['在地排隊', '銅板美食'] },
      { name: 'Sun Fong Bak Kut Teh', nameZh: '新峰肉骨茶', rating: 4.4, location: 'Bukit Bintang, KL', desc: '吉隆坡老字號肉骨茶，湯頭藥膳味濃厚且肉質軟嫩，位於武吉免登精華區。', tags: ['觀光必吃', '老字號'] },
      { name: 'Ithaa Undersea', nameZh: 'Ithaa 水下餐廳', rating: 4.9, location: 'Rangali Island, Maldives', desc: '全球首家全玻璃水下餐廳，位於海平面以下5米，可在魚群環繞中享用精緻法式料理。', tags: ['極致奢華', '一生必去'] }
    ]},
    { name: '必遊景點', nameEn: 'Must-See', icon: Camera, items: [
      { name: 'Batu Caves', nameZh: '黑風洞 (彩虹階梯)', rating: 4.6, location: 'Gombak, KL', desc: '印度教神廟聖地，擁有壯觀的黃金大佛與272級彩虹色彩階梯，是完美的攝影座標。', tags: ['文化地標', '網美打卡'] },
      { name: 'Dhigurah Island', nameZh: '迪格拉島 (鯨鯊故鄉)', rating: 4.8, location: 'South Ari Atoll', desc: '全馬爾地夫最長的細白沙灘，不僅是鯨鯊的棲息地，更有絕美的無人沙洲景色。', tags: ['潛水天堂', '自然美景'] }
    ]},
    { name: '質感伴手', nameEn: 'Shopping', icon: ShoppingBag, items: [
      { name: "Beryl's Chocolate", nameZh: "Beryl's 頂級巧克力", rating: 4.5, location: 'Pavilion / Airport, KL', desc: '馬來西亞國寶級巧克力品牌，推薦榴槤巧克力與海鹽焦糖口味，包裝精美適合送禮。', tags: ['必買特產', '大馬之光'] },
      { name: 'Handwoven Maldivian Crafts', nameZh: '馬爾地夫手織工藝品', rating: 4.3, location: 'Malé Local Market', desc: '當地職人手工編織的草蓆與漆器，帶有深厚的島國海洋氣息。', tags: ['文化收藏'] }
    ]}
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-[#F5EBE0] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Sparkles size={100} className="text-[#D8C4B6]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-xl font-bold text-[#4E342E] flex items-center gap-2 serif">
            <Sparkles className="text-[#D8C4B6]" size={18} /> AI 智能指南
          </h2>
          <p className="text-[#A68A71] text-[11px] font-bold mt-1 uppercase tracking-wider leading-relaxed">
            為您的行程精選最道地的馬來西亞與馬爾地夫體驗
          </p>
        </div>
      </div>

      <div className="space-y-10">
        {categories.map((cat, idx) => (
          <section key={idx}>
            <div className="flex items-center justify-between mb-5 px-1">
              <div className="flex items-center gap-2">
                <div className="bg-[#4E342E] text-white p-1.5 rounded-lg shadow-md">
                  <cat.icon size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#4E342E] leading-none">{cat.name}</h3>
                  <span className="text-[9px] font-black text-[#A68A71] uppercase tracking-[0.2em]">{cat.nameEn}</span>
                </div>
              </div>
              <div className="h-[1px] flex-1 bg-[#F5EBE0] ml-4"></div>
            </div>
            
            <div className="grid gap-5">
              {cat.items.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white p-5 rounded-[2rem] shadow-sm border border-[#F5EBE0] active:scale-[0.98] transition-transform group cursor-pointer" 
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`, '_blank')}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-[#4E342E] text-[15px] group-hover:text-[#D8C4B6] transition-colors leading-tight">{item.nameZh}</h4>
                      <p className="text-[10px] text-[#A68A71] font-bold mt-1 tracking-tight truncate">{item.name}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-lg border border-amber-100/50">
                      <Star size={10} fill="currentColor" /> {item.rating}
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-[#A68A71] leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-50">
                    <div className="flex gap-1.5">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-bold text-[#A68A71] bg-[#FDFBF7] px-2 py-0.5 rounded-md border border-slate-100">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black text-[#D8C4B6] uppercase">
                       View Map <ExternalLink size={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
