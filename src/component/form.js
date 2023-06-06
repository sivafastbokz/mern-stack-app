import React, { useState,useEffect } from "react";
import '/home/siva/Desktop/task1/myapp/src/component/form.css'
import axios from "axios";

function Form(){
    const[userName,setUserName]=useState("");
    const[Users,setAllUsers]=useState([]);

    const addnew =()=>{
        axios.post("http://localhost:5000/adduser",{
            userName:userName
        });
    };
    const userlist = () => {
         axios.get("http://localhost:5000/getuserlist").then((res) => {
           
         setAllUsers(res.data)}
         );
      };
      useEffect(() => {
        userlist();
      }, []);
    return(
        <React.Fragment>
            <div className="form">
             CREATE CONTACTS: <input type='text'onChange={(event)=>{
                setUserName(event.target.value)
             }}/>
             <button onClick={addnew}>ADD NEW</button>
             </div>
             <table>
                <tr>
                 <th>NAME</th>
                <th>ACTION</th>
                </tr>
                {Users.map(user => (
                <tr key={user.id}>
                <td>{user.userName}</td>
                <td><button className="button1">DELETE</button></td>
              </tr>
            ))}
            </table>
        </React.Fragment>
    )
}
export default Form;