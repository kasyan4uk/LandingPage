import React from 'react';
import "./Header.css";
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return <header className="header">{children}</header>

}

export default Header

Header.propTypes = {
  children: PropTypes.node.isRequired,
};