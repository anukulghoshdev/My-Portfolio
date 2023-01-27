import React from 'react'
import react from '../../../assests/react.png'
import css from '../../../assests/css.png'
import github from '../../../assests/github.png'
import html from '../../../assests/html.png'
import tailwind from '../../../assests/tailwind.png'
import bootstrap from '../../../assests/bootstrap.png'
import node from '../../../assests/node.png'
import javascript from '../../../assests/javascript.png'
import firebase from '../../../assests/firebase.png'



function Experiences() {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'css',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'tailwind css',
            style: 'shadow-blue-400'
        },
        {
            id: 4,
            src: javascript,
            title: 'javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: react,
            title: 'react.js',
            style: 'shadow-blue-300'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: node,
            title: 'Node.Js',
            style: 'shadow-green-600'
        },
        {
            id: 8,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-orange-600'
        },
        {
            id: 9,
            src: github,
            title: 'Github',
            style: 'shadow-gray-200'
        },

    ]
    return (
        <div name="skills" className='bg-[#15151f] w-full text-white h-max-screen 'id='skills'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h3 className='text-[#242939] font-bold text-6xl md:text-9xl'>Skills</h3>
                    <h2 className='text-3xl md:text-5xl -mt-[60px] md:-mt-32 font-semibold text-white'>My Skills</h2>
                </div>
            </div>

            <div className='md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img className='w-20 mx-auto' src={src} alt="" />
                            <h4 className='mt-4'>{title}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiences