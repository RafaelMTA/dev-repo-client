import React from 'react';
import Header from '../../components/Header/index.jsx';
import Repository from '../../components/Repository/index.jsx';
import './style.css';

const MainForm = (props) => {
    return (
        <div className="main-container">
            <div className="main-header">
                <Header onLogout={props.onLogout} />
            </div>
            <div className="main-body">
                <Repository repositories={props.repositories} onAddItem={props.onAddItem} onDelete={props.onDelete} />
            </div>       
        </div>     
    );
}

export default MainForm;