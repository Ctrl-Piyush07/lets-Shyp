import React, { useState, useEffect } from 'react';
import { validateAddress } from '../utils/validation';

const Address = ({ data, updateData, onNext }) => {
  const [errors, setErrors] = useState({ pickup: '', drop: '' });

  // Real-time validation for the Edge Case
  useEffect(() => {
    const pError = data.pickup ? validateAddress(data.pickup) : "";
    const dError = data.drop ? validateAddress(data.drop) : "";
    setErrors({ pickup: pError, drop: dError });
  }, [data.pickup, data.drop]);

  // Next button is only enabled if there's text AND no validation errors
  const isInvalid = !data.pickup || !data.drop || errors.pickup || errors.drop;

  return (
    <div className="step-content">
      <h2>1. Pickup & Drop Details</h2>
      
      <div className="input-group">
        <label>Pickup Address</label>
        <input 
          type="text"
          placeholder="Type address (Try '12345' for error)"
          value={data.pickup}
          onChange={(e) => updateData({ pickup: e.target.value })}
        />
        {errors.pickup && <p className="error-text">{errors.pickup}</p>}
      </div>

      <div className="input-group">
        <label>Drop Address</label>
        <input 
          type="text"
          placeholder="Destination address..."
          value={data.drop}
          onChange={(e) => updateData({ drop: e.target.value })}
        />
        {errors.drop && <p className="error-text">{errors.drop}</p>}
      </div>

      <div className="input-group">
        <label>Delivery Instructions (Optional)</label>
        <textarea 
          placeholder="e.g. Leave at front desk"
          value={data.notes}
          onChange={(e) => updateData({ notes: e.target.value })}
        />
      </div>

      <button 
        className="next-btn" 
        onClick={onNext} 
        disabled={isInvalid}
      >
        Select Vehicle
      </button>
    </div>
  );
};

export default Address;