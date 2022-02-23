import React, {useState} from 'react';
import InputIcon from '../../components/InputIcon';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import RepositoryItem from '../RepositoryItem';

import './style.css';

const Repository = ({repositories, onSearchValue, onAddItem, onDeleteItem}) => {
    const [searchValue, setSearchValue] = useState('');
    const [addItem, setAddItem] = useState('');

    const handleSearchValue = (query) => {
        onSearchValue(query);
    }

    const handleAddItem = (item) => {
        onAddItem(item);
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
                    buttonIcon={<ArrowForwardIcon />}
                    bgBtnColor="linear-gradient(to top right, #0066cc 24%, #0099ff 90%)"
                    onClick={() => handleSearchValue(searchValue)}
                />
            </div>
            <div className="repository-body">
                <div className="repository-title">
                    <h2>Repositories</h2>
                </div>
                <div className="repository-input-field">
                     <InputIcon 
                        placeholder="Add a Repository..." 
                        type="text"
                        icon={<GitHubIcon />}
                        value={addItem}
                        onChange={e => setAddItem(e.target.value)}
                        buttonIcon={<AddIcon />}
                        bgBtnColor="linear-gradient(to top right, #33cc33 33%, #00ff00 88%)"
                        onClick={() => handleAddItem(addItem)}
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