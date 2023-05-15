import './navbar.css'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-content-o content-logo">LOGO</div>
        <div className="nav-content-o content-main">
          <div className="nav-content-2-i"><span ><Link to="/">HOME</Link></span> </div>
          <div className="nav-content-2-i"><span></span><Link to="/app">APP</Link></div>
          <div className="nav-content-2-i"><span><Link to="/about">ABOUT</Link></span> </div>
          <div className="nav-content-2-i"><span>CONTACT</span> </div>
        </div>
        <div className="nav-content-o content-login">LOGIN</div>
      </nav>
    </>
  )
}
