import React, { useState, useEffect } from "react";
import { AiFillLock } from 'react-icons/ai'
import {useNavigate } from "react-router-dom";

function Lecturer() {
  const [name, setName] = useState('');
  const [uniqueID, setUniqueID] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!isLoggedIn);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== 'John Doe' || uniqueID !== 'admin123' || password !== 'password123') {
      alert('Incorrect name, password, or uniqueID');
      return;
    }

    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate("/lecturersattendance");
  }

  function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  if (isLoggedIn) {
    return (
      <>
        <div className='max-w-[400px] mx-auto h-screen px-4 py-20'>
          <h1 className='font-2xl font-bold text-center'>Welcome back!</h1>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' onClick={handleLogout}>Logout</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='max-w-[400px] mx-auto h-screen px-4 py-20'>
        <h1 className='font-2xl font-bold text-center'>Sign In</h1>
        <p className='text-center'>Welcome sir/ma! You're here to check today's attendance again? No Problems Just Sign In.</p>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Name</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='text' onChange={(e) => setName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
            </div>
          </div>

          <div className='my-4'>
            <label>Unique ID</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='text' onChange={(e) => setUniqueID(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
            </div>
          </div>

          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>

          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
    </>
  );
}
export default Lecturer;