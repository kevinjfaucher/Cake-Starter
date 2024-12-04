import React from 'react';
import CakeLayer from './CakeLayer';
import './styles/Cake.css';

const Cake = ({ layers }) => (
  <div className="cake">
    {layers.map((layer, index) => (
      <CakeLayer key={index} layer={layer} />
    ))}
  </div>
);

export default Cake;
