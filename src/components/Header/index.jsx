import React from 'react';
import ExitApp from '@material-ui/icons/ExitToApp';
import './style.css';

const Header = ({onLogout}) => {
    return (
        <div className="header-container">
            <h1 className="header-logo">REPOAPP</h1>
            <ExitApp className="header-icon" onClick={onLogout} />
        </div>
    );
}

export default Header;