import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from "react-icons/io5"; 
import { LuNavigation } from "react-icons/lu";     
import { AiOutlineFileText } from "react-icons/ai"; 

const Address = ({ data, updateData, onNext }) => {
  const [pickupError, setPickupError] = useState("");
  const [dropError, setDropError] = useState("");
  const [generalError, setGeneralError] = useState("");

  // Edge Case:Unservicable area case handling
  const BLOCKED_ZIPS = ['12345', '00000'];
  const isOnlyNumbers = (str) => /^\d+$/.test(str.replace(/\s/g, ''));

  useEffect(() => {
    if (data.pickup) {
      if (BLOCKED_ZIPS.some(zip => data.pickup.includes(zip))) setPickupError("Unserviceable area.");
      else if (isOnlyNumbers(data.pickup)) setPickupError("Add street name.");
      else if (data.pickup.length < 10) setPickupError("Address too short.");
      else setPickupError("");
    } else setPickupError("");

    if (data.drop) {
      if (BLOCKED_ZIPS.some(zip => data.drop.includes(zip))) setDropError("Unserviceable area.");
      else if (isOnlyNumbers(data.drop)) setDropError("Add street name.");
      else if (data.drop.length < 10) setDropError("Address too short.");
      else setDropError("");
    } else setDropError("");

    if (data.pickup && data.drop && data.pickup.toLowerCase().trim() === data.drop.toLowerCase().trim()) {
      setGeneralError("Addresses cannot be the same!");
    } else {
      setGeneralError("");
    }
  }, [data.pickup, data.drop]);

  const isInvalid = !data.pickup || !data.drop || data.pickup.length < 10 || data.drop.length < 10 || pickupError || dropError || generalError;

  return (
    <div className="step-content">
      <h2>1. Pickup & Drop Details</h2>
      
      {/* PICKUP FIELD */}
      <div className="input-group">
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          
          <span style={{ backgroundColor: '#E8F0FE', padding: '8px', borderRadius: '50%', color: '#2D4A8A', display: 'flex' }}>
            <IoLocationOutline size={20} />
          </span>
          <span style={{ fontWeight: '600', color: '#2D4A8A' }}>Pickup Address</span>
          <span style={{ color: '#dc3545', marginLeft: '2px', fontWeight: 'bold' }}>*</span>
        </label>
        <input 
          type="text"
          placeholder="e.g. 123, MG Road, Mumbai"
          value={data.pickup}
          className={pickupError ? 'input-error' : ''}
          onChange={(e) => updateData({ pickup: e.target.value })}
        />
        <div className="error-container">
           {pickupError && <p className="error-text">{pickupError}</p>}
        </div>
      </div>

      {/* DROP FIELD */}
      <div className="input-group">
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
       
          <span style={{ backgroundColor: '#FFF9E6', padding: '8px', borderRadius: '50%', color: '#F57C00', display: 'flex' }}>
            <LuNavigation size={20} />
          </span>
          <span style={{ fontWeight: '600', color: '#2D4A8A' }}>Drop Address</span>
          <span style={{ color: '#dc3545', marginLeft: '2px', fontWeight: 'bold' }}>*</span>
        </label>
        <input 
          type="text"
          placeholder="e.g. Apartment 4B, Delhi"
          value={data.drop}
          className={dropError ? 'input-error' : ''}
          onChange={(e) => updateData({ drop: e.target.value })}
        />
        <div className="error-container">
          {dropError && <p className="error-text">{dropError}</p>}
        </div>
      </div>

      {/* INSTRUCTIONS FIELD (Optional) */}
      <div className="input-group">
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span style={{ backgroundColor: '#F3F4F6', padding: '8px', borderRadius: '50%', color: '#757575', display: 'flex' }}>
            <AiOutlineFileText size={20} />
          </span>
          <span style={{ fontWeight: '600', color: '#2D4A8A' }}>Instructions</span>
          <span style={{ color: '#757575', fontSize: '0.8rem', fontWeight: '400', marginLeft: '5px' }}>(Optional)</span>
        </label>
        <textarea 
          placeholder="Landmark or floor number..."
          value={data.notes}
          onChange={(e) => updateData({ notes: e.target.value })}
          style={{ minHeight: '80px', resize: 'none' }}
        />
      </div>

   
{/* FIXED POSITION GENERAL ERROR WITH RED ALERT STYLE */}
<div className="general-error-wrapper">
  {generalError && (
    <p className="error-pill" style={{ 
      backgroundColor: '#FFF5F5', 
      color: '#DC3545', 
      borderColor: '#FEB2B2',
      fontWeight: '600'
    }}>
      {generalError}
    </p>
  )}
</div>

      <div className="button-group">
        <button className="next-btn" onClick={onNext} disabled={isInvalid}>
          Select Vehicle
        </button>
      </div>
    </div>
  );
};

export default Address;