import React from "react";

import "./container.styles.scss";
import img_avatar from "../../assets/profile.jpg";

const Container = () => (
  <div class="grid-container">
    <div class="div1">
      <div className="profile">
        <img className="avatar" src={img_avatar} alt="Avatar" />
        <h1>
          Jon <span>Zuka</span>
        </h1>
        <h2>Software Developer</h2>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sed corporis quaerat vero? Tempore sapiente reiciendis quos porro
          incidunt, quod nesciunt iusto aspernatur, vero eius, illum officia
          obcaecati! Fuga, cumque!
        </p>
      </div>
    </div>
    <div class="div2">
      <div>🤯</div>
    </div>
    <div class="div3">3</div>
    <div class="div4">4</div>
    <div class="div5">5</div>
    <div class="div6">6</div>
    <div class="div7">7</div>
  </div>
);

export default Container;
