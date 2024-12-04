import React, { useState } from 'react';
import LayerAdd from './LayerAdd';
import LayerBuilder from './LayerBuilder';
import './styles/CakeBuilder.css';

const CakeBuilder = ({ layers, addLayer, deleteLayer }) => {
  return (
    <div className="cake-builder">
      {layers.map((layer, index) => (
        <LayerBuilder
          key={index}
          layer={layer}
          deleteLayer={() => deleteLayer(index)}
        />
      ))}
      <LayerAdd addLayer={addLayer} />
    </div>
  );
};

export default CakeBuilder;
