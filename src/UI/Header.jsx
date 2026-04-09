import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
const Header = () => {
  const [isActive,setisActive] = useState("home")
  return (
    <div className='flex items-center justify-around p-5 border'>
      <div>
        HALO
      </div>
   <div className='flex gap-5 '>
      <NavLink to={'/'} className={`${isActive === "home" ? 'text-[#A4A4DB]': '' } `} onClick={()=>setisActive("home")}>Home</NavLink>
  <NavLink to={'about/'} className={`${isActive === "about" ? 'text-[#A4A4DB]': '' } `} onClick={()=>setisActive("about")}>About</NavLink>
  <NavLink to={'/portfolio'} className={`${isActive === "portfolio" ? 'text-[#A4A4DB]': '' } `} onClick={()=>setisActive("portfolio")}>Portfolio</NavLink>
  <NavLink to={'/projects'} className={`${isActive === "projects" ? 'text-[#A4A4DB]': '' } `} onClick={()=>setisActive("projects")}>Projects</NavLink>
  <NavLink to={'/contact'} className={`${isActive === "contact" ? 'text-[#A4A4DB]': '' } `} onClick={()=>setisActive("contact")}>Contact</NavLink>
   </div>
   <div className='icons flex items-center  gap-4'>
    <NavLink className='relative w-[45px] h-[45px] border rounded-[5px]'>
       <div className='absolute w-[45px] h-[37px] border border-b-2  rounded-[5px]'></div>
       <div className='flex justify-center items-center z-[999] pt-2.5'>  <FaGithub /></div>
    </NavLink>
     <NavLink className='relative w-[45px] h-[45px] border rounded-[5px]'>
       <div className='absolute w-[45px] h-[37px] border border-b-2  rounded-[5px]'></div>
       <div className='flex justify-center items-center z-[999] pt-2.5'><CiLinkedin /></div>
    </NavLink>
    <NavLink className='relative w-[45px] h-[45px] border rounded-[5px]'>
       <div className='absolute w-[45px] h-[37px] border border-b-2  rounded-[5px]'></div>
       <div className='flex justify-center items-center z-[999] pt-2.5'>  <FaInstagram />
</div>
    </NavLink>
 
   </div>
    </div>
  )
}

export default Header
