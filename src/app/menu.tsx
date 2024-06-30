"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logoEco.png';
import mobilelogo from '../../public/logomobile.png'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-screen h-screen overflow-hidden text-[15px] bg-hero-pattern bg-cover bg-no-repeat bg-top  bg-yellow ">
            <div className='bg-[#FFF]  justify-center py-2 hidden lg:flex'>
                <span className=' text-[#0d121e]'>Creciendo en conjunto 🌿</span>
            </div>
       

            
            <div className='w-screen   lg:px-[0px] flex justify-between  text-white'>
                <div className='flex space-x-1 items-center lg:px-[0px]'>
                
                <Image className='lg:w-[500px] lg:flex md:hidden sm:hidden hidden ' src = {logo} alt='logo' width={500}/>
                <Image className='lg:hidden relative top-0 ' src = {logo} alt='logo-mobile' width={200}/>
 
                {/* ☘️🍃🍃🍀🍁 */}
                </div>
                
                <ul className='hidden md:flex items-center space-x-10 lg:px-[30px] font-bold text-[15px] lg:py-0 text-[#fff]'>
                    <li className='cursor-pointer'> <a href='#quienes'> Quienes somos</a></li>
                    <li className='cursor-pointer'>Servicios</li>
                    <li className='cursor-pointer'> Material pedagógico</li>
                    <li className='cursor-pointer border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#FFBB22] px-[6px] py-[6px] rounded-[5px] text-[#FFBB22]'>Contáctanos</li>
                  
                </ul>

                
                <div className='space-y-1 group md:hidden px-5'>
                    <button onClick={handleClick} className='space-y-1 py-4'>
                        <div className='w-6 h-1 bg-[#fff]'></div>
                        <div className='w-6 h-1 bg-[#fff]'></div>
                        <div className='w-6 h-1 bg-[#fff]'></div>
                    </button>

                    
                    {isOpen && (
                        <ul className='bg-[#08B0DB] opacity-75 w-screen pb-10 absolute right-0 top-0 duration-150 flex flex-col space-y-3 text-[#FFF]' >
                            <button onClick={handleClick} className='px-10 py-8 relative ml-auto'>
                                <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
                                <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
                            </button>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020] '>
                                Quienes somos
                            </li>
                            <li className='flex justify-center w-full py-4 hover:bg-[#202020] '>
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
        
        </div>
    );
}
