import React from 'react';
import lines from '../../../assets/images/lines.png';

export const DecorationLines = () => {
  return (
    <div style={{ zIndex: '-1' }} className="absolute hidden md:block bottom-0 left-24 z-10">
      <img src={lines} alt="" />
    </div>
  );
};
