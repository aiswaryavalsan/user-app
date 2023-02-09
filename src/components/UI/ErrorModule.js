import React from "react";
import './ErrorModule.css'
import Button from "./Button/Buttton";
const ErrorModule=(props)=>{
return(
    <div className="display">
    
    <header className="header ">
    <h2>{props.title}</h2>
    </header>
    <div className="content">
    <h2>{props.message}</h2>
    </div>
    <footer className="action">
    <Button onClick={props.onConfirm} >ok</Button>
    </footer>
   
    </div>

);
}
export default ErrorModule