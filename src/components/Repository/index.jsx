import React from 'react';
import InputIcon from '../../components/InputIcon/index.jsx';
import SearchIcon from '@material-ui/icons/Search';
import RepositoryItem from '../RepositoryItem/index.jsx';
import AddIcon from '@material-ui/icons/Add';
import './style.css';

const Repository = (props) => {
    return (
        <div className="repository-container">
            <div className="repository-header">
                <InputIcon placeholder="Search for a Repository...">
                    <SearchIcon className="input-icon" />
                </InputIcon>
            </div>
            <div className="repository-body">
                <div className="repository-title">
                    <h2>Repositories</h2>
                </div>
                <div className="repository-input-field">
                    <input type="text" placeholder="Add Repository URL..." className="repository-input-add" />
                    <button className="repository-button-add" onClick={props.onAddItem}><AddIcon /></button>
                </div>   
                <div className="repository-content">
                    <RepositoryItem title="teste" description="asdasdawdasdawdasdawdasdwdw" onDelete={props.onDelete} />
                </div>                          
            </div>
        </div>
    );
}

export default Repository;