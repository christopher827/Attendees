import React from 'react'
import img1 from "../assets/Images/1.png"
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Home() {
const {user,logout}=UserAuth()
const navigate=useNavigate();
const handleSignOut=async()=>{
  try {
    await logout()
    navigate('/')
  } catch (e) {
    console.log(e.message)
  }
    }

  return (
<div className='flex flex-col items-center justify-around w-full px-24 lg:flex-row md:flex-col xl:flex-row max-h-[70%]'>  
<div className='text-center lg:text-left'>
<h1 className='text-[45px] lg:text-[72px] pt-20 font-bold mb-6 leading-[60px]'>Streamline Your <br/> Attendance Management</h1>
<p className='font-medium text-grey mb-5 max-w-[597px]'>Experience the convenience and efficiency of AttendanceTracker in streamlining your school's attendance management process. Start your journey towards accurate attendance records and improved student outcomes. Sign up for Attendance Tracker now!</p>
{
  user?.email?(
    <Link to="/signin"><button className='bg-blue-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl' onClick={handleSignOut}>Sign Out</button></Link>

  ):(
    <div>
<Link to="/signup"><button className='bg-blue-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</button></Link>
<Link to="/signin"><button className='bg-blue-600 text-white px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign In</button></Link>
</div>
  )
}
    </div>
    
    <div className=''>
    <img src={img1} alt='heroImage' className='w-full md:max-w-2xl' />
    </div>
    
    </div>
    
        )    }

export default Home
