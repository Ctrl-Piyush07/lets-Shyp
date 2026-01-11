// import React from 'react';

// const Summary = ({ data, onNext, onBack }) => {
//   // Mock calculations
//   const baseFare = data.price || 0;
//   const serviceFee = 25; // Fixed fee example
//   const total = baseFare + serviceFee;

//   return (
//     <div className="step-content">
//       <h2>3. Review Your Booking</h2>
      
//       <div className="summary-box">
//         <div className="summary-item">
//           <strong>Pickup:</strong> <span>{data.pickup}</span>
//         </div>
//         <div className="summary-item">
//           <strong>Drop:</strong> <span>{data.drop}</span>
//         </div>
//         <div className="summary-item">
//           <strong>Vehicle:</strong> <span className="capitalize">{data.vehicle}</span>
//         </div>
//       </div>

//       <div className="pricing-breakdown">
//         <h3>Fare Breakdown</h3>
//         <div className="price-row">
//           <span>Base Fare:</span>
//           <span>₹{baseFare}</span>
//         </div>
//         <div className="price-row">
//           <span>Service Fee:</span>
//           <span>₹{serviceFee}</span>
//         </div>
//         <hr />
//         <div className="price-row total">
//           <span><strong>Total Amount:</strong></span>
//           <span><strong>₹{total}</strong></span>
//         </div>
//       </div>

//       <div className="button-group">
//         {/* Ability to edit previous steps */}
//         <button className="back-btn" onClick={onBack}>Edit Details</button>
//         <button className="next-btn" onClick={onNext}>Confirm & Pay</button>
//       </div>
//     </div>
//   );
// };

// export default Summary;

import React from 'react';

const Summary = ({ data, onNext, onBack }) => {
  // Mock calculation: Base price + Service Fee
  const serviceFee = 25;
  const totalAmount = (data.price || 0) + serviceFee;

  return (
    <div className="step-content">
      <p className="step-indicator">STEP 3 OF 4: SUMMARY</p>
      <h2>3. Pricing & Order Summary</h2>
      
     
        <div className="summary-card">
  <p><strong>Pickup:</strong> {data.pickup}</p>
  <p><strong>Drop:</strong> {data.drop}</p>
  <p><strong>Vehicle:</strong> <span className="capitalize">{data.vehicle}</span></p>
  
  {data.notes && (
    <p><strong>Instructions:</strong> {data.notes}</p>
  )}
</div>


      <div className="price-breakdown">
        <h3>Fare Breakdown</h3>
        <div className="price-row">
          <span>Base Fare:</span>
          <span>₹{data.price}</span>
        </div>
        <div className="price-row">
          <span>Service Fee:</span>
          <span>₹{serviceFee}</span>
        </div>
        <hr />
        <div className="price-row total">
          <span><strong>Total:</strong></span>
          <span><strong>₹{totalAmount}</strong></span>
        </div>
      </div>

      <div className="button-group">
        {/* Requirement: Ability to edit previous steps */}
        <button className="back-btn" onClick={onBack}>Edit Details</button>
        <button className="next-btn" onClick={onNext}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Summary;