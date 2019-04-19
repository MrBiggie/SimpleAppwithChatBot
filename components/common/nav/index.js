// import Search from '../Search'
import stylesheet from './style.scss'
import Link from 'next/link'

const Header = () => (
  <nav>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <ul>
      <li>
        <Link href="/" prefetch>HOME</Link>
      </li>
      <li>
        <Link href="/" prefetch>PRODUCT</Link>
      </li>
      <li>
        <Link href="/" prefetch>ABOUT</Link>
      </li>
      <li>
        <Link href="/" prefetch>CONTACT</Link>
      </li>
      <li className="action">
        <Link href="/" prefetch>TRY</Link>
      </li>
    </ul>
  </nav>
);

export default Header
