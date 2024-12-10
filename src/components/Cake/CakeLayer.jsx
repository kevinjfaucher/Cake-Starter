import React from 'react';
import './styles/CakeLayer.css';

const CakeLayer = ({ layer }) => {
  const { color, width, height } = layer;
  return (
    <div
    className="cake-layer"
    style={{
      backgroundColor: color,
      width: `${width * 10}px`,
      height: `${height * 10}px`,
      width: `${width * 80}px`,
      height: `${height * 25}px`,

    }}

  >
    <div className="top"
    style={{
      backgroundColor: color,
      width: `${width * 79.5}px`,
      height: `${height * 4}px`,

    }}></div>
  </div>
);
};

export default CakeLayer;
