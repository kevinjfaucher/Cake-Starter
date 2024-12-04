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
      }}
    ></div>
  );
};

export default CakeLayer;
