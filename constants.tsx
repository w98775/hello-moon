
import { TravelDay, Activity, ChecklistItem } from './types';

export const USD_TO_TWD = 32.5;
export const MYR_TO_TWD = 7.5; // 估計匯率，令吉對台幣

export const MALDIVES_ACTIVITIES: Activity[] = [
  { id: '1', nameEn: 'Whale Shark Safari', nameZh: '鯨鯊追蹤遊 (必去)', priceUsd: 220, description: '美居度假村鄰近南阿里環礁，是尋找海洋巨人的絕佳起點。', category: 'Excursion' },
  { id: '2', nameEn: 'Manta Ray Snorkeling', nameZh: '魟魚浮潛體驗', priceUsd: 115, description: '與優雅的曼塔魟魚共游，觀察牠們迷人的滑行姿態。', category: 'Excursion' },
  { id: '3', nameEn: 'Sunset Fishing', nameZh: '傳統黃昏海釣', priceUsd: 95, description: '馬爾地夫手釣體驗，釣到的魚可請度假村廚房代為烹調。', category: 'Excursion' },
  { id: '4', nameEn: 'Parasailing', nameZh: '高空拖曳傘', priceUsd: 160, description: '從空中俯視如珍珠般的環礁景觀，風景絕佳。', category: 'Water Sports' },
  { id: '5', nameEn: 'Discover Scuba Diving', nameZh: '體驗深潛 (免證照)', priceUsd: 195, description: '在美居度假村的專業潛水中心帶領下，探索夢幻海底世界。', category: 'Diving' },
  { id: '6', nameEn: 'Sandbank Picnic', nameZh: '無人沙洲私人午餐', priceUsd: 285, description: '在純淨的白沙洲上享用奢華午宴，極致浪漫體驗。', category: 'Dining' },
  { id: '7', nameEn: 'Balinese Massage', nameZh: '峇里島式舒壓按摩', priceUsd: 150, description: '渡假村水上 SPA 中心，聽著浪聲享受頂級按摩。', category: 'Wellness' },
];

export const PREPARATION_CHECKLIST: ChecklistItem[] = [
  { id: 'p1', category: 'Document', title: '護照正本 (有效期限 6 個月以上)', description: '出國靈魂，建議拍照存於手機或準備兩份影本分開放。' },
  { id: 'p2', category: 'Document', title: '馬爾地夫 IMUGA 申報', description: '入境前 96 小時內線上填寫，完成後截圖 QR Code，出境也要。' },
  { id: 'p3', category: 'Document', title: '馬來西亞 MDAC 電子卡', description: '抵達前 3 天內線上申報，確保快速通關。' },
  { id: 'p4', category: 'Document', title: '機票與飯店憑證', description: 'MH 航班票根、吉隆坡飯店、美居度假村、h78 訂房證明。' },
  { id: 'p5', category: 'Document', title: '海外旅平險/不便險憑證', description: '確保醫療與延誤有保障，建議列印紙本備用。' },
  { id: 'p6', category: 'Gear', title: '浮潛裝備 (面鏡、呼吸管)', description: '個人衛生考量建議自備矽膠面鏡。蛙鞋度假村可租。' },
  { id: 'p7', category: 'Gear', title: '水母衣與潛水襪', description: '馬爾地夫太陽毒辣且珊瑚多，長袖水母衣可防曬防割傷。' },
  { id: 'p8', category: 'Gear', title: '防水袋 (10L-20L)', description: '跳島活動必備，保護手機、相機、毛巾不淋濕。' },
  { id: 'p9', category: 'Gear', title: '轉接頭與充電設備', description: '英式三孔轉接頭、大容量行動電源、多孔充電線。' },
  { id: 'p10', category: 'Gear', title: '防水相機 / GoPro', description: '記錄透明海水的最佳利器，記得帶備用電池。' },
  { id: 'p11', category: 'Health', title: '常備藥品 (暈船藥、腸胃藥)', description: '快艇轉運風浪大，暈船藥必帶。另備止痛、退燒與防蚊液。' },
  { id: 'p12', category: 'Health', title: '海洋友善防曬油', description: '保護脆弱珊瑚礁，並備好曬後蘆薈膠。' },
  { id: 'p13', category: 'Money', title: '美金現金 (小費與自費用)', description: '準備 50-100 張 1 元美金新鈔，用於行李、床頭小費。' },
  { id: 'p14', category: 'Money', title: '信用卡與 Grab App', description: '確保信用卡海外刷卡已開啟，Grab 在吉隆坡叫車極方便。' },
];

export const TRAVEL_ITINERARY: TravelDay[] = [
  {
    date: '1/23',
    title: '啟程：吉隆坡孟沙區',
    location: 'Kuala Lumpur Bangsar',
    summary: '高鐵左營 -> 桃園機場 -> MH367 -> 入住 Holiday Inn Bangsar。',
    activities: [
      { time: '10:25', title: '高鐵 0818 次', locationName: '高鐵左營站' },
      { time: '12:18', title: '抵達桃園站', locationName: '高鐵桃園站' },
      { time: '15:10', title: '航班 MH367 起飛', locationName: 'Taoyuan Airport T1' },
      { time: '20:05', title: '抵達吉隆坡', locationName: 'KLIA T1' },
      { time: '21:30', title: '入住飯店', locationName: 'Holiday Inn Kuala Lumpur Bangsar' },
    ]
  },
  {
    date: '1/24',
    title: '大馬文化與購物',
    location: 'Kuala Lumpur City',
    summary: '黑風洞參拜、武吉免登商圈血拼、孟沙區文青下午茶。',
    activities: [
      { time: '09:00', title: '黑風洞彩虹階梯', locationName: 'Batu Caves' },
      { time: '12:30', title: '推薦：肉骨茶午餐', locationName: 'Bukit Bintang', isRecommendation: true, rating: 4.4 },
      { time: '16:00', title: '雙子星塔攝影', locationName: 'Petronas Twin Towers' },
      { time: '19:00', title: 'Bangsar 區美食', locationName: 'Bangsar Village', isRecommendation: true, rating: 4.5 },
    ]
  },
  {
    date: '1/25',
    title: '跳島：飛往美居度假村',
    location: 'Mercure Maldives Kooddoo',
    summary: '搭乘 MH485 前往馬累，轉機內陸飛機直奔美居水上屋。',
    isMaldivesResort: true,
    activities: [
      { time: '09:40', title: '航班 MH485', locationName: 'KLIA T1' },
      { time: '11:00', title: '抵達馬累', locationName: 'Velana Airport' },
      { time: '14:30', title: '內陸飛機轉運', locationName: 'Kooddoo Airport' },
      { time: '16:00', title: '入住美居度假村', locationName: 'Mercure Maldives Kooddoo' },
    ]
  },
  {
    date: '1/26',
    title: '美居度假村慵懶時光',
    location: 'Mercure Maldives',
    summary: '全包式度假村，玻璃海浮潛、透明獨木舟、無限暢飲。',
    isMaldivesResort: true,
    activities: [
      { time: '09:00', title: '別墅外浮潛', locationName: 'Mercure Reef' },
      { time: '13:00', title: 'Alita 主題午宴', locationName: 'Alita Restaurant' },
      { time: '16:00', title: '水上中心活動', locationName: 'Watersports Center' },
      { time: '19:00', title: '夕陽酒吧駐唱', locationName: 'Pool Bar' },
    ]
  },
  {
    date: '1/27',
    title: '鯨鯊與海洋奇遇',
    location: 'Gaafu Alifu Atoll',
    summary: '出海追蹤鯨鯊、拜訪無人沙洲、享用海島午餐。',
    isMaldivesResort: true,
    activities: [
      { time: '08:30', title: '推薦：鯨鯊探險之旅', locationName: 'Ocean Excursion', isRecommendation: true, rating: 4.9 },
      { time: '13:00', title: '沙洲野餐', locationName: 'Sandbank' },
      { time: '17:30', title: '夕陽海釣', locationName: 'Traditional Dhoni' },
    ]
  },
  {
    date: '1/28',
    title: '最後的玻璃海記憶',
    location: 'Mercure Maldives',
    summary: '高空拖曳傘俯瞰環礁、舒壓 SPA、沙灘燭光晚餐。',
    isMaldivesResort: true,
    activities: [
      { time: '10:00', title: '高空拖曳傘', locationName: 'Lagoon' },
      { time: '15:00', title: 'Suvadiva SPA', locationName: 'Wellness Center' },
      { time: '19:30', title: '沙灘私人晚宴', locationName: 'Private Beach' },
    ]
  },
  {
    date: '1/29',
    title: '回歸居民島 h78',
    location: 'Hulhumale',
    summary: '離開度假村，前往鄰近機場的居民島 h78 飯店休憩。',
    activities: [
      { time: '11:00', title: '離開度假村', locationName: 'Kooddoo Airport' },
      { time: '15:00', title: '入住胡魯馬累', locationName: 'h78 Maldives' },
      { time: '17:00', title: '沙灘漫步夕陽', locationName: 'Hulhumale Beach' },
    ]
  },
  {
    date: '1/30',
    title: '大馬民宿 Umi',
    location: 'Kuala Langat',
    summary: '馬累飛吉隆坡，入住 Umi SplashMania 民宿，休整歸途。',
    activities: [
      { time: '12:00', title: '航班 MH484', locationName: 'Velana Airport' },
      { time: '19:45', title: '抵達吉隆坡', locationName: 'KLIA T1' },
      { time: '21:30', title: '入住 Umi 民宿', locationName: 'Umi SplashMania Homestay' },
    ]
  },
  {
    date: '1/31',
    title: '賦歸：溫暖家園',
    location: 'Kaohsiung',
    summary: 'MH366 回台，桃園高鐵 0841 次返回左營。',
    activities: [
      { time: '09:20', title: '航班 MH366', locationName: 'KLIA T1' },
      { time: '14:10', title: '抵達桃園機場', locationName: 'TPE Airport' },
      { time: '16:34', title: '高鐵 0841 次', locationName: '高鐵桃園站' },
      { time: '18:25', title: '回到左營家', locationName: '高鐵左營站' },
    ]
  }
];
