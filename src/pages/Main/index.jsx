import React, {useState, useEffect} from 'react';
import MainForm from '../../templates/MainForm/index.jsx';
import {getRepositories} from '../../services/api';
import './style.css';

const userId = '620431b911c9aed7383fb432';

const Main = () => {
    const [repositories, setRepositories] = useState([]);
    
    const handleLogout = () => {
        console.log('Clicked Logout');
    }

    const handleDelete = () => {
        console.log('Clicked Delete');
    }

    const handleAddItem = () => {
        console.log('Clicked AddItem');
    }

    const loadData = async(query = '') => {
        const response = await getRepositories(userId);
        console.log(response.dataa);
        setRepositories(response.data);
    }   

    useEffect(() => {
        (async() => await loadData())();
    }, []);

    return (
        <MainForm 
            repositories={repositories}  
            onLogout={handleLogout}
            onDelete={handleDelete}
            onAddItem={handleAddItem}
        />
    );
}

export default Main;