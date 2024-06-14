import React from 'react';
import "./Page.css";
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return <div className="page">{children}</div>
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};