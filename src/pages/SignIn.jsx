import React,{useState} from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link,useNavigate } from 'react-router-dom'
import {UserAuth, signIn } from "../context/AuthContext"

function SignIn() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const navigate=useNavigate()
  const {signIn}=UserAuth()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    setError('')
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div>
<div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
  <h1 className='font-2xl font-bold text-center'>Sign In</h1>
  <form onSubmit={handleSubmit}>
    <div className='my-4'><label>Email</label>
    <div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
      <input type='email' onChange={(e)=>setEmail(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none' />
      <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
    </div>
    </div>
    <div className='my-4'>
<label>Password</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
  <input onChange={(e)=>setPassword(e.target.value)} type='password' className='w-full p-2 bg-primary border border-input rounded-2xl outline-none'/>
  <AiFillLock className='absolute right-2 top-3 text-gray-400'/>
</div>
    </div>
<button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl' >Sign In</button>

  </form>
  <p className='my-4 text-center'>Don't have an account ? <Link to="/signup" className='text-accent'>Sign Up</Link></p>
  </div>   
    </div>
  )
}
export default SignIn