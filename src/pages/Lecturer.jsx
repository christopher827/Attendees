import React, { useState, useEffect } from "react";
import { AiFillLock } from 'react-icons/ai'
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {collection,addDoc} from 'firebase/firestore';
import { db } from "../firebase";

function Lecturer() {
  const [name, setName] = useState('');
  const [uniqueID, setUniqueID] = useState('');
  const [password, setPassword] = useState('');
  const [subject,setSubject]=useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleSubmit=async(e)=> {
    e.preventDefault();
    try {
      const lecturerRef = collection(db, 'lecturersInfo');
      await addDoc(lecturerRef, {
        name,
        uniqueID,
        password,
        subject,
      });
      navigate('/lecturersSignIn'); 
    }
    catch (error) {
      console.error('Error creating lecturer:', error);
    }
  }


  return (
    <>
      <div className='max-w-[400px] mx-auto h-screen px-4 py-20'>
        <h1 className='font-2xl font-bold text-center'>Sign Up</h1>
        <p className='text-center'>Welcome sir/ma! You're here to check today's attendance again? No Problems Just Sign In.</p>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Name</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='text' onChange={(e) => setName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
            </div>
          </div>

          <div className='my-4'>
            <label>Subject</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='text' onChange={(e) => setSubject(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
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

          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' onClick={handleSubmit}>Sign Up</button>
        </form>
        <p className='my-4 text-center'>Already have an account ? <Link to="/lecturersSignIn" className='text-accent'>Sign In</Link></p>

      </div>
    </>
  );
}
export default Lecturer;