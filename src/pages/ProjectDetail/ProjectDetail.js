import React from 'react';
import { useParams } from 'react-router-dom';
// import { useLoaderData, useLocation } from 'react-router-dom';
import { projectLists } from '../../helpers/ProjectLists';
// import {projectsData} from './../../../../my-portfolio/public/projects.json'
import { FaHandPointRight } from "react-icons/fa"; //ImCheckmark
import { ImCheckmark } from "react-icons/im";

const ProjectDetail = () => {
    // const { state } = useLocation();
    // console.log(state)

    const { id } = useParams();
    const project = projectLists[id]

    // const { pathname } = useLocation()
    // console.log(pathname);


    return (
        <div className='w-full min-h-[848px] border-2 border-gray-900 bg-gradient-to-l from-slate-700 to-gray-900'>
            <div className='p-24  mt-24'>

                <div className='grid grid-cols-8 gap-7 items-center'>
                    <div className='col-span-8 lg:col-span-3 '>
                        <img src={project.img2} className=" md:w-[1020px] lg:w-[720px]" alt="" />
                    </div>
                    
                    <div className='col-span-8 lg:col-span-5 '>
                        <h1 className='text-5xl text-slate-100 font-semibold my-4'>{project.name}</h1>
                        <h3 className='my-6 text-xl text-slate-300 font-medium'>{project.des}</h3>
                        <h4 className='text-xl text-slate-50 font-semibold'>Key Features:</h4>
                        <div className='text-yellow-400 mt-3 text-xl'>
                            {
                                project.key_features.map((key_feature, index) =>
                                    <h2 key={index} className='text-gray-100'><FaHandPointRight className='inline text-amber-400 mr-2' />{key_feature}</h2>
                                )
                            }
                            <h4 className='text-xl text-slate-50 mt-5 mb-2 font-semibold'>Technologies:</h4>
                            <div>
                                {
                                    project.tech.map((t, index) =>
                                        <h2 key={index} className='text-gray-100'><ImCheckmark className='inline text-green-400 mr-2' />{t}</h2>



                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        // <div className='flex items-center justify-center bg-gradient-to-l from-slate-700 to-gray-900 h-screen'>
        //     {/* <h3 className='text-2xl font-bold '>Project Details</h3> */}
        //     <div className='md:flex min-w-5xl justify-center  px-20 items-center my-64'>
        //         <div className='mt-20 md:mt-0'>
        //             <img src={project.img2} className=" md:w-[1020px] lg:w-[720px]" alt="" />

        //         </div>
        //         <div className='ml-16'>
        //             <h1 className='text-5xl text-slate-100 font-semibold my-4'>{project.name}</h1>
        //             <h3 className='my-6 text-xl text-slate-300 font-medium'>{project.des}</h3>

        //             <h4 className='text-xl text-slate-50'>Key Features:</h4>
        //             <p></p>
        //             <h4 className='my-5 text-xl text-slate-50'>Technology:</h4>

        //             <div className='flex flex-col md:flex-row max-h-fit'>
        //                 <a href={project.livelink} className='m-1 w-36 font-medium text-white  px-6 py-3 rounded-md bg-gradient-to-l from-cyan-500 to-blue-500 cursor-pointer mr-2' >Live Website</a>

        //                 <a href={project.sourcecode} className='w-40 font-medium text-white  px-6 py-3 rounded-md bg-gradient-to-l from-pink-700 to-red-400 cursor-pointer' >Source Code</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className='p-24'>
        //     <h1 className='text-3xl text-slate-900 font-bold'>{project.name}</h1>
        //     <img src={project.img1} alt="" />
        // </div>

    );
};

export default ProjectDetail;