import React, {useState} from 'react';
import InputIcon from '../../components/InputIcon/index';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import './style.css';

const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className="login-form">
            <div className="login-title">
                <h2>Login</h2>
            </div>
            <hr />
            <div className="input-field">
                <InputIcon 
                    type="email" 
                    id="email" 
                    icon={ <EmailIcon /> }
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />               
            </div>
            <div className="input-field">
                <InputIcon 
                    type="password" 
                    id="password" 
                    icon={ <LockIcon /> }
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="input-actions">
                <button className="login-submit" onClick={() => onLogin(email, password)}>
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default LoginForm;