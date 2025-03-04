// src/components/Introduction.js
import React from 'react';

function Introduction() {
  return (
    <section className="introduction">
<div className="introduction-container">
  {/* 如果想像原示例那样手动插入 <br /> 来分行，可以这样做 */}
  <h1>
    A seasoned music professional,<br />
    currently serving as a Manager at Steinway & Sons<br />
    in New York.
  </h1>
  <p>
    Originally from Australia, Tognolini has a rich background in music, having 
    trained as a classical pianist under Madame Alice Carrard, a notable student 
    of composer Béla Bartók. His early career included performing on television 
    and stage from the age of 12, and he later pursued a teaching career in music 
    for ten years in Western Australia.
  </p>
  <p>
    In the 1990s, Tognolini transitioned back to performance, signing a recording 
    contract with Sony Music and touring internationally. He has shared the stage 
    with renowned artists such as Andrea Bocelli and Sarah Brightman. After retiring 
    from touring, he shifted to a sales career with Steinway & Sons, starting in 
    Atlanta, Georgia, and later moving to Long Island, New York. In 2019, he transferred 
    to Steinway Hall in Manhattan, where he continued until his retirement in March 
    2022. Tognolini is also recognized for his contributions as a juror and faculty 
    member in various music competitions, including the Manolov International Competition.
  </p>
</div>
    </section>
  );
}

export default Introduction;
