import React from 'react';
import circleLg from '../../../assets/images/circle-lg.png';

export const DecorationCircleLg = () => {
  return (
    <div style={{ zIndex: '-1' }} className="absolute top-56 left-96">
      <img src={circleLg} alt="" />
    </div>
  );
};
