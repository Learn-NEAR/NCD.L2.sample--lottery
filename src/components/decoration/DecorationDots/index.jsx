import React from 'react';
import dots from '../../../assets/images/dots.png';

export const DecorationDots = () => {
  return (
    <div style={{ zIndex: '-1' }} className="absolute hidden md:block top-36 right-0">
      <img src={dots} alt="" />
    </div>
  );
};
