import React, {useState} from 'react';
import './style.css';

const InputIcon = (props) => {
    return(
        <div className="input-icon-container">    
            <input 
                type={props.type} 
                name={props.id} 
                id={props.id} 
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={props.onChange}  
                className="input-field"            
            />
            <div className="input-icon">
                {props.icon} 
            </div>       
            {props.buttonIcon ? <button className="input-button" style={{background: props.bgBtnColor}} onClick={props.onClick}>{props.buttonIcon}</button> : ""}         
        </div>
    );
}

export default InputIcon;