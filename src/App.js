import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Introduction from './components/Introduction'; // 引入新组件

function App() {
  return (
    <div className="app-container">
      {/* 导航栏 */}
      <Navbar />

      {/* 主视觉区 */}
      <Hero />

      {/* 新组件 */}
      <Introduction />
      {/* 页脚（可选） */}
      <Footer />
    </div>
  );
}

export default App;
