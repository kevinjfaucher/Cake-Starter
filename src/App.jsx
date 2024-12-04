import React, { useState } from 'react';
import Cake from './components/Cake/Cake';
import CakeBuilder from './components/CakeBuilder/CakeBuilder';
import './styles/App.css';

const App = () => {
  const [layers, setLayers] = useState([]);

  const addLayer = (layer) => setLayers([...layers, layer]);
  const deleteLayer = (index) =>
    setLayers(layers.filter((_, i) => i !== index));

  return (
    <div className="app">
      <Cake layers={layers} />
      <CakeBuilder layers={layers} addLayer={addLayer} deleteLayer={deleteLayer} />
    </div>
  );
};

export default App;
