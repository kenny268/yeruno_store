"use client"
import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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


  return (
    <div className="flex flex-col items-center p-24 md:p-28  w-full justify-center ">
      <form className='bg-slate-200 w-80  max-auto p-4 h-60 flex flex-col justify-evenly items-center rounded-sm shadow-md'>
        <h1 className='text-2xl font-medium text-center text'>Signin</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className='w-4/5 rounded-sm shadow-sm p-1'
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className='w-4/5 rounded-sm shadow-sm p-1 border-solid-black'
        />

        <button type="submit" className='p-1 bg-blue-600 shadow-lg text-xl rounded-lg w-1/2 items-center text-white'>Submit</button>      
    </form>
    </div>
  )
}

export default Login