import React, {useState, createContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {api, createSession} from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {    
        const userStorage = localStorage.getItem('user');
        const tokenStorage = localStorage.getItem('token');

        if(userStorage && tokenStorage) {
            setUser(JSON.parse(userStorage));
            api.defaults.headers.Authorization = `Bearer ${tokenStorage}`;
        }       
        setLoading(false);
    }, []);

    const login = async(email, password) => {
        try{
            const response = await createSession(email, password);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
            setUser(response.data.user);
            navigate('/');
        }catch(error){
            alert(error.response.data.error);
        }
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
                authenticated: !!localStorage.getItem('user'),
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