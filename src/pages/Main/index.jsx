import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import MainForm from '../../templates/MainForm/index.jsx';
import {getRepositories, createRepository} from '../../services/api';
import './style.css';

const userId = '620431b911c9aed7383fb432';

const Main = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const handleLogout = async() => {
        console.log('Clicked Logout');
    }

    const handleDelete = async() => {
        console.log('Clicked Delete');
    }

    const handleAddItem = async(url) => {
        try{
            await createRepository(userId, url);
        }catch(error){
            setLoadingError(true);
        }
    }

    const loadData = async(query = '') => {
        try{
            setLoading(true);
            const response = await getRepositories(userId);
            console.log(response.dataa);
            setRepositories(response.data);
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoadingError(true);
        }
    }   

    useEffect(() => {
        (async() => await loadData())();
    }, []);

    if(loading){
        return(
            <div className="loading">
                Carregando Dados
            </div>
        );
    }

    if(loadingError){
        return(
            <div className="loading">
                Erro ao carregar dados <Link to="/">Voltar</Link>
            </div>
        );
    }

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