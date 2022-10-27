import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CheckOut from "../../Pages/Courses/CheckOut/CheckOut";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses/Courses";
import LeftSideNav from "../../Pages/Courses/LeftSideNav/LeftSideNav";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Footer from "../../Pages/Shared/Footer/Footer";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('https://teaching-hub-server-mamun102076.vercel.app/categories')
                }
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => {
                    return fetch('https://teaching-hub-server-mamun102076.vercel.app/categories')
                }
            },
            {
                path: '/leftsidenav',
                element: <LeftSideNav></LeftSideNav>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/coursedetails/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => {
                    return fetch(`https://teaching-hub-server-mamun102076.vercel.app/categories/${params.id}`)
                }
            },
            {
                path: '/checkout',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
            },
            {
                path: '*',
                element: <h1 className="my-5">No data found</h1>
            }
        ]
    }
])