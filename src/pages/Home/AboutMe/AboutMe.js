import React from 'react';
import img2 from '../../../assests/298612394_438531391647474_9139687509263011185_n.jpg'

const AboutMe = () => {
    return (
        <div name="about" className='bg-[#17171d] h-screen overflow-hidden' id='about'>
            <div className='text-center'>
                <h3 className='text-[#242939] font-bold text-6xl md:text-9xl hidden md:block'>ABOUT</h3>
                <h2 className='text-3xl md:text-5xl -mt-[60px] md:-mt-32 font-semibold text-white'>ABOUT ME</h2>
            </div>

            <div className='md:flex mt-20 justify-center items-center  w-96 md:w-full mx-auto md:mx-0'>
                <div className=' p-2  rounded md:flex justify-center ' >
                    <img src={img2} className=" w-56 lg:w-72 border-solid border-2 border-sky-500 shadow-lg rounded" alt="" />
                </div>

                <div className=' md:flex flex-col justify-start items-start leading-8 ml-5 '>
                    <h2 className='mb-5 text-slate-200 font-semibold text-3xl'>Hi, <span className='text-3xl text-[#72E2AE]'>I am Anukul Ghosh</span></h2>
                    <h3 className='mb-4'><span className=' text-xl text-[#BFBECB] font-semibold'>Full Name</span><span className='text-xl text-[#BFBECB] font-semibold'>: Anukul Ghosh</span></h3>
                    <h3 className='mb-4'><span className='textxl text-[#BFBECB] font-semibold'>Email</span><span className='text-xl text-[#BFBECB] font-semibold'>: anukulghosh264@gmail.com</span></h3>
                    <h3 className='mb-4'><span className='text-xl text-[#BFBECB] font-semibold'>Age</span><span className='text-xl text-[#BFBECB] font-semibold'>: 23 years</span></h3>
                    <h3 className='mb-4'><span className='text-xl text-[#BFBECB] font-semibold'>Nationality</span><span className='text-xl text-[#BFBECB] font-semibold'>: Bangladeshi</span></h3>
                    <h3 className='mb-4'><span className='text-xl text-[#BFBECB] font-semibold'>Languages</span><span className='text-xl text-[#BFBECB] font-semibold'>: English, Bengali</span></h3>
                    <h3 className=''><span className='text-xl text-[#BFBECB] font-semibold'>Address</span><span className='text-xl text-[#BFBECB] font-semibold'>: 121 King Street, Narayanganj, Bangladesh</span></h3>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;