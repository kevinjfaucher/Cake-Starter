import React, { useState } from 'react';
import LayerForm from './LayerForm';
import './styles/LayerAdd.css';

const LayerAdd = ({ addLayer }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="layer-add">
      {showForm ? (
        <LayerForm
          onSave={(layer) => {
            addLayer(layer);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add A Layer</button>
      )}
    </div>
  );
};

export default LayerAdd;                                  
