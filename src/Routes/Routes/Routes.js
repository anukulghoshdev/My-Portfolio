import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
// import AboutMe from "../../pages/Home/AboutMe/AboutMe";
import Home from "../../pages/Home/Home/Home";
import ProjectDetail from "../../pages/ProjectDetail/ProjectDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            
            {
                path: '/ProjectDetail/:id',
                element: <ProjectDetail></ProjectDetail>
            }
            
        ]
    }
])
export default router;