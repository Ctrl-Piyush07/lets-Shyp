import React, { useState } from 'react';
import './App.css';

// Importing our custom step components
import Step1Address from './features/Step1_Address';
import Step2Vehicle from './features/Step2_Vehicle';
import Step3Summary from './features/Step3_Summary';
import Step4Checkout from './features/Step4_Checkout';
import Step5Confirmation from './features/Step5_Confirmation';

function App() {
  // 1. Step Tracker (Which screen are we on?)
  const [step, setStep] = useState(1);

  // 2. Main Data Store (The "Source of Truth")
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    notes: '',
    vehicle: null,
    price: 0,
    customer: { name: '', phone: '' }
  });

  // 3. Logic to update data and handle Edge Cases
  const updateData = (newData) => {
    setFormData((prev) => {
      const updated = { ...prev, ...newData };

      // EDGE CASE: If pickup or drop changes, reset vehicle and price
      // This forces the user to re-select after changing the route
      if (newData.pickup || newData.drop) {
        updated.vehicle = null;
        updated.price = 0;
      }
      return updated;
    });
  };

  // 4. Navigation Functions
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="App">
      <div className="container">
        {/* Progress Indicator */}
        {step < 5 && (
          <div className="progress-bar">
            Step {step} of 4: {['Addresses', 'Vehicle', 'Summary', 'Checkout'][step - 1]}
          </div>
        )}

        {/* Step-by-Step Rendering */}
        {step === 1 && (
          <Address 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
          />
        )}
        
        {step === 2 && (
          <Vehicle 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 3 && (
          <Summary 
            data={formData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 4 && (
          <Checkout 
            data={formData} 
            updateData={updateData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}

        {step === 5 && (
          <Confirmation />
        )}
      </div>
    </div>
  );
}

export default App;