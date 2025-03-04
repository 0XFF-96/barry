import React from 'react';

function Hero() {
  return (
    <section className="hero">
      {/* 左侧图片 */}
      <div className="hero-image-container">
        {/* 你可以换成自己想要的图片 */}
        <img src="https://static.wixstatic.com/media/363c27_54fac176698d4304a246f60d6d698442~mv2.jpg/v1/crop/x_69,y_0,w_2370,h_2542/fill/w_486,h_526,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Barry.jpg" alt="Hero" />
      </div>

      {/* 右侧文字 */}
      <div className="hero-text-container">
        <h1>Barry Tognolini</h1>

        <h2>is a seasoned music professional currently serving as a Manager at Steinway & Sons in New York </h2>
        
        <p>from Perth, Austrilia.</p>
        <p>Her new album is available now.</p>
        <a href="#listen-now" className="hero-button">Listen Now</a>
      </div>
    </section>
  );
}

export default Hero;
