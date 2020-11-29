import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const Create = ({setStores}) => {

    const [inputValue, SetInputValue] = useState('');

    const handleInputChange = (e) => {
        SetInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length>2) {
            setStores((newstore) => [...newstore, inputValue]);
            SetInputValue('');
        }
    }

    return (
        <div className={'my-5'}>
            <h4>Créer un magasin</h4>

            <div className="input-group mb-3">
                <input type="text" onChange={handleInputChange} value={inputValue} className="form-control" placeholder="Entrez un nom" />

                <div className="input-group-append">
                    <button onClick={handleSubmit} className="btn btn-outline-secondary" type="button">Ajouter</button>
                </div>
            </div>

        </div>
    )
}


Create.propTypes = {
    setStores : PropTypes.func.isRequired
};
