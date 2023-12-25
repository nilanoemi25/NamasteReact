import {useRouteError} from "react-router-dom";


const err = () =>
{
    const error = useRouteError(); // will return an object 

    return (
        <div> 
            <h1> Oops!!! </h1>
            <h2> Something went wrong!!</h2>
            <h3> {error.status}: {error.statusText} </h3>
            
        </div>
    );
    
};

export default err; 