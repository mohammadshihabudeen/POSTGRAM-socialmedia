import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const Footer = () => {
  const { Count } = useContext(DataContext)
  return (
    <footer className="footer" >

      <p>
      Total {Count === 1 ? 'post' : 'posts'}: {Count} || CopyRights &copy; {new Date().getFullYear()} 
      </p>
    </footer>
  );
};

export default Footer;
