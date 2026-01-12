import React from 'react';

const Summary = ({ data, onNext, onBack }) => {
  const serviceFee = 25;
  const totalAmount = (data.price || 0) + serviceFee;

  return (
    <div className="step-content">
      {/* 1. DUPLICATE FIXED: Removed the <p> step-indicator line */}
      <h2>3. Pricing & Order Summary</h2>
      
      <div className="summary-card">
        <p><strong>Pickup:</strong> {data.pickup}</p>
        <p><strong>Drop:</strong> {data.drop}</p>
        <p><strong>Vehicle:</strong> <span className="capitalize">{data.vehicle}</span></p>
        
        {/* Instructions visibility fixed */}
        {data.notes && (
          <p><strong>Instructions:</strong> {data.notes}</p>
        )}
      </div>

      <div className="price-breakdown">
        <h3 style={{ color: 'var(--ls-navy)', marginBottom: '15px' }}>Fare Breakdown</h3>
        <div className="price-row">
          <span>Base Fare:</span>
          <span>₹{data.price}</span>
        </div>
        <div className="price-row">
          <span>Service Fee:</span>
          <span>₹{serviceFee}</span>
        </div>
        <div className="price-row total">
          <span><strong>Total Amount:</strong></span>
          <span><strong>₹{totalAmount}</strong></span>
        </div>
      </div>

      {/* Spacing and layout alignment for buttons */}
      <div className="button-group" style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
        <button className="back-btn" style={{    flex: 1, 
            padding: '16px', 
            borderRadius: '12px',
            border: '2px solid #EDF0F5',
            fontWeight: '600' }} onClick={onBack}>Edit Details</button>
        <button className="next-btn" style={{ flex: 2 }} onClick={onNext}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Summary;