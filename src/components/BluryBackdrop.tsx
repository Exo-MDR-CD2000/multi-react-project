import React from 'react';

interface BackdropProps {
  show: boolean;
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show, onClick }) => {
  return <div className={`backdrop ${show ? 'show' : ''}`} onClick={onClick}></div>;
};

export default Backdrop;