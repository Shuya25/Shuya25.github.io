import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'

export const Header = (): JSX.Element => (
  <header>
    <h1 className="text-xl">
      <Link className="header-title" href='/'>Home</Link>
    </h1>
    {/* <nav className="pc-nav"> */}
      {/* <Link href="/">home</Link> */}
      {/* <Link className={'ml-4'} href="/articles">
        articles
      </Link> */}
    {/* </nav> */}
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