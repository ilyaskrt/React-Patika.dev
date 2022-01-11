import React, {Component} from 'react';
import EyeIcon from "../Svg/EyeIcon";
import "./index.css"

class InputText extends Component{
    constructor(props){
        super(props)
    }

    render(){
        //this.props.label gibi uzun uzun yazmamak için tanımlamamızı yaptık aşağıda direk yazabiliriz
        const {label,type,placeholder}= this.props; 
        
        return(
            <div className='input-container'>
                <div>
                    <span className='input-email'>{label}</span> 
                </div>
                    <input className="input" type={type} placeholder={placeholder} />
                    {type==='password' && (<span>ForgotPassword?</span>) }   
            </div>

        )
    }
}
export default InputText;