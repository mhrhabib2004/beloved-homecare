import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Home/Home';
import Findus from './Component/FindUs/Findus';
import PrivateCare from './Component/NavigationTab/PrivateCare';
import Recruitment from './Component/Recruitment/Recruitment';
import BelovedHomecareBranches from './Component/BelovedHomecareBranches/BelovedHomecareBranches';
import Aboutus from './Component/AboutUs/Aboutus';
import About from './Component/AboutUs/About';
import Feedback from './Component/Feedback/Feedback';
import WhatWeDo from './Component/AboutUs/WhatWeDo';
import PayingForHomeCare from './Component/AboutUs/PayingForHomeCare';
import CareMattersBlog from './Component/AboutUs/CareMattersBlog';
import UsefulInformation from './Component/AboutUs/UsefulInformation';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/findus",
        element:<Findus/>
      },
      {
        path:"/privatecare",
        element:<PrivateCare/>
      },
      {
        path:"/recruitment",
        element:<Recruitment/>
      },
      {
        path:"/branches",
        element:<BelovedHomecareBranches/>
      },
      {
        path:"/aboutus",
        element:<Aboutus/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/feedback",
        element:<Feedback/>
      },
      {
        path:"/whatwedo",
        element:<WhatWeDo/>
      },
      {
        path:"/PayingforHomeCare",
        element:<PayingForHomeCare />
      },
      {
        path:"/CareMattersBlog",
        element:<CareMattersBlog />
      },
      {
        path:"/UsefulInformation",
        element:<UsefulInformation />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
