import React, { useState } from 'react';

const Checkout = ({ data, updateData, onNext, onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Validation Checks
  const isNameValid = data.customer.name.trim().length > 2;
  const isPhoneValid = /^\d{10}$/.test(data.customer.phone);
  const isFormValid = isNameValid && isPhoneValid;

  const handlePay = () => {
    if (!isFormValid) return;
    setIsSubmitting(true);

    // Mocking realistic payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      onNext(); 
    }, 2500);
  };

  return (
    <div className="step-content">
      <h2>4. Final Details</h2>
      <p className="hint" style={{ marginBottom: '25px', color: 'var(--ls-gray)' }}>
        Please provide your contact information to finish.
      </p>

      {/* Name Field with Validation Message */}
      <div className="input-group">
        <label>Full Name <span style={{ color: 'red' }}>*</span></label>
        <input 
          type="text"
          placeholder="Enter your name"
          value={data.customer.name}
          className={data.customer.name && !isNameValid ? 'input-error' : ''}
          onChange={(e) => updateData({ 
            customer: { ...data.customer, name: e.target.value } 
          })}
          disabled={isSubmitting}
        />
        {data.customer.name && !isNameValid && (
          <p className="error-text" style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
            Name must be at least 3 characters long.
          </p>
        )}
      </div>

      {/* Phone Field with 10-digit Validation */}
      <div className="input-group" style={{ marginBottom: '30px' }}>
        <label>Phone Number <span style={{ color: 'red' }}>*</span></label>
        <input 
          type="tel"
          maxLength="10"
          placeholder="10-digit mobile number"
          value={data.customer.phone}
          className={data.customer.phone && !isPhoneValid ? 'input-error' : ''}
          onChange={(e) => {
            // Numbers only check
            const val = e.target.value.replace(/\D/g, '');
            updateData({ 
              customer: { ...data.customer, phone: val } 
            });
          }}
          disabled={isSubmitting}
        />
        
        {/*Dynamic Error Message */}
        {data.customer.phone && data.customer.phone.length > 0 && data.customer.phone.length < 10 && (
          <p className="error-text" style={{ color: 'red', fontSize: '0.85rem', marginTop: '4px' }}>
            Please enter exactly 10 digits ({10 - data.customer.phone.length} digits left).
          </p>
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
        
        {/* CTA Placement & Real-time State */}
        <button 
          className="next-btn" 
          onClick={handlePay} 
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <span className="spinner-text">Processing...</span>
          ) : (
            `Pay ₹${data.price + 25}`
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;