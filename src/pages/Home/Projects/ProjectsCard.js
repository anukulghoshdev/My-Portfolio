import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsCard.css'

const ProjectsCard = ({ project, id }) => {
    const navigate = useNavigate();
    return (
        <div className="image-wrap w-full h-min-[550px] overflow-hidden shadow-2xl border-2 border-slate-600 rounded-xl hover:scale-110 duration-200 cursor-pointer" onClick={()=>navigate('/ProjectDetail/'+id)}>
            <img className="w-full h-72  duration-200" src={project.img1} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-slate-400 text-base text-justify">
                    {project.des.slice(0, 100) + '...'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 ">
                {
                    project.tech.map(sigleTech =>
                        <span className=" inline-block bg-slate-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{sigleTech}</span>
                    )
                }

            </div>
        </div>
    );
};

export default ProjectsCard;