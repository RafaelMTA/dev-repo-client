import React, {useState, createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {api, createSession} from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        console.log(user);
        // if(user && token) {
        //     console.log(user);
        //     setUser(JSON.parse(user));
        // api.defaults.headers.Authorization = `Bearer ${token}`;
        // }       
        setLoading(false);
    }, []);

    const login = async(email, password) => {
        const response = await createSession(email, password);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        console.log('login:' + user);
        navigate('/');
    }

    const logout = async() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login')
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated: !!user,
                user,
                loading, 
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;