import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
constructor (props) {
    super(props);


}

componentDidMount(){
    


}

    render() {
     

        return (
            <div>
            <h1>About Class Component </h1>
            <h2> This is Namaste React Web Series</h2>

            <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"}/>
        </div>
        ); 
    }
        
    
}

export default About; 