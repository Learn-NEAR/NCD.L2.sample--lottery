import React from 'react';
import circleMd from '../../../assets/images/circle-md.png';

export const DecorationCircleMd = () => {
  return (
    <div style={{ zIndex: '-1' }} className="absolute top-24">
      <img src={circleMd} alt="" />
    </div>
  );
};
