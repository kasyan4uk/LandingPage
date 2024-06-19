import React from 'react';
import "./Testimonial.css";
import PropTypes from 'prop-types';

const Testimonial = ({ children }) => {
  return (
    <section className="testimonial">
      <div className="testimonial__container">{children}</div>
    </section>
  )
}

export default Testimonial

Testimonial.propTypes = {
  children: PropTypes.node.isRequired,
};