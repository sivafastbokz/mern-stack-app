import React, { useState,useEffect,  } from "react";
import '/home/siva/Desktop/task1/myapp/src/component/form.css'
import axios from "axios";
function Form(){
    const[userName,setUserName]=useState("");
    const[Users,setAllUsers]=useState([]);
    const[users,setUsers]=useState([]);

    const addnew = async()=>{
        window.alert('your name has been added')
       await axios.post("http://localhost:5000/adduser",{
            userName:userName
        });
        handlereload();
    };
    const userlist = () => {
         axios.get("http://localhost:5000/getuserlist").then((res) => {
         setAllUsers(res.data)}
         );
      };
      useEffect(() => {
        userlist();
      }, []);

      const deleteuser = (id) => {
        window.confirm('are you sure?')
        axios.delete(`http://localhost:5000/deleteuser/${id}`)
          .then(response => {
            setUsers(users.filter(user => user.id !== id));
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
          handlereload();
      };
      const updateuser = (id) =>{
        const newName = prompt('Enter the new name')
        axios.put(`http://localhost:5000/update/${id}`,{
          userName:newName
        })
       handlereload();
      }
   const handlereload =()=>{
         window.location.reload();
      }
  
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
                <th>ACTION</th>
                </tr>
                {Users.map(user => ( 
                <tr key={user.id}>
                <td>{user.userName}</td>
                <td><button className="button1" onClick={()=>{deleteuser(user._id)}}>DELETE</button></td>
                    <td><button className="button2" onClick={()=>{updateuser(user._id)}}>UPDATE</button></td>
              </tr>
            ))}
            </table>
        </React.Fragment>
    )
}
export default Form;