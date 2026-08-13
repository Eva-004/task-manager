import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
         <div id='contact' className='bg-[#101727] pt-30 pb-10'>
         <div className='w-10/12 mx-auto'>
            <div className='flex flex-col justify-center md:flex-row gap-10 md:justify-evenly text-white'>
                <div className=''>
                    <Image src={'/images/logo.png'} alt="footer logo" width={50} height={50} className='object-cover'/>
                    <h2 className='font-bold text-3xl mt-2'>Task Manager</h2>
                    
                </div>
                <div className='space-y-2 '>
                    <p className='font-bold text-2xl'>Quick Links</p>
                     <ul className='text-[#101727]  '>
                     <li className='text-white text-lg'><Link href={'/'}>Home</Link></li>
                     <li className='text-white text-lg'><Link href={'/add-idea'}>Add Task</Link></li>
                     <li className='text-white text-lg'><Link href={'/ideas'}>All Task</Link></li>
                     
                     </ul>
                </div>
                
                
                <div className='space-y-2'>
                    <h2 className='font-bold text-2xl'>Social Links</h2>
                    <ul className='text-[#101727] flex gap-2'>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><AiFillInstagram className='w-5 h-5'/></Link></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><FaFacebookSquare/></Link></li>
                        <li className='p-2.5 rounded-full bg-base-100 w-10 h-10 flex justify-center items-center'><Link href={'#'}><FaXTwitter /></Link></li>
                    </ul>
                </div>
            </div>
            <div className='text-white mt-20'>
                <hr />
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-7.5'>
                <div className='text-white '>
                    © 2026 Task Manager. All rights reserved.
                </div>
                <div className='text-white flex justify-between gap-1 md:gap-4'>
                    <p>Privacy Policy </p> 
                    <p>Terms of Service</p>           
                    <p>Cookies</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;