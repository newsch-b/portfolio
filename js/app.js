const articles = [
  // 環境永續
  {
    title: '氣候變遷來臨、農損百億難止──揭開農業保險上路10年的運作困境',
    category: '環境永續',
    tag: 'tag-env',
    url: 'https://newsch-b.github.io/agricultural-insurance/'
  },
  {
    title: '你住在熱裡嗎？租屋族的熱弱勢',
    category: '環境永續',
    tag: 'tag-env',
    url: 'https://storymaps.arcgis.com/stories/ab7da179582540289aaeee6cca636934'
  },
  {
    title: '當流浪犬貓需要有個家，民間中途如何發揮力量、「浪」愛延續？',
    category: '環境永續',
    tag: 'tag-env',
    url: 'https://www.twreporter.org/a/foster-family-for-stray-dogs-and-cats'
  },
  {
    title: '人熊新關係／救傷、收容量能皆不足 野放黑熊是最好選項？【圖解】',
    category: '環境永續',
    tag: 'tag-env',
    url: 'https://news.pts.org.tw/article/752484'
  },
  {
    title: '人熊新關係／衝突越演越烈 黑熊族群擴增衍生新保育難題【圖解】',
    category: '環境永續',
    tag: 'tag-env',
    url: 'https://news.pts.org.tw/article/752483'
  },

  // 人物專訪
  {
    title: '我們正在逼近地球的極限嗎？乘著時光機的航海家——專訪臺灣大學地質科學系羅立副教授',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://case.ntu.edu.tw/blog/?p=45983'
  },
  {
    title: '乘風破浪航向永續——專訪楊舜涵教授',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://case.ntu.edu.tw/乘風破浪航向永續-專訪楊舜涵教授/'
  },
  {
    title: '思考穩定供電下的發電方式——專訪余宗謙經理',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://case.ntu.edu.tw/blog/?p=44255'
  },
  {
    title: '第31期：淨零台灣 何得何能？',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://case.ntu.edu.tw/blog/?cat=7020'
  },
  {
    title: '「珊瑚白化」更甚的2024年 陳昭倫潛遍全台海域找答案',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://news.pts.org.tw/article/733822'
  },
  {
    title: '「台灣目前沒有真正缺電！」電機教授：再生能源靠天吃飯，供電穩定要靠能源科技化',
    category: '人物專訪',
    tag: 'tag-interview',
    url: 'https://esg.businesstoday.com.tw/article/category/180694/post/202405160010/'
  },

  // 永續政策解析
  {
    title: '巴黎協定十週年：NDC3.0全球盤點',
    category: '永續政策解析',
    tag: 'tag-policy',
    url: 'https://rsprc.ntu.edu.tw/web/research/research_in.jsp?lang=tw&rp_id=RP1759394940788'
  },

  // 產經
  {
    title: '10月還在穿短袖？秋天越來越熱、服飾業面臨什麼難題？【圖解】',
    category: '產經',
    tag: 'tag-econ',
    url: 'https://news.pts.org.tw/article/719318'
  },
  {
    title: '台對美順差649億美元 哪些優勢產業在對等關稅中受災？【圖解】',
    category: '產經',
    tag: 'tag-econ',
    url: 'https://news.pts.org.tw/article/747277'
  },
  {
    title: '從庶民水果變奢侈品 台灣荔枝為何連年減產、售價翻倍？【圖解】',
    category: '產經',
    tag: 'tag-econ',
    url: 'https://news.pts.org.tw/article/758744'
  },
  {
    title: '壹元硬幣價值不只1.5元 鑄幣「越造越虧」會停止發行嗎？【圖解】',
    category: '產經',
    tag: 'tag-econ',
    url: 'https://news.pts.org.tw/article/742474'
  },
  {
    title: '《財劃法》修正如何衝擊中央政府總預算？ 一次看懂預算編列',
    category: '產經',
    tag: 'tag-econ',
    url: 'https://news.pts.org.tw/article/732855'
  },

  // 國際
  {
    title: '緬甸強震／國際救援陷困境 長期內戰造成哪些阻礙？',
    category: '國際',
    tag: 'tag-intl',
    url: 'https://news.pts.org.tw/article/745116'
  },
  {
    title: '川普2度當選美國總統 已拿下6個搖擺州',
    category: '國際',
    tag: 'tag-intl',
    url: 'https://news.pts.org.tw/article/723322'
  }
];

const arrowIcon = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 8h10M9 4l4 4-4 4"/>
</svg>`;

let activeCategory = '全部';

function renderGrid(category) {
  const filtered = category === '全部'
    ? articles
    : articles.filter(a => a.category === category);

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  // Force animation restart
  grid.classList.remove('grid');
  void grid.offsetWidth;
  grid.classList.add('grid');

  filtered.forEach(article => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = article.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <div class="card-top">
        <span class="card-tag ${article.tag}">${article.category}</span>
        <h2>${article.title}</h2>
      </div>
      <div class="card-link">閱讀全文 ${arrowIcon}</div>
    `;
    grid.appendChild(a);
  });
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderGrid(activeCategory);
      updateCount(activeCategory);
    });
  });
}

function updateCount(category) {
  const count = category === '全部'
    ? articles.length
    : articles.filter(a => a.category === category).length;
  document.getElementById('count').textContent = `${count} 篇`;
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderGrid('全部');
  updateCount('全部');
});
