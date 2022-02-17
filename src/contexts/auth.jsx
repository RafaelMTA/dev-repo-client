import React, {useState, createContext, useEffect} from 'react';
import {createSession} from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        // if(user || user == 'undefined') {
        //     console.log(user);
        //     setUser(JSON.parse(user));
        // }       
    }, []);

    const login = async(email, password) => {
        console.log("email: " + email);
        console.log("password: " + password);

        const response = await createSession(email, password);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setUser(response.data.user);
    }

    const logout = async() => {
        setUser(null);
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