import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom'; 
import MainForm from '../../forms/MainForm/index';
import {getRepositories, createRepository, deleteRepository} from '../../services/api';
import {AuthContext} from '../../contexts/auth';

import './style.css';

const userId = '620e2c99dfd753c9acdecf6d';

const Main = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const {user, logout} = useContext(AuthContext);

    const handleAddItem = async(url) => {
        try{
            await createRepository(userId, url);
            await loadData();
        }catch(error){
            console.log(error);
            setLoadingError(true);
        }
    }

    const handleDeleteItem = async(repository) => {
        try{
            await deleteRepository(userId, repository._id);
            await loadData();
        }catch(error){
            console.log(error);
            setLoadingError(true);
        }
    }

    const loadData = async(query = '') => {
        try{
            setLoading(true);
            const response = await getRepositories(user?.id, query);
            console.log(response.data);
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
            onAddItem={handleAddItem}
            onDeleteItem={handleDeleteItem}
            onLogout={logout}
        />
    );
}

export default Main;