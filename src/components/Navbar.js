import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Your Site Title</div>
      <ul>
        <li>About</li>
        <li>Gallery</li>
        <li>Music</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div>
        {/* 右侧可能有登录按钮或其他内容 */}
      </div>
    </nav>
  );
}

export default Navbar;
