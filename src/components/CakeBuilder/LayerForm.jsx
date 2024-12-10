import React, { useState } from 'react';
import './styles/LayerForm.css';

const LayerForm = ({ onSave, onCancel }) => {
  const [layer, setLayer] = useState({
    color: 'pink',
    width: 5,
    height: 5,
  });

  const handleChange = (e) =>
    setLayer({ ...layer, [e.target.name]: e.target.value });

  return (
    <div className="layer-form">
      <label className="form-labels">
        Color:
        <input type="color" name="color" defaultValue="#e8a5e1" onChange={handleChange}></input>
      </label>
      <label className="form-labels">
        Width:
        <input
          type="range"
          name="width"
          min="0.1"
          max="10"
          step="0.1"
          value={layer.width}
          onChange={handleChange}
        />
      </label>
      <label className="form-labels">
        Height:
        <input
          type="range"
          name="height"
          min="0.1"
          max="10"
          step="0.1"
          value={layer.height}
          onChange={handleChange}
        />
      </label>
      <button id="form-button" onClick={() => onSave(layer)}>Save</button>
      <button id="form-button" onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default LayerForm;
