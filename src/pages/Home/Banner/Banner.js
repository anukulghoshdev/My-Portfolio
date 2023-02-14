// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import img from '../../../assests/me.png'
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import SocialLinks from './SocialLinks';
import { motion } from "framer-motion"
import bg from '../../../assests/bg.jpg'
import './Banner.css';
{/* <motion.div className='' animate={{x:0, y:0, scale:1.1, rotate:0}} transition={{duration:1, type:"tween", damping: 75}}></motion.div> */ }

const Banner = () => {

    return (
        <div name='home' className='sdfsd'>

            <div className='sdfsd circle-in-bottom-left h-screen flex flex-col justify-center items-center bg-[#141419]'>



                {/* <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl"></div>

                <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl"></div>

                <div class="absolute -bottom-8 left-20 top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl"></div> */}


                {/* <div className=' block  bg-gradient-to-tr from-green-500 to-sky-400 p-2 rounded-full '>
                    <div className='bg-slate-300 rounded-full relative'>
                        <img className="object-cover w-28 h-28 md:w-44 md:h-44 lg:w-64 lg:h-64 rounded-full  " src={img} alt="Avatar" />

                    </div>
                </div> */}

                <div className='relative '>
                    <div class="absolute -top-14 -left-10 w-72 h-72   lg:w-96 lg:h-96 "></div>
                    <div className='block  bg-gradient-to-tr from-green-500 to-sky-400 p-2 rounded-full '>
                        <div className='bg-slate-300 rounded-full relative glow-item'>
                            <img className="object-cover w-28 h-28 md:w-44 md:h-44 lg:w-64 lg:h-64 rounded-full " src={img} alt="Avatar" />
                        </div>
                    </div>

                </div>



                <div className='mt-8 relative'>
                    <h2 className='text-3xl md:text-5xl font-bold flex flex-wrap  justify-center items-center'>
                        <span className='text-slate-200 text-center mr-3'>Hi, I am</span>
                        <span className='text-3xl md:text-5xl text-[#72E2AE] text-center '>
                            <Typewriter options={{
                                autoStart: true, loop: true, delay: 90,
                                strings: [
                                    "Anukul Ghosh",
                                    "Full Stack Web Developer",
                                    "Mern Stack Developer",
                                    "React.JS Developer"
                                ]
                            }} />
                        </span>
                    </h2>
                    <p className='text-lg md:text-xl text-slate-200 w-4/5 text-center mx-auto mt-5 mb-8'>
                        I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
                    </p>
                </div>

                <div>
                    <a href='/resume.pdf' className=' font-medium text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 cursor-pointer' >Download Resume</a>
                </div>

            </div>



        </div>
    );
};

export default Banner;