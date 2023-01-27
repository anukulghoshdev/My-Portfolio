import React from 'react';


// import { useNavigate } from 'react-router-dom';


import ProjectsCard from './ProjectsCard';
import { projectLists } from '../../../helpers/ProjectLists';



const Projects = () => {
    // const [projects, setProjects] = useState([])
    // const navigate = useNavigate()

    // const allProjects = [
    //     {
    //         id: 1,
    //         name: "Priver",
    //         type: "Service-App",
    //         src: priver,
    //         src2: priver2,
    //         des: "Priver is a online services website. It sells various kinds of services of an individual. User can take services from other service provider",
    //         livelink: "https://ass-server-85f69.web.app/",
    //         sourcecode:"https://github.com/anukulghoshdev/Priver-online-service-client"
    //     },
    //     {
    //         id: 2,
    //         name: "Musicly",
    //         type: "Ecommerce-App",
    //         src: musicly,
    //         src2: musicly2,
    //         des: "Musicly is an online ecommerce platform of resell products store of musical instruments. Buyer can sells various kinds of instruments, buy instruments from other seller",
    //         livelink:"https://musicly-e6f50.web.app/",
    //         sourcecode:"https://github.com/anukulghoshdev/musicly-client"
    //     },
    //     {
    //         id: 3,
    //         name: "edemy",
    //         type: "Educational-App",
    //         src: edemy,
    //         src2: edemy2,
    //         des: "edemy is a online educational platform. Students can enroll various courses in different categories courses",
    //         livelink: "https://e-demy-d30c2.web.app/",
    //         sourcecode: "https://github.com/anukulghoshdev/edemy-online-courses-client"
    //     },
    //     {
    //         id: 4,
    //         name: "Fitness Zone",
    //         type: "Fitness-App",
    //         src: fitness,
    //         src2: fitness2,
    //         des: "Fitness Zone is a Fitness tranning website. User can take a tranning or workout and set the timmer according their desire",
    //         livelink: "https://fitness-zone-anukulghoshdev-70104b.netlify.app/",
    //         sourcecode:""

    //     }
    // ]

    // const handleClick=(project)=>{
    //     navigate(`project/${project.id}`, {state: project})
    // }

    // useEffect(() => {
    //     fetch('projects.json')
    //         .then(res => res.json())
    //         .then(data => setProjects(data))
    // }, [])

    return (
        <div name="projects" className='bg-[#15151f] w-full text-white h-max-screen 'id='projects'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <h3 className='text-[#242939] font-bold text-6xl md:text-9xl'>Projects</h3>
                    <h2 className='text-3xl md:text-5xl -mt-[60px] md:-mt-32 font-semibold text-white'>My Projects</h2>
                </div>
            </div>


            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 py-8'>
                {
                    projectLists?.map((project ,indx) => (
                        <ProjectsCard key={indx} id={indx} project={project}></ProjectsCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Projects;