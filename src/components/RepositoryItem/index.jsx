import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './style.css';

const RepositoryItem = (props) => {
    return(
        <div className="repository-item-container">
            <div className="repository-item-content">
                <div className="repository-item-title">
                    <h2>{props.title}</h2>
                </div>
                <hr />
                <div className="repository-item-body">
                    <h4>{props.description}</h4>
                </div>
            </div>
            <hr />
            <div className="repository-item-actions">
                <DeleteForeverIcon className="repository-item-icon" onClick={props.onDelete} />        
            </div>
        </div>
    );
}

export default RepositoryItem;