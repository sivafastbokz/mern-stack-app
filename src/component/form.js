import React from "react";
import '/home/siva/Desktop/task1/myapp/src/component/form.css'

class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
             ENTER YOUR NAME <input name="name"/>
             <button>ADD</button>
            </React.Fragment>
        )
    }
};

export default Form;