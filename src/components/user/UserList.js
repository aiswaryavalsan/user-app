import React from 'react';
import './UserList.css'
const UserList=(props)=>{
return(
    <ul className='user_list'>
   {props.items.map(item=>
    <li className='user'key={item.id}>{item.name}(   {item.age} years old)</li>
    )}
    </ul>
);
}
export default UserList;