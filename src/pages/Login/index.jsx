import React, {useContext} from 'react';
import {AuthContext} from '../../contexts/auth';
import LoginForm from '../../forms/LoginForm/index';
import './style.css';

const Login = () => {   
    const { login } = useContext(AuthContext);

    return (
        <div className="login-container">
            <LoginForm 
                onLogin={login}
            />
        </div>       
    );  
}

export default Login;