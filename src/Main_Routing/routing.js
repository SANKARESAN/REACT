import { createBrowserRouter } from "react-router-dom";
import VirtualDOM from "../components/VirtualDOM";          //
import MyImagesComp from '../components/MyImagesComp';
import UserComp from "../components/UserComp";          //
import MyStateComp from "../components/MyStateComp";    //       

import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";

import CssComp from '../components/CssComp';
import EventComp from '../components/EventComp';

import PageNotFoundComp from '../layout/PageNotFoundComp'
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import FooterComp from "../layout/FooterComp";
import NavComp from "../layout/NavComp";
import EmpDetailsComp from "../Task/EmpDetailsComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";

const routing = createBrowserRouter([

    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    
    {path:"empdetail",element:<EmpDetailsComp></EmpDetailsComp>},

    {path:"mainDashboard",element:<MainDashboardComp/>, children:[
        //default routing

        {path:"favcolor", element:<MyFavColorComp newColor="Green"></MyFavColorComp>},
        {path:"formval", element:<FormValComp></FormValComp>},

        {path:"",element:<MyStateComp></MyStateComp>},
        {path:"mystate",element:<MyStateComp></MyStateComp>},

        //naming routing

        {path:"virtualdom",element:<VirtualDOM></VirtualDOM>},

        //parameterized routing

        {path:"images/id",element:<MyImagesComp></MyImagesComp>},
        {path:"event",element:<EventComp />},
        {path:"mycss",element:<CssComp />},

        //child routing

        {path:"Hooks",element:<ReactHooksComp/>,children:[
            {path:"usestate",element:<UseStateHooksComp/>},
            {path:"useeffect",element:<UseEffectHooksComp/>},
        ]},
   

    ]},

    
    //wild-card routing

    {path:"*",element:<PageNotFoundComp />}
]);

export default routing;







