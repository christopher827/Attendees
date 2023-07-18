import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { collection, getDocs, where } from 'firebase/firestore';

function LecturersSignIn() {
  const [subject, setSubject] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const lecturersRef = collection(db, 'lecturersInfo');
      const q = where('password', '==', password);
      const querySnapshot = await getDocs(collection(db, 'lecturersInfo'), q);

      if (querySnapshot.empty) {
        setError('Incorrect password');
      } else {
        let matchingSubject = false;
        const normalizedSubject = subject.toLowerCase().trim();
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const docSubject = docData.subject.toLowerCase().trim();
          if (docSubject === normalizedSubject) {
            matchingSubject = true;
          }
        });

        if (matchingSubject) {
          // Redirect based on subject
          if (normalizedSubject === 'mathematics') {
            navigate('/math');
          } else if (normalizedSubject === 'english') {
            navigate('/english');
          } else {
            alert("Invalid Subject or password")
            setError('Invalid subject');
          }
        } else {
          setError('Invalid subject');
        }
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred');
    }
  };

  return (
    <div>
      <div className='max-w-[400px] mx-auto h-screen px-4 py-20'>
        <h1 className='font-2xl font-bold text-center'>Sign In</h1>
        <p className='text-center'>
          Welcome back! We've missed your presence dearly and are thrilled to have you again.
        </p>
        <form onSubmit={handleSignIn}>
          <div className='my-4'>
            <label>Subject</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input
                type='text'
                onChange={(e) => setSubject(e.target.value)}
                className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
              />
            </div>
          </div>

          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'
              />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' type='submit'>
            Sign In
          </button>
        </form>
        <p className='my-4 text-center'>
          Don't have an account ? <Link to='/lecturer' className='text-accent'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LecturersSignIn;
