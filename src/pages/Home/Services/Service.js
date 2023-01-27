import React from 'react';
import { SiLeaflet } from "react-icons/si";
import { FaTabletAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
const Service = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center mt-24 ' >

            <div className='w-96 bg-[#18181e] h-60 border-2 border-gray-700 rounded-lg md:flex flex-col justify-center items-start pl-4'>
                <div className='w-14 h-14 rounded-full bg-[#203440] flex justify-center items-center'>
                    <SiLeaflet className='text-2xl text-[#72E2AE] '></SiLeaflet>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold text-gray-200'>Front End Development</h2>
                </div>
                <div className=''>
                    <p className='text-left text-base text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus est, obcaecati necessitatibus esse impedit quaerat cum.</p>
                </div>
            </div>


            <div className='w-96 bg-[#141419] h-60 border-2 border-gray-700 rounded-lg md:flex flex-col justify-center items-start pl-4 md:mx-6 my-2'>
                <div className='w-14 h-14 rounded-full bg-[#203440] flex justify-center items-center'>
                    <FaTabletAlt className='text-2xl text-[#72E2AE] '></FaTabletAlt>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold text-gray-200'>Responsive Design</h2>
                </div>
                <div className=''>
                    <p className='text-left text-base text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus est, obcaecati necessitatibus esse impedit quaerat cum.</p>
                </div>
            </div>


            <div className='w-96 bg-[#141419] h-60 border-2 border-gray-700 rounded-lg md:flex flex-col justify-center items-start pl-4 my-2'>
                <div className='w-14 h-14 rounded-full bg-[#203440] flex justify-center items-center'>
                    <FaDatabase className='text-2xl text-[#72E2AE] '></FaDatabase>
                </div>
                <div className='my-4'>
                    <h2 className='text-xl font-semibold text-gray-200'>Back End Development</h2>
                </div>
                <div className=''>
                    <p className='text-left text-base text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus est, obcaecati necessitatibus esse impedit quaerat cum.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;