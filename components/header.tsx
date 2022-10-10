import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'


export const Header = (): JSX.Element => (
  <header>
    <h1 className="text-xl">
      <Link className="header-title" href='/'>Home</Link>
    </h1>
    <nav className="pc-nav">
      {/* <Link href="/">home</Link> */}
      {/* <Link className={'ml-4'} href="/articles">
        articles
      </Link> */}
      <a
        href="https://github.com/Shuya25"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="lg" icon={faGithub} />
      </a>
    </nav>
    <p className='text-right'>
      {/* <a
        href="https://twitter.com/entaku_0818"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon size="lg" icon={faTwitter} />
      </a> */}
    </p>
    <style jsx>{`
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
    `}</style>
  </header>
)

export default Header