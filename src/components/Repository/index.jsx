import React from 'react';
import InputIcon from '../../components/InputIcon/index.jsx';
import SearchIcon from '@material-ui/icons/Search';
import RepositoryItem from '../RepositoryItem/index.jsx';
import AddIcon from '@material-ui/icons/Add';
import './style.css';

const Repository = ({repositories, onAddItem, onDelete}) => {
    const [searchValue, setSearchValue] = useState('');
    const [addItem, setAddItem] = useState('');

    return (
        <div className="repository-container">
            <div className="repository-header">
                <InputIcon 
                    placeholder="Search for a Repository..." 
                    type="search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                >
                    <SearchIcon className="input-icon" />
                </InputIcon>
            </div>
            <div className="repository-body">
                <div className="repository-title">
                    <h2>Repositories</h2>
                </div>
                <div className="repository-input-field">
                    <input 
                        type="url" 
                        value={addItem}
                        onChange = {e => setAddItem(e.target.value)}
                        placeholder="Add Repository URL..." 
                        className="repository-input-add" 
                    />
                    <button className="repository-button-add" onClick={onAddItem}><AddIcon /></button>
                </div>   
                <div className="repository-content">
                    <ul className="repository-list">
                        {
                            repositories.map((repository) => {
                                <li className="repository-item" key={repository._id}>
                                    <RepositoryItem 
                                        title={repository.name.substring(0, repository.name.indexOf('/'))} 
                                        description={repository.name.substring(repository.name.indexOf('/') + 1)} 
                                        onDelete={onDelete}
                                    />
                                </li>
                            })                       
                        }
                    </ul>
                </div>                          
            </div>
        </div>
    );
}

export default Repository;