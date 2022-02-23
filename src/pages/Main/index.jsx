import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom'; 
import MainForm from '../../forms/MainForm';
import {getRepositories, createRepository, deleteRepository} from '../../services/api';
import {AuthContext} from '../../contexts/auth';

import './style.css';

const Main = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const {user, logout} = useContext(AuthContext);

    const handleSearchValue = async (query) => {
        try{
            await loadData(query);
        }catch(error){
            setLoadingError(true);
        }
    }

    const handleAddItem = async(url) => {
        try{
            await createRepository(user?.id, url);
            await loadData();
        }catch(error){
            setLoadingError(true);
        }
    }

    const handleDeleteItem = async(repository) => {
        try{
            await deleteRepository(user?.id, repository._id);
            await loadData();
        }catch(error){
            setLoadingError(true);
        }
    }

    const loadData = async(query = '') => {
        try{
            setLoading(true);
            const response = await getRepositories(user?.id, query);
            setRepositories(response.data);
            setLoading(false);
        }catch(error){
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
            onSearchValue = {handleSearchValue}
            onAddItem={handleAddItem}
            onDeleteItem={handleDeleteItem}
            onLogout={logout}
        />
    );
}

export default Main;