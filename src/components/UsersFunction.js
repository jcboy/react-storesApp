import React, {useEffect, useState} from 'react'
import axios from "axios";
import {UsersAdd} from "./UsersAdd";

export const UsersFunction = ( ) => {  // esto {id, title, url} en lugar de props

    const [state, setState] = useState({
        users: [], loading: true
    });

    /*   useState( ) returns: An array that always has 2 elements. The first element
        1. A stateful value (equals the value passed as initial state during the initial render initially)
        2. A function to update it*/

    useEffect(() => {
        // Récuperation des users via l’API du navigateur
        axios.get('http://localhost:3000/users').then( (response) => {
            console.log('resp:', response.data);
            setState({users: response.data, loading: false});
        } );
        //store(); // optional pour ajouter au chargement de la page

    }, []);


    const deleteUser = (id) => {
        axios.delete('http://localhost:3000/users/'+id).then((res)=>{
            const users = [...state.users];
            const idx = users.findIndex( u => u.id === id );

            users.splice(idx,1);
            setState( {users: [...users]} )
        })
            .catch( (err) => {   // si jamais il y a un erreur
                console.log(err)
            })
    }
    // console.log('XXX: ', usersElt)

    const [showUsersAdd, setShowUsersAdd] = useState(false);
    const toggleShow = () => {
        setShowUsersAdd(!showUsersAdd);

        const btnText = document.getElementById('btn');

        btnText.innerText = btnText.innerText === 'Ajouter un utilisateur' ? 'Annuler' : 'Ajouter un utilisateur';
    }

    return (
        <div className="container ">

            <h3 className="my-4 text-center">Utilisateurs : <small>fonction</small></h3>

            <div className="row justify-content-md-center">
                <div className="list-group">
                    {state.users.map( (user)=>{
                        return <div key={user.id} className="list-group-item d-flex justify-content-between">
                            <div>{user.firstName} {user.lastName} - {user.city}</div>
                            <button onClick={ () => deleteUser(user.id) } className="btn btn-danger btn-sm ml-3"><i className="far fa-trash-alt"> </i></button>
                        </div>
                    } ) }
                </div>
            </div>

            <button onClick={ toggleShow } className={'btn btn-primary btn-sm'} id={'btn'}>Ajouter un utilisateur</button>

            { showUsersAdd && (
                <UsersAdd />
            )}
        </div>
    )
}
