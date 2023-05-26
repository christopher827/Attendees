import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF,FaGithub,FaTwitter,FaTiktok, FaLinkedin } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='rounded-div  mt-8 pt-8 text-primary font-bold sm:flex-row flex-col  flex justify-between items-center'>
      <div className='flex space-x-4'>
  <a href='https://www.instagram.com/programmatic_chris/'><AiOutlineInstagram/></a>
    
    <a href='https://www.linkedin.com/in/christopher-oche-1b3315260/'><FaLinkedin/></a>
   <a href="https://twitter.com/Chris57948648"> <FaTwitter/></a>
    <FaFacebookF/>
    <a href='https://github.com/christopher827'><FaGithub/></a>  
       
      </div>
<p>Programmed by Christopher Oche</p>
<div>
<ThemeToggle/>
</div>

    </div>
  )
}

export default Footer
