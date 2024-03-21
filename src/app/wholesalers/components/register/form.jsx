"use client"

// components/Form.js
import { useState} from 'react';
import { FormProvider } from '../context/FormContext';
import Business from './business';
import ContactDetails from './contactDetails';
import Summary from './summary';


const Form = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({
      businessName: '',
      businessEmail: '',
      storeType: '',
      phoneNumber: '',
      email: '',
      locationAddress: ''
    });
    localStorage.removeItem('formData');
    setStep(1); // Reset step to the first one
  };

  return (
    <FormProvider>
     <div className="w-full flex flex-col justify-center items-center mt-11">
        {step === 1 && <Business nextStep={nextStep} />}
        {step === 2 && <ContactDetails nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Summary prevStep={prevStep} handleSubmit={handleSubmit} />}
      </div>
    </FormProvider>
  );
};

export default Form;