import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faPencil} size="lg" className="header-icon" />
      <h2 className="header-text">POSTGRAM</h2>
    </div>
  );
};

export default Header;