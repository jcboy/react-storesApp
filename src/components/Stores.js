import React, {useState} from 'react'
import {Create} from "./Create";

export const Stores = () => {

    const [stores, setStores] = useState(['Store Paris 8','Store Paris 16', 'Store Paris 20']);
    // const handleAdd = () => {
        //setStores( [...stores, 'Bordeaux'] )
    //     setStores((newstore)=> [...newstore, 'Paris 3'])
    // }

    const [showCreate, setShowCreate] = useState(false);

    const toggleShow = () => {
        setShowCreate(!showCreate);

        const btnText = document.getElementById('btn');

        btnText.innerText = btnText.innerText === 'Créer un magasin' ? 'Annuler' : 'Créer un magasin';
    }

    return (
        <div className={'px-3 py-3 pt-md-5 pb-md-4 mx-auto '}>
            <h3 className={'text-center'}>Nos magasins</h3>

            <ul className="list-group list-group-flush mb-3">
                {stores.map( (store)=>{
                    return <li key={store} className={'list-group-item'}>{store}</li>
                } )}
            </ul>

            <button onClick={ toggleShow } className={'btn btn-primary'} id={'btn'}>Créer un magasin</button>

            { showCreate && (
                <Create setStores={setStores} />
            )}
        </div>
    )
}
