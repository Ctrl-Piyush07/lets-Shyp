import React, { useState, useEffect } from 'react';
import { validateAddress } from '../utils/validation';

const Address = ({ data, updateData, onNext }) => {
  // Hum ek single error string use karenge simplify karne ke liye
  const [errorMsg, setErrorMsg] = useState("");

  // Real-time validation
  useEffect(() => {
    // validateAddress ko dono fields pass karo
    const validationResult = validateAddress(data.pickup, data.drop);
    setErrorMsg(validationResult);
  }, [data.pickup, data.drop]);

  // Button tab disable hoga jab fields empty honge ya error hoga
  const isInvalid = !data.pickup || !data.drop || errorMsg !== "";

  const handleNext = () => {
    // Final check before moving to next step
    const finalError = validateAddress(data.pickup, data.drop);
    if (finalError) {
      setErrorMsg(finalError); 
      return; 
    }
    onNext(); 
  };

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
      </div>

      <div className="input-group">
        <label>Drop Address</label>
        <input 
          type="text"
          placeholder="Destination address..."
          value={data.drop}
          onChange={(e) => updateData({ drop: e.target.value })}
        />
      </div>

      {/* ERROR DISPLAY AREA */}
      {errorMsg && <p className="error-text" style={{color: 'red', fontWeight: 'bold'}}>{errorMsg}</p>}

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
        onClick={handleNext} 
        disabled={isInvalid}
        style={{ backgroundColor: isInvalid ? '#ccc' : '#007bff', cursor: isInvalid ? 'not-allowed' : 'pointer' }}
      >
        Select Vehicle
      </button>
    </div>
  );
};

export default Address;