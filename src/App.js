import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


// React Element => Oject => when rendered to DOM, it becomes HTML 

// JSX was created to help the developers, It is a JS syntacs that makes it easier to create REACT elements
// JSX is not REACT as such; JSX is not HTML. 
// JSX (Transpiled before it reaches the JS engine) - by PARCEL who gives it to a package called Babel

//Outlet will be filled with the children according to the path, it is kind of like a tunnel. 
const AppLayout = () => {
    return ( <div className="app">
     <Header /> 
     <Outlet/> 
    </div> 
    );
};

// Configuration 
// : makes path dynamic 
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>, 
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu/>,
            },
        ],
        errorElement :<Error/>,
    },
   
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));


// rendering app directly:  root.render(<AppLayout/> );

root.render(<RouterProvider router ={appRouter}/>); 