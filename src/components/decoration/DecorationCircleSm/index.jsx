import React from 'react';
import circleSm from '../../../assets/images/circle-sm.png';

export const DecorationCircleSm = () => {
  return (
    <div style={{ zIndex: '-1' }} className="absolute bottom-72 right-24">
      <img src={circleSm} alt="" />
    </div>
  );
};
