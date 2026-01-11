import React, { useState, useEffect } from 'react';
import { validateAddress } from '../utils/validation';

const Address = ({ data, updateData, onNext }) => {
  const [errors, setErrors] = useState({ pickup: '', drop: '' });

  // Validate whenever pickup or drop changes
  useEffect(() => {
    const pickupError = data.pickup ? validateAddress(data.pickup) : "";
    const dropError = data.drop ? validateAddress(data.drop) : "";
    setErrors({ pickup: pickupError, drop: dropError });
  }, [data.pickup, data.drop]);

  // Disable button if inputs are empty or have errors
  const isInvalid = 
    !data.pickup || !data.drop || errors.pickup || errors.drop;

  return (
    <div className="step-container">
      <h2>Pickup & Drop Details</h2>
      
      <div className="input-group">
        <label>Pickup Address</label>
        <input 
          type="text"
          value={data.pickup}
          onChange={(e) => updateData({ pickup: e.target.value })}
          placeholder="Enter pickup location..."
          className={errors.pickup ? 'error-border' : ''}
        />
        {errors.pickup && <span className="error-text">{errors.pickup}</span>}
      </div>

      <div className="input-group">
        <label>Drop Address</label>
        <input 
          type="text"
          value={data.drop}
          onChange={(e) => updateData({ drop: e.target.value })}
          placeholder="Enter destination..."
          className={errors.drop ? 'error-border' : ''}
        />
        {errors.drop && <span className="error-text">{errors.drop}</span>}
      </div>

      <div className="input-group">
        <label>Instructions (Optional)</label>
        <textarea 
          value={data.notes}
          onChange={(e) => updateData({ notes: e.target.value })}
          placeholder="Gate code, floor number, etc."
        />
      </div>

      <button 
        disabled={isInvalid} 
        onClick={onNext}
        className="next-btn"
      >
        Next: Vehicle Selection
      </button>
    </div>
  );
};

export default Address;