import React, {useRef} from 'react';
import './style.css';

const InputIcon = (props) => {
    return(
        <div className="input-icon-container">         
            <input type={props.type} name={props.id} id={props.id} placeholder={props.placeholder} className="input-field" />
            {props.children}              
        </div>
    );
}

export default InputIcon;