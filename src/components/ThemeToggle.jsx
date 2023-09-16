import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
const { theme, setTheme } = useContext(ThemeContext);

return (
<div className='p-2'>
{theme === 'dark' ? (
<div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
<HiSun className='text-primary text-2xl mr-2' /> Light Mode
</div>
) : (
<div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
<HiMoon className='text-primary text-2xl mr-2' /> Dark Mode
</div>
)}
</div>
  );
};

export default ThemeToggle;

/*import React,{useContext} from 'react'
import {HiSun,HiMoon} from 'react-icons/hi'


function ThemeToggle() {

  return (
<div>
{theme==='dark' ?(
<div onClick={()=>setTheme(theme==='dark'? 'light': 'dark')}>
<HiSun/> Light mode
    </div>
):(
<div onClick={()=>setTheme(theme==='dark'? 'light': 'dark')}>
<HiMoon/>dark mode
    </div>
)}
</div>
  )
}
export default ThemeToggle
*/
