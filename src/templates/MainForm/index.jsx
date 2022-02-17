import React from 'react';
import Header from '../../components/Header/index.jsx';
import Repository from '../../components/Repository/index.jsx';
import './style.css';

const MainForm = ({repositories, onAddItem, onDelete, onLogout}) => {
    return (
        <div className="main-container">
            <div className="main-header">
                <Header onLogout={onLogout} />
            </div>
            <div className="main-body">
                <Repository 
                    repositories={repositories} 
                    onAddItem={onAddItem} 
                    onDelete={onDelete} 
                />
            </div>       
        </div>     
    );
}

export default MainForm;