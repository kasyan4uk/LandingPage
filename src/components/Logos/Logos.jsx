import React from 'react';
import "./Logos.css";
import { logos } from "../../utils/constants" 

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__slide">
        {logos.map((img, i) => (
          <img className="logo" key={i} src={img} alt="logo" />
        ))}
        {logos.map((img, i) => (
          <img className="logo" key={i} src={img} alt="logo" />
        ))}
      </div>
      <div className="logos__overlay logos__overlay-left"></div>
      <div className="logos__overlay logos__overlay-right"></div>
    </section>
  )
}

export default Logos