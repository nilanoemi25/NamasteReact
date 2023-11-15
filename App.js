
import React from "react"; 
import ReactDOM from "react-dom/client";

// React Element => Oject => when rendered to DOM, it becomes HTML 

// JSX was created to help the developers, It is a JS syntacs that makes it easier to create REACT elements
// JSX is not REACT as such; JSX is not HTML. 
// JSX (Transpiled before it reaches the JS engine) - by PARCEL who gives it to a package called Babel

const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 😎
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);


