import React, {useState} from 'react';
import InputIcon from '../../components/InputIcon/index';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import ClearIcon from '@material-ui/icons/Clear';

import RepositoryItem from '../RepositoryItem/index';

import './style.css';

const Repository = ({repositories, onAddItem, onDeleteItem}) => {
    const [searchValue, setSearchValue] = useState('');
    const [addItem, setAddItem] = useState('');

    const handleClearInput = () => {
        setSearchValue('');
    }

    const handleAddItem = () => {
        onAddItem(addItem);
        setAddItem('');
    }

    return (
        <div className="repository-container">
            <div className="repository-header">
                <InputIcon 
                    placeholder="Search for a Repository..." 
                    type="search"
                    icon={<SearchIcon />}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    buttonIcon={<ClearIcon />}
                    bgBtnColor="linear-gradient(to top right, #ff0000 27%, #ff3300 78%)"
                    onClick={handleClearInput}
                />
            </div>
            <div className="repository-body">
                <div className="repository-title">
                    <h2>Repositories</h2>
                </div>
                <div className="repository-input-field">
                     <InputIcon 
                        placeholder="Add a Repository..." 
                        type="search"
                        icon={<GitHubIcon />}
                        value={addItem}
                        onChange={e => setAddItem(e.target.value)}
                        buttonIcon={<AddIcon />}
                        bgBtnColor="linear-gradient(to top right, #33cc33 33%, #00ff00 88%)"
                        onClick={handleAddItem}
                    />
                </div>   
                <div className="repository-content">
                    <ul className="repository-list">                      
                        {
                            repositories.map((repository) => (
                                <li className="repository-item" key={repository._id}>
                                    <RepositoryItem 
                                        title={repository.name.substring(0, repository.name.indexOf('/'))} 
                                        description={repository.name.substring(repository.name.indexOf('/') + 1)} 
                                        onDeleteItem={() => onDeleteItem(repository)}
                                    />
                                </li>
                            ))                       
                        }
                    </ul>
                </div>                          
            </div>
        </div>
    );
}

export default Repository;