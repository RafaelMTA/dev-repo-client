import React, {useState} from 'react';
import InputIcon from '../../components/InputIcon/index.jsx';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './style.css';

const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        console.log("clicked");
    }
    
    return (
        <div className="login-form">
            <div className="login-title">
                <h2>Login</h2>
            </div>
            <hr />
            <div className="input-field">
                <InputIcon type="email" id="email">
                    <EmailIcon className="input-icon" />
                </InputIcon>
            </div>
            <div className="input-field">
                <InputIcon type="password" id="password">
                    <LockIcon className="input-icon" />
                </InputIcon>
            </div>
            <div className="input-actions">
                <button className="login-submit" onClick={handleLogin}>
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default LoginForm;