// src/components/Introduction.js
import React from 'react';

function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction-container">
        {/* 如果想完全按照截图行数来分行，可以手动加 <br /> */}
        <h2>
          Alejandra Cruz grew up by the beach,<br />
          but you won’t mistake her songs<br />
          for breezy summertime fare.
        </h2>
        <p>
          She writes from the point of view of outcasts and misfits, bringing a new 
          perspective and incisive wit to her tales of relationships gone wrong. 
          With a smoky voice trained on jazz classics and a stacked backing band, 
          she combines a vintage sound with modern material to thrilling effect.
        </p>
      </div>
    </section>
  );
}

export default Introduction;
