import React from 'react';
import CakeLayer from './CakeLayer';
import './styles/Cake.css';

const Cake = ({ layers }) => (
  <div className="cake">
    {layers.map((layer, index) => (
      <CakeLayer key={index} layer={layer} />
    ))}
  <img src="src/assets/logo.png" className="logo" alt="Cake Builder Logo" width="150px" height="150px" />
  </div>
);


export default Cake;
