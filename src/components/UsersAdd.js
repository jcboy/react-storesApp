import React, {useState} from 'react'
import axios from "axios";


export const UsersAdd = ( ) => {

    const [values, setValues] = useState({
        firstName: '', lastName: ''
    });

    const [msgConfirm, setMsgConfirm] = useState(false);

    const handleInputChange = (e) => {   // fonction pour gérer la soumission
        //const {firstName, lastName} = e.target;
        setValues({
            ...values,         // extrait les propriétés de values
            [e.target.name] : e.target.value     // et attribue les valeur passés par le target
        })
    }

    const store = (e) => {
        e.preventDefault();
        if (values.firstName.trim().length>2 && values.lastName.trim().length>2) {
            //const data = {firstName: 'Frida', lastName: 'Holler', email: 'ti@po.com'}

            axios.post('http://localhost:3000/users', values)
                .then( (res) => {
                    // console.log(res.status); console.log(res.data.data.firstName);
                    if (res.status === 200){ setMsgConfirm(!msgConfirm);}
                } )
            values.firstName = '';
            values.lastName = '';
        }
    }

    return (
        <div className={'my-5'}>
            <h4>Ajouter un utilisateur</h4>

            <div className="input-group my-3">
                <input type="text" onChange={handleInputChange} value={values.firstName} name="firstName" className="form-control" placeholder="Votre prénom (3 characters min.)" />
                <input type="text" onChange={handleInputChange} value={values.lastName} name="lastName" className="form-control" placeholder="Votre nom (3 characters min.)" />

                <div className="input-group-append">
                    <button onClick={store} className="btn btn-outline-secondary" type="button">Ajouter</button>
                </div>
            </div>
            { msgConfirm && (
                <div className="alert alert-success my-3">
                    l'utilisateur a bien été ajouté.
                </div>
            )}
        </div>
    )
}
