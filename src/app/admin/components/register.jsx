"use client"
import React, { useState } from 'react'

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit form data to API
      const response = await fetch('https://example.com/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Handle successful response
      console.log('Form data submitted successfully');
    } catch (error) {
      // Handle error
      console.error('Error submitting form data:', error.message);
    }
  };

  const divForm = "flex flex-col items-center p-24 md:p-28  w-full justify-center "
  const form = 'bg-slate-200 w-80  max-auto p-4 h-60 flex flex-col justify-evenly items-center rounded-sm shadow-md'
  const h1 = 'text-2xl font-medium text-center text'
  const input = 'w-4/5 rounded-sm shadow-sm p-1'
  const inputPassword = 'w-4/5 rounded-sm shadow-sm p-1 border-solid-black'
  const btnSubmit = 'p-1 bg-blue-600 shadow-lg text-xl rounded-lg w-1/2 items-center text-white'

  return (
    <div className={`${divForm}`}>
      <form className={`${form}`}>
        <h1 className={`${h1}`}>Sign Up</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={`${input}`}
          required
        />
         <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`${input}`}
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className={`${inputPassword}`}
          required
        />

        <button type="submit" className={`${btnSubmit}`}>Submit</button>      
    </form>
    </div>
  )
}
export default Register