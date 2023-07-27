import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF,FaGithub,FaTwitter, FaLinkedin } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary font-bold sm:flex-row flex-col flex justify-between items-center'>
  <div className='flex space-x-4'>
  <Link to=''><AiOutlineInstagram/></Link>
  <Link to='/'><FaLinkedin/></Link>
  <Link to="/">  <FaTwitter/></Link>
  <Link to="/"> <FaFacebookF/></Link>
  <Link to='/'><FaGithub/></Link>  
       
</div>
<p>Attendee Inc</p>
<div>
<ThemeToggle/>
</div>

</div>
  )
}

export default Footer
