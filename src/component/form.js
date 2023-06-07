import React, { useState,useEffect,  } from "react";
import '/home/siva/Desktop/task1/myapp/src/component/form.css'
import axios from "axios";

const numbers = [1,2,3,4,5]

function Form(){
    const[userName,setUserName]=useState("");
    const[Users,setAllUsers]=useState([]);
     const[users,setUsers]=useState([]);

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

      const deleteuser = (id) => {
        axios.delete(`http://localhost:5000/deleteuser/${id}`)
          .then(response => {
            setUsers(users.filter(user => user.id !== id));
            
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
  


 let maps= numbers.map((i)=>{
    if( i<3){
        return i
        }
 })
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
                <td><button className="button1" onClick={()=>{
                    deleteuser(user._id)
                    
                }}>DELETE</button></td>
              </tr>
            ))}
            </table>


            <div>
                <>Top 3 points</>
                
                        <p>{maps}</p>

                    
                
            </div>
        </React.Fragment>
    )
}
export default Form;