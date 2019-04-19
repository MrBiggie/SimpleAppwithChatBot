import Link from 'next/link'
import stylesheet from './style.scss'

const Footer = () => (
  <div>
    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
    <div className="footer-r row">
      <div className="col-xs-12 col-sm-5 col-lg-3">
        <div className="content">
          <h4>HELLO</h4>
        </div>
      </div>
    </div>
  </div>
);

export default Footer
