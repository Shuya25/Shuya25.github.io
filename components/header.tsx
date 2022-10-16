import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'


export const Header = (): JSX.Element => {
  return (
    <header>
      <h1 className="text-xl">
        <Link className="header-title" href='/'>Home</Link>
      </h1>
      <nav className="pc-nav">
        <a
          id='scrapbox'
          className='ml-4 hover:text-blue-300'
          href="https://scrapbox.io/shuya-t/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scrapbox
          {/* <img src="/scrapbox.png" width="23" height="23"></img> Scrapbox */}
          {/* <FontAwesomeIcon size="xl" icon={faFile} /> */}
          {/* <FontAwesomeIcon size="lg" icon={faFileCircleCheck} /> */}
        </a>
        <a
          className='ml-4 hover:text-blue-300'
          href="https://github.com/Shuya25"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="lg" icon={faGithub} /> Github
        </a>
        
      </nav>
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

      #scrapbox::before {
        // content: url(/scrapbox.png);
        // vertical-align: middle;

        content: "";
        display: inline-block;
        width: 25px;
        height: 25px;
        background: url(/scrapbox.png) no-repeat;
        background-size: contain;
        margin-right: 3px;
        transform: translateY(6px);
      }

    `}</style>
    </header>
  )
}

export default Header