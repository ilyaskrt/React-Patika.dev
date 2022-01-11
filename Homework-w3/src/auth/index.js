import "./index.css";
import React, {Component} from "react";
import LoginForm from "../components/LoginForm"

class Auth extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container">
                <LoginForm></LoginForm>
            </div>
        );
     
    }
}
export default Auth;