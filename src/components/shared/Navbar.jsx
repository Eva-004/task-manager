
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const Navbar = () => {
  const links = <>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/'}>All Task</NavLink></li>
    <li><NavLink href={'/'}>Add Task</NavLink></li>
  </>
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               {links}
            </ul>
          </div>
          <Link href={'/'} className='flex gap-2  justify-center items-center'>
            <Image src={'/images/logo.png'} width={30} height={30} alt='logo' className='object-cover mt-2 ' />
            <h1 className='text-sm sm:text-xl md:text-4xl font-bold text-blue-700'>Task Manager</h1></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <input type="text" placeholder="Search task..." className="input   lg:w-auto" />
        </div>
      </div>
    </div>

  );
};

export default Navbar;