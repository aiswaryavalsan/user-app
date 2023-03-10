
import './App.css';
import User from './components/user/User';
import UserList from './components/user/UserList';
import {useState} from 'react';

function App() {
const[data,setData]=useState([]);
const setUserData=(name,age,college)=>{
  setData(prevData => {
    const updatedData = [...prevData];
    updatedData.unshift({ name:name,age:age,college:college, id: Math.random().toString() });
    return updatedData;
  });
 console.log(data);
}
let content = (
  <p style={{ textAlign: 'center' }}>No user</p>
);

if (data.length > 0) {
  content = (
    <UserList items={data}/>
  );
}
  return (
    <div className="App">
     <section id="user_input">
     <User onAddUser={setUserData} />
     </section>
     <section id="display">
     {content}
     </section>
     
    </div>
  );
}

export default App;
