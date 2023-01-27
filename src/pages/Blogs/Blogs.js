import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const navigate = useNavigate()
    const handleButton = () => {
        navigate('/');
    }
    return (
        <div className='bg-gradient-to-l from-slate-700 to-gray-900'>
            <div className='h-screen flex justify-center items-center'>
                <div>
                    <h2 className='text-5xl font-bold text-slate-200'>Comming Soon...</h2>
                    <button onClick={() => handleButton()} className="text-blue-500 font-bold text-center underline">back home</button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;