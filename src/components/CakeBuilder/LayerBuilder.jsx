import React from 'react';
import './styles/LayerBuilder.css';

const LayerBuilder = ({ layer, deleteLayer }) => (
  <div className="layer-builder">
    <p>Color: {layer.color}</p>
    <p>Width: {layer.width}</p>
    <p>Height: {layer.height}</p>
    <button onClick={deleteLayer}>Delete</button>
  </div>
);

export default LayerBuilder;