import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faBook, faUserGraduate, faGlobe, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'


export const Home = (): JSX.Element => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Portfolio - ShuyaTobari</title>
    </Head>
    <Header />
    <main className="py-20 my-40 mx-20 lg:mx-20">
      <div className={'text-center'}>
        <h1>Shuya Tobari</h1>
        <p className="text-lg description">Department of Applied Informatics, Graduate School of Science and Engineering, Hosei University </p>
      </div>

      <section className={'mt-8'}>
        <h2 className={'mb-8 font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faBook}/> Research & Internship</h2>
        <ol className="relative ml-6 border-l border-sky-600 dark:border-gray-700">                  
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-sky-600 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022/09/12〜2022/09/16</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BIPROGY株式会社</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              ソフトウェアエンジニアインターン(1週間)に参加。 チームで保育園の連絡帳アプリのプロトタイプ開発した。
            </p>
            <ul className="list-disc ml-6 text-base font-normal text-gray-500 dark:text-gray-400">
              <li>スクラム開発(5人)</li>
              <li>フロントエンド(React)担当</li>
            </ul>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022/08/15〜2022/09/09</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">ソフトバンク株式会社</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              システムエンジニアインターン(1ヶ月)に参加。社内Web会議アプリに組み込み可能な字幕表示・議事録出力モジュール等の開発を担当し、画面設計からテストまでを実施した。
            </p>
            <ul className="text-base font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
              <li>フロントエンド：React</li>
              <li>バックエンド：Python(Django)</li>
              <li>データベース：PostgreSQL</li>
            </ul>
            <a href="https://scrapbox.io/shuya-t/Softbank_Summer_Internship" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Internship Note 
              <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022/08/01〜2022/08/05</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">日鉄ソリューションズ株式会社</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              システムエンジニアインターン(1週間)に参加。大学生協の自動化システムの開発として上流工程の一部(基本設計)を6人チームで体験した。<br/>
            </p>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022/05/28〜2022/05/29</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BIPROGY DX HACK -User&apos;s voice &quot;Solve the problem&quot;- </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              ハッカソン(2日間)に参加。アイスブレイクを促進するミーティングアプリの開発をした。
              5人チームのチームリーダー(進捗管理)とフロントエンド・バックエンドと幅広くプロジェクトに関わった。
              <a className='link' href='https://www.twilio.com/ja/'>Twilio</a>を活用したチームの中で最もアイディアと完成度が高いことを評してTwilio賞(副賞)受賞。
            </p>
            <ul className="text-base font-normal text-gray-500 dark:text-gray-400 list-disc ml-6">
                <li>フロントエンド：Javascript</li>
                <li>バックエンド：Python(Flask)</li>
                <li>API：Twilio</li>
              </ul>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2022/03/03</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">情報処理学会第84回全国大会にて研究成果を発表</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              学生奨励賞受賞受賞。
              発表テーマ：類似症例検索を目的とした撮像環境に頑健な特徴表現の獲得
            </p>
            <a className='link'
                href="https://docs.google.com/presentation/d/1yu0mcY9R7VcJUKms0Q83dyHsFfrqmFwur3MhqW5_nFo/edit?usp=sharing"
              >
                発表スライド
              </a>
          </li>
          <li className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-sky-600 rounded-full mt-8 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">2021/03〜</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">フューチャー株式会社</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              長期開発インターンにてAI-OCRを用いた帳票自動読み取りシステムの開発に参加。
              データ加工・拡張、論文調査・実装検証、画像処理を用いた関数作成・検証、AIモデルの構築・改良など担当している。<br/>
              開発言語：Python
            </p>
            <a href="https://scrapbox.io/shuya-t/Future_Internship" className="inline-flex items-center mt-2 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              Internship Note 
              <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </li>
        </ol>
      </section>

      <section className={'mt-8'}>
        <h2 className={'mb-4 font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faGlobe} /> Languages & Qualification</h2>
        <ul className="text-lg list-disc pl-8">
          <li>日本語(ネイティブ)</li>
          <li>英語(簡単な日常会話、TOEIC L&R：750 (2021年10月))</li>
          <li>基本情報技術者試験 合格 (2019年11月)</li>
          <li>普通自動車第一種免許(AT限定) 取得 (2019年9月)</li>
        </ul>
      </section>

      <section className={'mt-8'}>
        <h2 className={'mb-4 font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faLaptopCode} /> Skills</h2>
        <h3 className={'mb-2 text-2xl font-bold'}>Programing</h3>
        <div className="flex place-content-center space-x-8">
          <div className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-blue-500">Python</span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-500">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-amber-500 dark:text-amber-300">Javascript</span>
              <span className="text-sm font-medium text-amber-500 dark:text-amber-300">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-amber-500 h-2.5 rounded-full" style={{width: "75%"}}></div>
            </div>
          </div>
        </div>

        <div className="flex place-content-center space-x-8">
          <div className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-violet-500 dark:text-violet-400">HTML/CSS</span>
              <span className="text-sm font-medium text-violet-500 dark:text-violet-400">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-violet-500 h-2.5 rounded-full" style={{width: "75%"}}></div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-red-500 dark:text-red-300">Ruby</span>
              <span className="text-sm font-medium text-red-500 dark:text-red-300">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-red-500 h-2.5 rounded-full" style={{width: "65%"}}></div>
            </div>
          </div>
        </div>

        <div className="flex place-content-center space-x-8">
          <div className="w-1/2">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-lime-500 dark:text-lime-300">C++</span>
              <span className="text-sm font-medium text-lime-500 dark:text-lime-300">50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-lime-600 h-2.5 rounded-full" style={{width: "50%"}}></div>
            </div>
          </div>

          <div className="w-1/2">
            {/* <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-amber-300">C++</span>
              <span className="text-sm font-medium text-blue-700 dark:text-amber-300">50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
              <div className="bg-amber-500 h-2.5 rounded-full" style={{width: "50%"}}></div>
            </div> **/}
          </div>
        </div>

        <br></br>
        <h3 className={'mb-2 text-2xl font-bold'}>Framework</h3>
        <div className='text-lg'>
          <p>Python : Pytorch, Pandas, Django, Flask, etc...</p>
          <p>Javascript : React, Next</p>
          <p>Ruby : Ruby on Rails</p>
          <p>CSS : Tailwind, MUI</p>
          <p>VM (仮想技術) : Docker</p>
        </div>

      </section>
      <section className={'mt-8'}>
        <h2 className={'mb-4 font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faUserGraduate}/> Education</h2>
        <p>法政大学 理工学部 応用情報工学科(2022年卒業)</p>
        <p>埼玉県立越谷南高等学校 普通科(2018年卒業)</p>
      </section>
    </main>

    <footer>Powered by Shuya Tobari</footer>

    <style jsx>{`
      .header-title {
        font-family: Arial, cursive;
        font-size: 36px;
        height: min-content;
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .link {
        color: #1a0dab;
        text-decoration: underline;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .a:hover,
      .a:focus,
      .a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      header {
        padding: 10px 4%;
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        background: #fff;
      }

      nav {
        margin: 0 0 0 auto;
      }

      .with-scrapbox {
        color: #0369a1;
      }
      .with-scrapbox:hover {
        color: #0ea5e9;
      }

      /* for Desktop */
      @media (min-width: 640px) {
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      h1 {
        font-size: clamp(1.5rem, 3vw + 1.5rem, 3.75rem);
        font-weight: 700;
      }
      h2 {
        font-size: clamp(0.5rem, 2vw + 0.5rem, 1.875rem);
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home