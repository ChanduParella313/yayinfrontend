import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Users = () => {

    const [userData,setUserData]=useState(null);

    const handleEvent=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>setUserData(data))
        .catch(error=>console.log(error));
    }

  return (
    <div>
        <button onClick={handleEvent}>Click For Users</button>

            {userData.map((item,index)=>(
                <li key={index}>
                    <NavLink to={item.path} className={navClass=>navClass.isActive?"active__link":""}>{item.display}</NavLink>
                </li>
            ))?(
                <div>
                    <p>User Id: {userData.id}</p>
                    <p>Name: {userData.name}</p>
                    <p>Email Id: {userData.email}</p>
                </div>):(
                    <p>Loading user Data</p>
            )}
        
    </div>
  )
}

export default Users