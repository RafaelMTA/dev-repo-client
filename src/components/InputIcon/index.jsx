import React from 'react';
import './style.css';

const InputIcon = (props) => {
    return(
        <div className="input-icon-container">
            {props.children}
            <input type={props.type} name={props.id} id={props.id} className="input-field" />
        </div>
    );
}

export default InputIcon;