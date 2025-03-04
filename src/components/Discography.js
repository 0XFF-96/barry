// src/components/Discography.js
import React from 'react';

function Discography() {
  return (
    <section className="discography">
      <h1>Music Videos</h1>
      <p>
        Barry’s music videos are a visual treat, with stunning cinematography and
        evocative storytelling that brings his songs to life. Watch the latest videos here.
      </p>

      <div className="discography-container">
        {/* 第一张专辑卡片 */}
        <div className="discography-item">
          <img src="https://posterjack.ca/cdn/shop/articles/Tips_for_Taking_Photos_at_the_Beach_55dd7d25-11df-4acf-844f-a5b4ebeff4df.jpg?v=1738158629&width=1400" alt="That Was Then" />
          <h3>That Was Then</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button>Listen Now</button>
        </div>

        {/* 第二张专辑卡片 */}
        <div className="discography-item">
          <img src="https://posterjack.ca/cdn/shop/articles/Tips_for_Taking_Photos_at_the_Beach_55dd7d25-11df-4acf-844f-a5b4ebeff4df.jpg?v=1738158629&width=1400" alt="Turquoise Moon" />
          <h3>Turquoise Moon</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button>Listen Now</button>
        </div>

        {/* 第三张专辑卡片 */}
        <div className="discography-item">
          <img src="https://posterjack.ca/cdn/shop/articles/Tips_for_Taking_Photos_at_the_Beach_55dd7d25-11df-4acf-844f-a5b4ebeff4df.jpg?v=1738158629&width=1400" alt="The Distance Between Us" />
          <h3>The Distance Between Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button>Listen Now</button>
        </div>
      </div>
    </section>
  );
}

export default Discography;
