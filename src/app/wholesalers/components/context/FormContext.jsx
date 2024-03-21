"use client"
// contexts/FormContext.js
import { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState(() => {
      if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {
          businessName: '',
          businessEmail: '',
          storeType: '',
          phoneNumber: '',
          email: '',
          locationAddress: ''
        };
      } else {
        return {
          businessName: '',
          businessEmail: '',
          storeType: '',
          phoneNumber: '',
          email: '',
          locationAddress: ''
        };
      }
    });
    
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
