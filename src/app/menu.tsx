"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logoEco.png';
import mobilelogo from '../../public/logomobile.png'

import bglogos from '../../public/bglogo.png'
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-screen h-screen overflow-hidden text-[15px] bg-hero-pattern bg-cover bg-no-repeat bg-top">
            <div className='bg-white flex justify-center py-2'>
                <span className=' text-[#0d121e]'>Creciendo en conjunto 🌿</span>
            </div>
       

            
            <div className='w-screen py-6 lg:py-0  lg:px-[0px] flex justify-between  text-white bg-[#0d121e]'>
                <div className='flex space-x-1 items-center lg:px-[0px]'>
                
                <Image className='lg:w-[500px] lg:flex md:hidden sm:hidden hidden' src = {logo} alt='logo' width={500}/>
                <Image className='lg:hidden' src = {mobilelogo} alt='logo-mobile' width={200}/>

                {/* ☘️🍃🍃🍀🍁 */}
                </div>
                
                <ul className='hidden md:flex items-center space-x-10 lg:px-[30px] font-bold text-[20px]'>
                    <li className='cursor-pointer'> Quienes somos</li>
                    <li className='cursor-pointer'>Servicios</li>
                    <li className='cursor-pointer'> Material pedagógico</li>
                    <li className='cursor-pointer'>Contáctanos</li>
                  
                </ul>

                
                <div className='space-y-1 group md:hidden px-5'>
                    <button onClick={handleClick} className='space-y-1'>
                        <div className='w-6 h-1 bg-white'></div>
                        <div className='w-6 h-1 bg-white'></div>
                        <div className='w-6 h-1 bg-white'></div>
                    </button>

                    
                    {isOpen && (
                        <ul className='bg-[#08B0DB] opacity-75 w-screen pb-10 absolute right-0 top-16 duration-150 flex flex-col space-y-3'>
                            <button onClick={handleClick} className='px-10 py-8 relative ml-auto'>
                                <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
                                <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
                            </button>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                                Quienes somos
                            </li>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                                Servicios
                            </li>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                                Contátacnos 
                            </li>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
                                Material pedagógico
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            {/* <Image
      src={bgBanner}
      alt="Picture of the author"
      
    /> */}
        </div>
    );
}
