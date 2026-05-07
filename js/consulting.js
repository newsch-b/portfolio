const articles = [
  // ── 氣候風險 × 產業衝擊 ──
  {
    keyword: '農業',
    title: '從庶民水果變奢侈品──台灣荔枝為何連年減產、售價翻倍？【圖解】',
    desc: '量化分析荔枝關鍵生長期的氣溫異常，追蹤極端氣候如何導致農業產量崩跌，進而引發市場價格劇變的連鎖效應。',
    category: 'climate',
    tagClass: 'tag-env',
    tagLabel: '氣候 × 產業',
    source: '公視新聞',
    skills: ['氣候數據分析', '農業產業', '數據視覺化'],
    image: 'https://news-data.pts.org.tw/media/239332/ogimage.jpg',
    url: 'https://news.pts.org.tw/article/758744'
  },
  {
    keyword: '零售業',
    title: '10月還在穿短袖？秋天越來越熱、服飾業面臨什麼難題？【圖解】',
    desc: '台北9月均溫達29.4°C，較1960年代高出逾2度；服飾商換季節奏與氣候實際脫節，庫存與銷售週期面臨結構性調整壓力。',
    category: 'climate',
    tagClass: 'tag-env',
    tagLabel: '氣候 × 產業',
    source: '公視新聞',
    skills: ['氣候數據', '產業分析', '圖解報導'],
    image: 'images/服飾氣候.png',
    imagePos: 'top',
    url: 'https://news.pts.org.tw/article/719318'
  },
  {
    keyword: '熱不平等',
    title: '你住在熱裡嗎？租屋族的熱弱勢',
    desc: '以 GIS 空間分析呈現台灣租屋族在城市熱島效應下的居住困境，揭示氣候衝擊疊加租屋市場結構不平等的社會面向。',
    category: 'climate',
    tagClass: 'tag-env',
    tagLabel: '氣候 × 產業',
    source: 'ArcGIS StoryMaps',
    skills: ['GIS 空間分析', '視覺化敘事', '社會研究'],
    image: 'images/粗屋熱弱勢.png',
    imagePos: 'center',
    url: 'https://storymaps.arcgis.com/stories/ab7da179582540289aaeee6cca636934'
  },
  {
    keyword: '農業',
    title: '請支援復原：極端氣候加劇災損，農業保險10年覆蓋率為何仍難提升？',
    desc: '農業保險推行十年，覆蓋率仍僅約五成；資料不足、農民對「先繳保費再理賠」制度存疑，與氣候風險持續加劇下的保障缺口形成明顯矛盾。',
    category: 'climate',
    tagClass: 'tag-env',
    tagLabel: '氣候 × 產業',
    source: '報導者',
    skills: ['深度調查', '多方訪談', '數據分析', '政策研究'],
    image: 'https://www.twreporter.org/images/20260323163705-1cfbd5f657f5e0ff6a4826f4f01d4a70-mobile.jpg',
    imagePos: 'center',
    url: 'https://www.twreporter.org/a/taiwan-agricultural-insurance-decade-of-struggles'
  },
  {
    keyword: '循環經濟',
    title: '全台手機回收率僅12％ 為何民眾寧可將舊機放在家？',
    desc: '逾半消費者選擇將舊機閒置，稀土金屬大量流失；解析消費者行為、回收通路設計與政策誘因的結構性缺口，以及政府衝刺2026年循環率目標的挑戰。',
    category: 'climate',
    tagClass: 'tag-env',
    tagLabel: '氣候 × 產業',
    source: '數據報導',
    skills: ['消費者行為研究', '環境政策分析', '數據視覺化'],
    image: 'images/手機.png',
    imagePos: 'top',
    url: 'https://newsch-b.github.io/phone-recycling/'
  },

  // ── 能源轉型與政策 ──
  {
    keyword: '淨零盤點',
    title: '巴黎協定十週年：NDC3.0 全球盤點',
    desc: '盤點全球 195 個締約方的第三輪國家自定貢獻，運用 LLM 處理多語言政策報告，以互動地圖比較各國減碳目標、氣候融資承諾與碳排趨勢。',
    category: 'energy',
    tagClass: 'tag-interview',
    tagLabel: '能源政策',
    source: '台大風政中心',
    skills: ['LLM 應用', '國際政策分析', '互動視覺化'],
    url: 'https://rsprc.ntu.edu.tw/web/research/research_in.jsp?lang=tw&rp_id=RP1759394940788'
  },
  {
    keyword: '能源轉型',
    title: '第31期：淨零台灣 何得何能？',
    desc: '彙整八場再生能源技術與政策對話，梳理台灣邁向淨零目標的技術可行性與政策缺口，提供能源轉型路徑的全景分析。',
    category: 'energy',
    tagClass: 'tag-interview',
    tagLabel: '能源政策',
    source: '台大CASE',
    skills: ['能源政策', '深度訪談', '議題整合'],
    url: 'https://case.ntu.edu.tw/blog/?cat=7020'
  },
  {
    keyword: '政策溝通',
    title: '「台灣目前沒有真正缺電！」電機教授：再生能源靠天吃飯，供電穩定要靠能源科技化',
    desc: '深訪電機工程教授，釐清台灣能源轉型中供電穩定性的技術核心挑戰，解構政策論述與工程現實之間的認知落差。',
    category: 'energy',
    tagClass: 'tag-interview',
    tagLabel: '能源政策',
    source: '今周刊ESG',
    skills: ['能源政策', '專家訪談', '議題分析'],
    url: 'https://esg.businesstoday.com.tw/article/category/180694/post/202405160010/'
  },
  {
    keyword: '海洋能源',
    title: '乘風破浪航向永續——專訪楊舜涵教授',
    desc: '訪談從造船設計轉型海洋再生能源研究的楊舜涵助理教授，探討台灣離岸風電與海洋能的技術發展潛力與商業化挑戰。',
    category: 'energy',
    tagClass: 'tag-interview',
    tagLabel: '能源政策',
    source: '台大CASE',
    skills: ['再生能源', '技術分析', '深度訪談'],
    url: 'https://case.ntu.edu.tw/乘風破浪航向永續-專訪楊舜涵教授/'
  },
  {
    keyword: '溫差發電',
    title: '思考穩定供電下的發電方式——專訪余宗謙經理',
    desc: '探討海洋溫差發電（OTEC）作為台灣穩定基載電力的可行性，分析技術成熟度、開發成本與政策支持之間的落差。',
    category: 'energy',
    tagClass: 'tag-interview',
    tagLabel: '能源政策',
    source: '台大CASE',
    skills: ['能源技術', '政策分析', '深度訪談'],
    url: 'https://case.ntu.edu.tw/blog/?p=44255'
  },

  // ── 環境永續 ──
  {
    keyword: '政策落差',
    title: '當流浪犬貓需要有個家——民間中途如何發揮力量、「浪」愛延續？',
    desc: '深入調查 2017 年零撲殺政策實施後的執行困境，梳理民間中途組織如何填補公立收容所量能缺口，呈現政策設計與現場執行的系統性落差。',
    category: 'field',
    tagClass: 'tag-policy',
    tagLabel: '環境永續',
    source: '報導者',
    skills: ['政策追蹤', '田野調查', '多方訪談'],
    url: 'https://www.twreporter.org/a/foster-family-for-stray-dogs-and-cats'
  },
  {
    keyword: '保育',
    title: '人熊新關係／救傷、收容量能皆不足 野放黑熊是最好選項？【圖解】',
    desc: '衛星追蹤顯示野放黑熊二度返回原現蹤衝突區；行為矯正成效有限、收容量能嚴重不足，野放政策的保育與安全邊界亟待重新界定。',
    category: 'field',
    tagClass: 'tag-policy',
    tagLabel: '環境永續',
    source: '公視新聞',
    skills: ['數據視覺化', '政策分析', '生態研究'],
    image: 'images/cover-webp.webp',
    imagePos: 'center',
    url: 'https://news.pts.org.tw/article/752484'
  },
  {
    keyword: '保育',
    title: '人熊新關係／衝突越演越烈 黑熊族群擴增衍生新保育難題【圖解】',
    desc: '2023年人熊衝突通報驟升至27件，事發地點已擴張至中央山脈保育廊道外緣；族群擴增與棲地壓縮形成政策兩難。',
    category: 'field',
    tagClass: 'tag-policy',
    tagLabel: '環境永續',
    source: '公視新聞',
    skills: ['數據視覺化', '生態分析', '政策研究'],
    image: 'images/黑熊首圖.webp',
    url: 'https://news.pts.org.tw/article/752483'
  },
  {
    keyword: '生態危機',
    title: '「珊瑚白化」更甚的2024年 陳昭倫潛遍全台海域找答案',
    desc: '記錄研究者以 182 次潛水調查系統性監測 2024 年台灣史上最嚴重珊瑚白化事件，以田野數據量化氣候變遷對海洋生態系的具體衝擊。',
    category: 'field',
    tagClass: 'tag-policy',
    tagLabel: '環境永續',
    source: '公視新聞',
    skills: ['田野調查', '生態監測', '氣候影響研究'],
    url: 'https://news.pts.org.tw/article/733822'
  },
  {
    keyword: '科學傳播',
    title: '我們正在逼近地球的極限嗎？——專訪臺大地質科學系羅立副教授',
    desc: '訪談利用深海沉積物重建數十萬年氣候演變軌跡的研究者，探討古氣候田野研究如何為當代氣候危機提供科學基準。',
    category: 'field',
    tagClass: 'tag-policy',
    tagLabel: '環境永續',
    source: '台大CASE',
    skills: ['科學傳播', '深度訪談', '氣候研究'],
    url: 'https://case.ntu.edu.tw/blog/?p=45983'
  },

  // ── 財經與國際分析 ──
  {
    keyword: '貿易風險',
    title: '台對美順差649億美元 哪些優勢產業在對等關稅中受災？【圖解】',
    desc: '自動資料處理機佔順差508億美元，五項主力商品對美出口占全球比達45–61%；風險高度集中於少數戰略產業，關稅衝擊不對稱分布。',
    category: 'finance',
    tagClass: 'tag-econ',
    tagLabel: '財經 / 國際',
    source: '公視新聞',
    skills: ['貿易分析', '產業研究', '數據視覺化'],
    image: 'images/關稅.png',
    imagePos: 'top',
    url: 'https://news.pts.org.tw/article/747277'
  },
  {
    keyword: '財政衝擊',
    title: '《財劃法》修正如何衝擊中央政府總預算？一次看懂預算編列',
    desc: '圖解財政收支劃分法修正後中央財源減少3753億，逐一拆解非法定義務支出的排擠效應與中央地方財政關係的結構性變化。',
    category: 'finance',
    tagClass: 'tag-econ',
    tagLabel: '財經 / 國際',
    source: '公視新聞',
    skills: ['財政分析', '政策解析', '圖解報導'],
    image: 'images/財畫法.webp',
    imagePos: 'top',
    url: 'https://news.pts.org.tw/article/732855'
  },
  {
    keyword: '鑄幣悖論',
    title: '壹元硬幣價值不只1.5元 鑄幣「越造越虧」會停止發行嗎？【圖解】',
    desc: '以製造成本與面額的結構性倒掛為切入點，分析台灣鑄幣政策背後的經濟邏輯，評估流通貨幣政策可能的調整方向。',
    category: 'finance',
    tagClass: 'tag-econ',
    tagLabel: '財經 / 國際',
    source: '公視新聞',
    skills: ['財經分析', '政策研究', '圖解報導'],
    image: 'images/硬幣.png',
    imagePos: 'top',
    url: 'https://news.pts.org.tw/article/742474'
  },
  {
    keyword: '人道援助',
    title: '緬甸強震／國際救援陷困境 長期內戰造成哪些阻礙？',
    desc: '分析緬甸長期內戰如何系統性阻礙 8.2 級強震後的國際人道救援行動，呈現衝突地區災難應變能力的結構困境。',
    category: 'finance',
    tagClass: 'tag-intl',
    tagLabel: '財經 / 國際',
    source: '公視新聞',
    skills: ['國際分析', '人道議題', '衝突研究'],
    image: 'images/緬甸地震.jpg',
    imagePos: 'top',
    url: 'https://news.pts.org.tw/article/745116'
  },
  {
    keyword: '政治風險',
    title: '川普2度當選美國總統 已拿下6個搖擺州',
    desc: '即時分析 2024 年美國總統大選結果，解讀六個搖擺州翻轉的政治意涵與其對全球貿易、氣候政策走向的潛在影響。',
    category: 'finance',
    tagClass: 'tag-intl',
    tagLabel: '財經 / 國際',
    source: '公視新聞',
    skills: ['國際政治', '選舉分析', '即時報導'],
    image: 'images/川普.webp',
    imagePos: 'center',
    url: 'https://news.pts.org.tw/article/723322'
  }
];

const categories = {
  climate: {
    label: '氣候風險 × 產業衝擊',
    desc: '整合氣象署與 TCCIP 長期氣候數據、GIS 衛星影像與產業供應鏈訪談，追蹤氣候變遷如何重塑農業、服飾、房市等產業的生產週期與市場結構，量化氣候風險對企業與社會的具體衝擊。',
    methods: ['氣候數據分析', 'GIS 空間分析', '產業訪談', '數據視覺化', '供應鏈研究']
  },
  energy: {
    label: '能源轉型與政策',
    desc: '以深度專家訪談、195 個巴黎協定締約方 NDC 國際比較，以及 LLM 多語言政策報告處理為主要方法，梳理台灣再生能源技術的可行性邊界、政策工具缺口與國際淨零路徑的現實落差。',
    methods: ['深度訪談', 'LLM 應用', '國際政策比較', '能源技術分析', '政策文件研究']
  },
  field: {
    label: '環境永續',
    desc: '結合田野調查、衛星追蹤數據判讀，以及政府機關、學術單位、民間組織的多方利害關係人訪談，深入探討物種保育、生態系統變遷與環境政策執行現況，呈現生態保護與政策設計之間的結構性落差。',
    methods: ['田野調查', '衛星數據判讀', '生態數據分析', '多方訪談', '政策追蹤']
  },
  finance: {
    label: '財經與國際分析',
    desc: '整合主計總處、財政部、ACLED 國際衝突資料庫等多元統計來源，以圖解視覺化解析財政政策結構、貿易順差風險集中度，以及國際政治格局對台灣產業的連動影響。',
    methods: ['統計數據整合', '圖解視覺化', '財政政策研究', '貿易結構分析', '國際政治研究']
  }
};

const arrowSVG = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>`;

function renderAll() {
  const main = document.getElementById('main-content');
  main.innerHTML = '';

  ['climate', 'energy', 'field', 'finance'].forEach(cat => {
    const c = categories[cat];
    const catArticles = articles.filter(a => a.category === cat);

    const section = document.createElement('section');
    section.id = cat;
    section.className = 'cat-section';

    const header = document.createElement('div');
    header.className = 'cat-section-header';
    header.innerHTML = `
      <h2 class="cat-section-title">${c.label}</h2>
      <p class="cat-desc-text">${c.desc}</p>
      <div class="cat-desc-methods">
        ${c.methods.map(m => `<span class="cat-method-tag">${m}</span>`).join('')}
      </div>
    `;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'grid';
    catArticles.forEach(a => {
      const imageHtml = a.image
        ? `<div class="card-img"><img src="${a.image}" alt="${a.title}" loading="lazy" style="object-position:${a.imagePos || 'center'}" /></div>`
        : '';
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div class="card-kw-band">${a.keyword}</div>
        ${imageHtml}
        <div class="card-body">
          <h2>${a.title}</h2>
          <p class="card-description">${a.desc}</p>
        </div>
        <div class="card-footer">
          <div class="card-meta">
            <span class="source-badge">${a.source}</span>
            <div class="card-tags">
              ${a.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
          </div>
          <div class="card-read">閱讀全文 ${arrowSVG}</div>
        </div>
      `;
      el.addEventListener('click', () => window.open(a.url, '_blank', 'noopener,noreferrer'));
      el.style.cursor = 'pointer';
      grid.appendChild(el);
    });
    section.appendChild(grid);
    main.appendChild(section);
  });
}

function initNavObserver() {
  const navLinks = document.querySelectorAll('.section-nav a');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.remove('active'));
          const link = document.querySelector(`.section-nav a[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    },
    { rootMargin: '-52px 0px -55% 0px' }
  );
  document.querySelectorAll('.cat-section').forEach(s => observer.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initNavObserver();
});
