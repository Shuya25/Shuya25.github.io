import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode, faBook, faUserGraduate, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/header'


export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Portfolio - ShuyaTobari</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="py-20 my-40 mx-20 lg:mx-20">
      <div className={'text-center'}>
        <h1 className="text-6xl font-bold">Shuya Tobari</h1>
        <p className="text-lg description">Major in Applied Informatics, Graduate School of Science and Engineering, The University of Hosei</p>
      </div>
      {/* <section className={'mt-8'}> */}

        {/* <h2 className={'text-3xl font-bold'}>Contact information</h2> */}
        {/* <p> */}
          {/* <a
            href="https://twitter.com/entaku_0818"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </a> */}
          {/* <a
            href="https://github.com/Shuya25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a> */}
        {/* </p> */}
      {/* </section> */}

      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faBook}/> Research & Internship</h2>
        <ul className={'mt-4 timeline'}>
        <li>
            <p className="timeline-date">2022/09/12〜2022/09/16</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>BIPROGY株式会社</h3>
              <p>ソフトウェアエンジニアインターン (1週間)</p>
              <p>保育園の連絡帳アプリのプロトタイプ開発</p>
              <ul className="list-disc m-6">
                <li>スクラム開発(5人)</li>
                <li>フロントエンド(React)担当</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="timeline-date">2022/08/15〜2022/09/09</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>ソフトバンク株式会社 </h3>
              {/* <a
                href="https://~/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://~/
              </a> */}
              <p>システムエンジニアインターン (1ヶ月)</p>
              <p>社内Web会議アプリに組み込み可能な字幕表示・議事録出力モジュール等の開発</p>
              <ul className="list-disc m-6">
                <li>画面設計からテストまでを実施</li>
                <li>フロントエンド：React</li>
                <li>バックエンド：Python(Django)</li>
                <li>データベース：PostgreSQL</li>
              </ul>
            </div>
          </li>
          <li>
            <p className="timeline-date">2022/03/03</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>情報処理学会第84回全国大会学生奨励賞受賞</h3>
              <a
                href="http://www.ipsj.or.jp/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.ipsj.or.jp/index.html
              </a>
              <p>発表テーマ：類似症例検索を目的とした撮像環境に頑健な特徴表現の獲得</p>
            </div>
          </li>
          <li>
            <p className="timeline-date">2021/03〜現在</p>
            <div className={'timeline-content'}>
              <h3 className={'text-lg font-bold mt-8'}>フューチャー株式会社 </h3>
              <a
                href="https://www.future.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.future.co.jp/
              </a>
              <p>長期開発インターン</p>
              <p>AIOCRを用いた帳票自動読み取りシステムの開発</p>
              <p>データ加工・拡張、論文調査・実装検証、画像処理を用いた関数作成・検証、AIモデルの構築・改良など</p>
              <p>使用言語：Python</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faGlobe} /> Languages & Qualification</h2>
        <ul className="text-lg list-disc pl-8">
          <li>日本語(ネイティブ)</li>
          <li>英語(簡単な日常会話、TOEIC：750 (2021年10月))</li>
          <li>基本情報技術者試験 合格 (2019年11月)</li>
          <li>普通自動車第一種免許(AT限定) 取得 (2019年9月)</li>
        </ul>
      </section>

      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faLaptopCode} /> Skills</h2>
        <h3 className={'text-2xl font-bold'}>Programing</h3>
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
        <h3 className={'text-2xl font-bold'}>Framework</h3>
        <div className='text-lg'>
          <p>Python : Pytorch, Pandas, Django, Flask</p>
          <p>Javascript : React, Next</p>
          <p>Ruby : Rails</p>
          <p>CSS : Tailwind, MUI</p>
        </div>

      </section>
      <section className={'mt-8'}>
        <h2 className={'text-3xl font-bold text-sky-800 dark:text-sky-800'}><FontAwesomeIcon icon={faUserGraduate}/> Education</h2>
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

      a {
        color: inherit;
        text-decoration: none;
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

      .timeline {
        list-style: none;
      }

      .timeline > li {
        margin-bottom: 60px;
      }

      /* for Desktop */
      @media (min-width: 640px) {
        .timeline > li {
          overflow: hidden;
          margin: 0;
          position: relative;
        }

        .timeline-date {
          width: 110px;
          float: left;
          margin-top: 20px;
        }

        .timeline-content {
          width: 75%;
          float: left;
          border-left: 3px #e5e5d1 solid;
          padding-left: 30px;
        }

        .timeline-content:before {
          content: '';
          width: 12px;
          height: 12px;
          background: #6f86c1;
          position: absolute;
          left: 106px;
          top: 36px;
          border-radius: 100%;
        }
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

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home