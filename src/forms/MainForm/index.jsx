import React, { useContext } from 'react';
import Header from '../../components/Header/index';
import Repository from '../../components/Repository/index';

import './style.css';

const MainForm = ({repositories, onAddItem, onDeleteItem, onLogout}) => {
    return (
        <div className="main-container">
            <div className="main-header">
                <Header onLogout={onLogout} />
            </div>
            <div className="main-body">
                <Repository 
                    repositories={repositories} 
                    onAddItem={onAddItem} 
                    onDeleteItem={onDeleteItem} 
                />
            </div>       
        </div>     
    );
}

export default MainForm;