import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

function SignUp() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [matricNumber, setMatricNumber] = useState('');
const [fullName, setFullName] = useState('');
  const navigate = useNavigate();
  const { signUp } = UserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signUp(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }


  };

  return (
    <div>
      <div className='max-w-[400px] mx-auto h-screen px-4 py-20 '>
        <h1 className='font-2xl font-bold text-center'>Sign Up</h1>
        <p className='text-center'>Effortlessly track your attendance by logging in as a student. Stay on top of your progress with ease.</p>

        {error ? <p className='bg-red-300 p-3 my-2'>({error})</p> : null}
      <form onSubmit={handleSignUp}>
          <div className='my-4'>
            <label>Full Name</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
            </div>
          </div>

          <div className='my-4'>
            <label>Matric Number</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type="text" onChange={(e) => setMatricNumber(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
            </div>
          </div>

          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='email' onChange={(e) => setEmail(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
              <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>

          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
              <input type='password' onChange={(e) => setPassword(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
              <AiFillLock className='absolute right-2 top-3 text-gray-400' />
            </div>
          </div>
          
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'  >Sign Up</button>
        </form>

        <p className='my-4 text-center'>Already have an account ? <Link to="/signin" className='text-accent'>Sign In</Link></p>
      </div>
    </div>
);
}
export default SignUp;
