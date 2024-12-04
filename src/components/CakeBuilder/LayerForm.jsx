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
      <label>
        Color:
        <select name="color" value={layer.color} onChange={handleChange}>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </label>
      <label>
        Width:
        <input
          type="range"
          name="width"
          min="1"
          max="10"
          value={layer.width}
          onChange={handleChange}
        />
      </label>
      <label>
        Height:
        <input
          type="range"
          name="height"
          min="0.5"
          max="10"
          step="0.5"
          value={layer.height}
          onChange={handleChange}
        />
      </label>
      <button onClick={() => onSave(layer)}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default LayerForm;
