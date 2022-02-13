import React from 'react';
import InputIcon from '../../components/InputIcon/index.jsx';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import './style.css';

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="login-title">
                <div className="login-form">
                    <div className="login-title">
                        <h2>Login</h2>
                    </div>
                    <div className="input-field">
                        <InputIcon type="email" id="email">
                            <PersonIcon className="input-icon" />
                        </InputIcon>
                    </div>
                    <div className="input-field">
                        <InputIcon type="password" id="password">
                            <LockIcon className="input-icon" />
                        </InputIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;