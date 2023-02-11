import React from "react";
import './ErrorModule.css'
import Button from "./Button/Buttton";
import ReactDom from 'react-dom'
const Backdrop=(props)=>{
    return(
        <div className="abc" onClick={props.onConfirm}> </div>
    );
}
const ModalOverlay=(props)=>{
    return(
        <div className="display" >
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
    )
}

const ErrorModule=(props)=>{
    return(
    <React.Fragment>
    {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
    {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,document.getElementById('modaloverlay-root'))}
     </React.Fragment>

);
}
export default ErrorModule