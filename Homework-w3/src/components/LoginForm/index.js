import React, {Component} from 'react';
import InputText from '../InputText';
import "./index.css"
class LoginForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='login-form-container'>
                <div className='lf-title-container'>
                    <p className="lf-title">Your Logo</p>
                    <p className="lf-login-text">Login</p>
                </div>
                <div className='lf-form-container'>
                    <InputText label="Email" type="email" placeholder="username@gmail.com"/>
                    <InputText label="Password" type="password" placeholder="Password"/>
                </div>
                <div className='button-container'>
                    <button className='si-button' type='submit'>Sign In</button>
                    <p>Don’t have an account yet?</p> <a href='/register'>Register for free</a> 

                </div>
                    

            </div>
                            

        )
    }
}
export default LoginForm;