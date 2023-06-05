import React from "react";
import '/home/siva/Desktop/task1/myapp/src/component/form.css'

class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="form">
             ENTER YOUR NAME: <input name="name"/>
             <button>ADD NEW</button>
             </div>
             <table>
                <tr>
                    <th>SNO</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td><button className="button1">DELETE</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                    <td><button className="button1">DELETE</button></td>
                </tr>
             </table>
             
           
            </React.Fragment>
        )
    }
};

export default Form;