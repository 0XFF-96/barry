import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> Barry Tognolini </div>
      <ul>
        <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
        <li><Link to="/music" className="nav-link">Music</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
      <div>
        {/* 右侧可能有登录按钮或其他内容 */}
      </div>
    </nav>
  );
}

export default Navbar;
