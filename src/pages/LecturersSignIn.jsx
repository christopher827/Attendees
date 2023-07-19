import React, { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';

function LecturersSignIn() {
  const [subject, setSubject] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (password === 'password123') {
      const subjectLowerCase = subject.toLowerCase();
  
      if (subjectLowerCase.includes('ana 302')) {
        navigate('/ana302');
      } else if (subjectLowerCase.includes('ent 302')) {
        navigate('/ent302');
      } else if (subjectLowerCase.includes('gst 207')) {
        navigate('/Gst207');
      } else if (subjectLowerCase.includes('pol 201')) {
        navigate('/Pol201');
      }else if (subjectLowerCase.includes('phs 234')) {
        navigate('/Phs234');
      }else if (subjectLowerCase.includes('bch 202')) {
        navigate('/Bch202');
      }else if (subjectLowerCase.includes('pha 302')) {
        navigate('/Pha302');
      }else if (subjectLowerCase.includes('pth 304')) {
        navigate('/Pth304');
      }else {
        setError('Invalid subject');
      }
    } else {
alert("Invalid Password or Subject")
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
      </div>
    </div>
  );
}

export default LecturersSignIn;