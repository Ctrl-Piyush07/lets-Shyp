import React, { useState } from 'react';

const Step4Checkout = ({ data, updateData, onNext, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation: Name > 2 chars and Phone exactly 10 digits
  const isFormValid = 
    data.customer.name.trim().length > 2 && 
    /^\d{10}$/.test(data.customer.phone);

  const handlePay = () => {
    if (!isFormValid) return;

    // Requirement: Loading state
    setIsSubmitting(true);

    // Mocking a payment processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      onNext(); // Move to Step 5 (Confirmation)
    }, 2500);
  };

  return (
    <div className="step-content">
      <p className="step-indicator">STEP 4 OF 4: CHECKOUT</p>
      <h2>4. Final Details</h2>
      <p className="hint">Please provide your contact information to finish.</p>

      <div className="input-group">
        <label>Full Name</label>
        <input 
          type="text"
          placeholder="Enter your name"
          value={data.customer.name}
          onChange={(e) => updateData({ 
            customer: { ...data.customer, name: e.target.value } 
          })}
          disabled={isSubmitting}
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input 
          type="tel"
          placeholder="10-digit mobile number"
          value={data.customer.phone}
          onChange={(e) => updateData({ 
            customer: { ...data.customer, phone: e.target.value } 
          })}
          disabled={isSubmitting}
        />
        {!/^\d*$/.test(data.customer.phone) && (
            <p className="error-text">Please enter numbers only.</p>
        )}
      </div>

      <div className="button-group">
        <button 
          className="back-btn" 
          onClick={onBack} 
          disabled={isSubmitting}
        >
          Back
        </button>
        
        {/* Requirement: Primary CTA with Loading State */}
        <button 
          className="pay-btn" 
          onClick={handlePay} 
          disabled={!isFormValid || isSubmitting}
          style={{ 
            backgroundColor: (!isFormValid || isSubmitting) ? '#ccc' : '#28a745',
            color: 'white',
            width: '100%',
            position: 'relative'
          }}
        >
          {isSubmitting ? (
            <span className="spinner-text">Processing Payment...</span>
          ) : (
            `Pay ₹${data.price + 25}`
          )}
        </button>
      </div>
    </div>
  );
};

export default Step4Checkout;