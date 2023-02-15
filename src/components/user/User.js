import React,{useState,useRef} from 'react';
import ErrorModule from '../UI/ErrorModule';
import Button from '../UI/Button/Buttton';
const User=(props)=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const collegnameRef=useRef();
    console.log(collegnameRef);
    
    const[error,setError]=useState();
    const setNameHandler=(e)=>{
     setName(e.target.value);
     
    }
    const setAgeHandler=(e)=>{
      setAge(e.target.value);
    }
    const addUser=(e)=>{
        e.preventDefault();
        const college=collegnameRef.current.value;
        console.log(college);
       if(name.trim().length===0 ||age.trim().length===0){
       setError({
        title:'invalid input',
        message:'please check your name and age'
       });
       return;
       }
       if(age<0){
        setError({
            title:'invalid input',
            message:'please check your age (age<0)'
           });
       return;
       }
       console.log(error);
     props.onAddUser(name,age,college);
    }
    const errorHandler=()=>{
        setError(null);
    }
    return(
        <div>
        {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModule>}
        <form onSubmit={ addUser}>
        <label>UserName</label><br/>
        <input className='input' onChange={setNameHandler}></input><br/>
        <label>Age</label><br/>
        <input className='input' onChange={setAgeHandler}></input><br/>

        <label >College Name</label>
        <input className='input' ref={collegnameRef}></input><br/>

        <Button type="submit">AddUser</Button>
        </form>
        </div>
    )

}
export default User;