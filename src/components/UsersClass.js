import React, {Component} from 'react';
import axios from "axios";
import {UsersAdd} from "./UsersAdd";

class UsersClass extends Component {

    state = { users: [] }

    // lorque le composant est monté alors récupération des users
    componentDidMount() {
        axios.get('http://localhost:3000/users').then( (response) => {
            this.setState( {users: response.data} );  // on actualise le state avec les donnes retournés = response
        });
        this.store();
    }

    store = () => {
        const data = {firstName: 'Frida', lastName: 'Holler', email: 'ti@po.com'}
        axios.post('http://localhost:3000/users', data)
            .then( (res) => {
                console.log(res.data.message);
            } )
    }

    deleteUser = (id) => {
        axios.delete('http://localhost:3000/users/'+id).then((res)=>{
            const users = [...this.state.users];
            const idx = users.findIndex( u => u.id === id );

            users.splice(idx,1);
            this.setState( {users: [...users]} )
        })
            .catch( (err) => {   // si jamais il y a un erreur
                console.log('C est grave ', err)
            })
    }

    render() {
        const user = this.state.users.map( (user) => {
            return <div key={user.id}   className="list-group-item d-flex justify-content-between">
                <div><span className="font-weight-bold">{user.lastName}</span> {user.firstName} - {user.city}</div>
                <button onClick={ () => this.deleteUser(user.id) } className="btn btn-danger btn-sm ml-4">
                    <i className="fas fa-user-minus"> </i>
                </button>
            </div>
        } );


        return (
            <div className='container'>

                <h3 className="my-4 text-center">Utilisateurs : <small>Class</small></h3>

                <div className="row justify-content-md-center">

                    <div className="list-group ">
                        {user}
                    </div>

                </div>


                <UsersAdd />
            </div>
        );
    }
}

export default UsersClass;
