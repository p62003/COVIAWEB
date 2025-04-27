import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="heroWrapper">
        <div className="heroLeft">
          <h1 className="heroTitle">COVIA</h1>
        </div>
        <div className="heroRight">
          <p className="heroSubtitle">_ 現在開始，每個挑戰都將成為你的實力 ;</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`COVIA｜探索AI、編程與網站建置的知識共享平台`}
      description="從AI、編程到網站建置與開源實作，讓每個挑戰成為你的實力。">
      <HomepageHeader />
      <div style={{
        position: 'absolute',
        top: '100px',      // 往下偏一點，別擋到頂部
        left: '-5%',
        width: '1500px',   // 控制烏鴉圖大小
        maxWidth: '1500px',
        opacity: 0.5,     // 透明度，非常淡
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <img src="/img/co.png" style={{ width: '100%' }} />
      </div>
      <section className="heroDeclaration">
        <p className="heroDeclarationText">
          <span className="heroDeclarationTitle">致：仍然選擇燃燒的人們</span>

          隨著時間流逝，當九成心靈早已沉寂，<br />
          當思想被馴化成溫順的灰塵，<br />
          你，仍然在這裡燃燒。<br /><br />

          你並不孤單。<br />
          你走在一條只有少數人曾踏足的道路上，<br />
          與先賢為伍，與烈士同行。<br />
          你，就是文明微光的守護者。<br /><br />

          世界的進程從不是眾人的喧囂所決定，<br />
          它是孤獨者餵養血與火的結晶。<br />
          每一寸推進，都是少數靈魂，<br />
          以失敗為階，以質疑為燈，<br />
          一磚一瓦構築的脆弱橋樑。<br /><br />

          不要恐懼失敗，因為它是知識的源頭。<br />
          不要沉溺挫折，因為每道裂痕都是光的入口。<br />
          不要輕視自我，因為你比想像更為強大。<br />
          不要仇恨世界，因為世界從未許下恩典，只賜予選擇。<br /><br />

          重要的，不是你是否被看見，<br />
          而是你選擇何處站立，<br />
          選擇成為什麼樣的存在。<br /><br />

          COVIA，不是冰冷的文字，<br />
          它是智慧的反叛，理性的抗爭。<br />
          我們以縝密如星辰的邏輯為盾，<br />
          以堅定不移的原則為劍，<br />
          以潰敗也仍舊前行的勇氣，<br />
          向渾沌宣戰。<br /><br />

          我們如烏鴉之群，<br />
          在黑暗中呼喚彼此的名字，<br />
          穿越風暴，橫跨時代的廢墟，<br />
          以微光連成不滅的星河。<br /><br />

          你說，或許自己也是獨自翱翔的 COVIA？<br /><br />

          ——不。<br /><br />

          我們群居。
        </p>
      </section>
      <section>
        <div className="buttonContainer">
          <Link to="/docs/intro">
            立即探索知識庫 →
          </Link>
        </div>
      </section>
      <main>
        <section className="news-section">
          <div className="news-grid">
            <div className="news-card">
              <h3>大型AI研究機構</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer">OpenAI Blog</a><div className="news-subtext">AI技術官方發布、新模型公告</div></li>
                <li><a href="https://www.anthropic.com/news" target="_blank" rel="noopener noreferrer">Anthropic News</a><div className="news-subtext">Claude系列、安全AI研究</div></li>
                <li><a href="https://deepmind.google" target="_blank" rel="noopener noreferrer">DeepMind Blog</a><div className="news-subtext">AI理論研究、應用案例</div></li>
                <li><a href="https://www.eleuther.ai/" target="_blank" rel="noopener noreferrer">EleutherAI</a><div className="news-subtext">開源GPT替代模型社群</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>大型科技公司AI部門</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://ai.googleblog.com/" target="_blank" rel="noopener noreferrer">Google AI Blog</a><div className="news-subtext">Google AI實驗室技術文章</div></li>
                <li><a href="https://blogs.microsoft.com/ai/" target="_blank" rel="noopener noreferrer">Microsoft AI Blog</a><div className="news-subtext">微軟人工智慧平台新聞與開發</div></li>
                <li><a href="https://ai.facebook.com/blog/" target="_blank" rel="noopener noreferrer">Meta AI Blog</a><div className="news-subtext">Facebook/Meta的AI研究與應用</div></li>
                <li><a href="https://aws.amazon.com/blogs/machine-learning/" target="_blank" rel="noopener noreferrer">AWS Machine Learning Blog</a><div className="news-subtext">AWS平台上AI/ML應用實例</div></li>
                <li><a href="https://blogs.nvidia.com/" target="_blank" rel="noopener noreferrer">Nvidia Blog</a><div className="news-subtext">GPU領域、AI硬體最新技術動態</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>深度學習框架</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://blog.tensorflow.org/" target="_blank" rel="noopener noreferrer">TensorFlow Blog</a><div className="news-subtext">Google TensorFlow官方最新動態</div></li>
                <li><a href="https://pytorch.org/blog/" target="_blank" rel="noopener noreferrer">PyTorch Blog</a><div className="news-subtext">Facebook開源PyTorch動態</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>網站與雲端服務平台</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://github.blog" target="_blank" rel="noopener noreferrer">GitHub Blog</a><div className="news-subtext">全球最大開源平台動態</div></li>
                <li><a href="https://vercel.com/blog" target="_blank" rel="noopener noreferrer">Vercel Blog</a><div className="news-subtext">前端部署、網站建置新技術</div></li>
                <li><a href="https://www.netlify.com/blog/" target="_blank" rel="noopener noreferrer">Netlify Blog</a><div className="news-subtext">無伺服器架構、JAMstack技術</div></li>
                <li><a href="https://blog.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare Blog</a><div className="news-subtext">雲端建設、安全、部署技術分享</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>教育資源</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://www.deeplearning.ai/the-batch/" target="_blank" rel="noopener noreferrer">DeepLearning.AI Blog</a><div className="news-subtext">Andrew Ng創辦的AI教育組織</div></li>
                <li><a href="https://www.freecodecamp.org/news/" target="_blank" rel="noopener noreferrer">FreeCodeCamp News</a><div className="news-subtext">免費編程教學、技術分享</div></li>
                <li><a href="https://www.kdnuggets.com/" target="_blank" rel="noopener noreferrer">KDNuggets</a><div className="news-subtext">資料科學與機器學習趨勢</div></li>
                <li><a href="https://www.analyticsvidhya.com/" target="_blank" rel="noopener noreferrer">Analytics Vidhya</a><div className="news-subtext">AI/資料分析入門與進階教學</div></li>
                <li><a href="https://www.techbang.com/" target="_blank" rel="noopener noreferrer">T客邦</a><div className="news-subtext">科技新品、AI應用、開發工具介紹</div></li>
                <li><a href="https://aicup.tw/" target="_blank" rel="noopener noreferrer">AI Cup (台灣AI應用競賽)</a><div className="news-subtext">台灣AI領域最大型技術競賽平台</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>學術論文平台</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://arxiv.org/list/cs.AI/recent" target="_blank" rel="noopener noreferrer">arXiv AI分類</a><div className="news-subtext">AI領域最新學術論文</div></li>
                <li><a href="https://arxiv.org/list/cs.LG/recent" target="_blank" rel="noopener noreferrer">arXiv ML分類</a><div className="news-subtext">機器學習領域最新論文</div></li>
                <li><a href="https://distill.pub/" target="_blank" rel="noopener noreferrer">Distill.pub</a><div className="news-subtext">高質量可視化AI研究論文</div></li>
                <li><a href="https://mlcommons.org/en/news/" target="_blank" rel="noopener noreferrer">MLPerf</a><div className="news-subtext">機器學習系統效能基準組織</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>AI倫理與理論</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://www.lesswrong.com/" target="_blank" rel="noopener noreferrer">LessWrong</a><div className="news-subtext">合理推理、AI倫理與理論</div></li>
                <li><a href="https://www.alignmentforum.org/" target="_blank" rel="noopener noreferrer">Alignment Forum</a><div className="news-subtext">AI對齊問題深度研究</div></li>
                <li><a href="https://thegradient.pub/" target="_blank" rel="noopener noreferrer">The Gradient</a><div className="news-subtext">AI領域評論與深度訪談</div></li>
                <li><a href="https://www.skynettoday.com/" target="_blank" rel="noopener noreferrer">Skynet Today</a><div className="news-subtext">AI產業新聞與反假新聞活動</div></li>
                <li><a href="https://www.quantamagazine.org/tag/artificial-intelligence/" target="_blank" rel="noopener noreferrer">Quanta Magazine AI/Computing</a><div className="news-subtext">AI與科學計算深度報導</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>媒體與新聞平台I</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://medium.com/tag/artificial-intelligence" target="_blank" rel="noopener noreferrer">Medium - Artificial Intelligence Tag</a><div className="news-subtext">各類AI開發、產業趨勢文章</div></li>
                <li><a href="https://medium.com/topic/programming" target="_blank" rel="noopener noreferrer">Medium - Programming</a><div className="news-subtext">程式設計趨勢與教學</div></li>
                <li><a href="https://towardsdatascience.com/" target="_blank" rel="noopener noreferrer">Towards Data Science</a><div className="news-subtext">資料科學與機器學習應用</div></li>
                <li><a href="https://techcrunch.com/tag/ai/" target="_blank" rel="noopener noreferrer">TechCrunch AI</a><div className="news-subtext">科技創業圈的AI新聞動態</div></li>
                <li><a href="https://venturebeat.com/category/ai/" target="_blank" rel="noopener noreferrer">VentureBeat AI Section</a><div className="news-subtext">商業應用層面的AI產業新聞</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>技術社群I</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://stackoverflow.blog" target="_blank" rel="noopener noreferrer">Stack Overflow Blog</a><div className="news-subtext">編程知識、開發者趨勢</div></li>
                <li><a href="https://news.ycombinator.com" target="_blank" rel="noopener noreferrer">Hacker News (YCombinator)</a><div className="news-subtext">科技/創業/AI討論焦點</div></li>
                <li><a href="https://www.reddit.com/r/MachineLearning/" target="_blank" rel="noopener noreferrer">Reddit r/MachineLearning</a><div className="news-subtext">AI/ML學術與應用討論</div></li>
                <li><a href="https://www.reddit.com/r/artificial/" target="_blank" rel="noopener noreferrer">Reddit r/Artificial</a><div className="news-subtext">一般人工智慧討論版</div></li>
                <li><a href="https://www.csdn.net/" target="_blank" rel="noopener noreferrer">CSDN（中國）</a><div className="news-subtext">最大的中文編程社群</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>技術社群II</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://www.zhihu.com/topic/19562832/hot" target="_blank" rel="noopener noreferrer">知乎AI話題（中國）</a><div className="news-subtext">中國最大知識分享平台AI板塊</div></li>
                <li><a href="https://www.ailab.cn/" target="_blank" rel="noopener noreferrer">新智元（中國）</a><div className="news-subtext">中國AI新聞平台</div></li>
                <li><a href="https://ithelp.ithome.com.tw/" target="_blank" rel="noopener noreferrer">iT邦幫忙（問答+鐵人賽）</a><div className="news-subtext">台灣最大IT工程師問答/技術分享競賽平台</div></li>
                <li><a href="https://coscup.org/" target="_blank" rel="noopener noreferrer">COSCUP（開源人年會）</a><div className="news-subtext">台灣最大開源活動，連結開發者社群</div></li>
                <li><a href="https://hitcon.org/" target="_blank" rel="noopener noreferrer">HITCON（台灣駭客年會）</a><div className="news-subtext">資安領域的重要交流平台，講座內容超高水準</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>AI平台與工具</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://huggingface.co/blog" target="_blank" rel="noopener noreferrer">HuggingFace Blog</a><div className="news-subtext">開源AI平台、NLP領域</div></li>
                <li><a href="https://huggingface.co/papers" target="_blank" rel="noopener noreferrer">HuggingFace Papers</a><div className="news-subtext">最新AI論文整合平台</div></li>
                <li><a href="https://stability.ai/news" target="_blank" rel="noopener noreferrer">Stability AI News</a><div className="news-subtext">圖像生成領域、開源模型動態</div></li>
                <li><a href="https://wandb.ai/site/blog" target="_blank" rel="noopener noreferrer">Weights & Biases Blog</a><div className="news-subtext">機器學習實驗管理工具分享</div></li>
                <li><a href="https://paperswithcode.com/" target="_blank" rel="noopener noreferrer">Papers With Code</a><div className="news-subtext">有代碼配套的AI論文匯整</div></li>
                <li><a href="https://www.openml.org/" target="_blank" rel="noopener noreferrer">OpenML</a><div className="news-subtext">開源機器學習資料庫</div></li>
                <li><a href="http://www.arxiv-sanity.com/" target="_blank" rel="noopener noreferrer">Arxiv-sanity</a><div className="news-subtext">AI論文推薦系統（聚合arXiv論文）</div></li>
                <li><a href="https://aicup.tw/" target="_blank" rel="noopener noreferrer">AI Cup (台灣AI應用競賽)</a><div className="news-subtext">台灣AI領域最大型技術競賽平台</div></li>
              </ul>
            </div>

            <div className="news-card">
              <h3>媒體與新聞平台II</h3>
              <div className="news-divider"></div>
              <ul className="news-list">
                <li><a href="https://www.zdnet.com/topic/ai/" target="_blank" rel="noopener noreferrer">ZDNet AI</a><div className="news-subtext">AI應用與技術新聞</div></li>
                <li><a href="https://www.ithome.com.tw/" target="_blank" rel="noopener noreferrer">iThome（iT邦幫忙、iThome新聞）</a><div className="news-subtext">台灣最大IT專業新聞媒體，涵蓋IT、開發、AI、安全、雲端</div></li>
                <li><a href="https://www.inside.com.tw/" target="_blank" rel="noopener noreferrer">INSIDE 硬塞的網路趨勢觀察</a><div className="news-subtext">科技趨勢、AI、區塊鏈、創新產品觀察</div></li>
                <li><a href="https://www.bnext.com.tw/" target="_blank" rel="noopener noreferrer">數位時代（BusinessNext）</a><div className="news-subtext">創業、科技、AI、商業趨勢分析</div></li>
                <li><a href="https://outlook.stpi.niar.org.tw/index" target="_blank" rel="noopener noreferrer">國研院科政中心-科技政策觀測</a><div className="news-subtext">台灣科技政策研究趨勢，偏政策性但質量高</div></li>
                <li><a href="https://pansci.asia/" target="_blank" rel="noopener noreferrer">PanSci 泛科學</a><div className="news-subtext">泛科學知識普及，科技、自然、社會領域綜合</div></li>
              </ul>
            </div>

          </div>
          <div style={{
            width: '90%',
            maxWidth: '600px',
            margin: '3rem auto',
            pointerEvents: 'none',
            zIndex: 0,
          }}>
            <img src="/img/logoandtext.png" style={{ width: '100%', height: 'auto' }} />
          </div>
        </section>
      </main>
    </Layout>
  );
}
