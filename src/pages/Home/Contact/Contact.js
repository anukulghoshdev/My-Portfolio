import React from 'react'
import { Form, Link } from 'react-router-dom'

function Contact() {
    return (
        <div name="contact" className='bg-[#15151f] w-full h-screen text-slate-100' id='contact'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8 text-center'>
                    <h3 className='text-[#242939] font-bold text-6xl md:text-9xl'>Contact</h3>
                    <h2 className='text-3xl md:text-5xl -mt-[60px] md:-mt-32 font-semibold text-white'>Contact Me</h2>
                </div>

                <div className='flex justify-center items-center pt-14'>
                    <Form className='flex flex-col w-full md:w-2/4'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            className='p-2 bg-transparent
                        border-2 rounded-md text-slate-50 focus:outline-none'
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            className='p-2 my-4 bg-transparent
                        border-2 rounded-md text-slate-50 focus:outline-none'
                        />

                        <textarea
                            name="message"
                            rows="10"
                            placeholder='Enter Your Message'
                            id="" cols="30"
                            className='p-2 bg-transparent
                        border-2 rounded-md text-slate-50 focus:outline-none'
                        ></textarea>

                        <div className='pt-9'>
                            <Link to="#" className='font-medium text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 cursor-pointer' downl>Submit</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact