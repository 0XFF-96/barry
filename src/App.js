import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Discography from './components/Discography';

// 导入新的页面组件
import About from './components/About';
import Gallery from './components/Gallery';
import Music from './components/Music';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 导航栏 */}
        <Navbar />
        
        {/* 路由配置 */}
        <Routes>
          <Route path="/" element={
            <>
              {/* 主视觉区 */}
              <Hero />
              {/* 新组件 */}
              <Introduction />
              <Discography />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* 页脚（可选） */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
