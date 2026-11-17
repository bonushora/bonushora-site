import {createBrowserRouter,Navigate} from 'react-router-dom';
import ResearchPortal from './pages/ResearchPortal';
export const router=createBrowserRouter([
 {path:'/',element:<Navigate to="/pt" replace/>},
 {path:'/pt',element:<ResearchPortal/>},{path:'/pt/:page',element:<ResearchPortal/>},
 {path:'/en',element:<ResearchPortal/>},{path:'/en/:page',element:<ResearchPortal/>},
 {path:'*',element:<Navigate to="/pt" replace/>}
]);
