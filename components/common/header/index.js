import Nav from '../nav'
import stylesheet from './style.scss'

const Header = () => (
  <div>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <Nav/>
  </div>
);

export default Header
