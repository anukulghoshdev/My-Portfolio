import React from 'react';
// import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-[#0F172A] h-24 md:h-20 border-t-2 border-[#404555] '>
            <div className='md:flex items-center justify-around my-3'>
                <div className='flex justify-center'>
                    <a target="_blank" href="https://www.facebook.com/anukulghosh16/" className=' p-2 border-2 border-[#404555] rounded text-[#BFBECB] bg-[#0B1224] text-xl lg:text-2xl'><FaFacebookF></FaFacebookF></a>

                    <a target="_blank" href="https://www.linkedin.com/in/anukul-ghosh/" className='p-2 mx-2  border-2 border-[#404555] rounded text-[#BFBECB] bg-[#0B1224] text-xl lg:text-2xl'><FaLinkedin></FaLinkedin></a>

                    <a target="_blank" href="https://github.com/anukulghoshdev" className=' p-2 border-2 border-[#404555] rounded text-[#BFBECB] bg-[#0B1224] text-xl lg:text-2xl'><FaGithub></FaGithub></a>
                </div>
                <div className=' text-center mt-3'>
                    <h3 className='text-sm lg:text-lg text-[#b2b6c2] font-medium'>© 2022, All right reserved <span className='font-bold'>Anukul Ghosh</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;