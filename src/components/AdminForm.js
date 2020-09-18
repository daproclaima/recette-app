import React from 'react';

const AdminForm = ({
                       id: key,
                       majRecette,
                       supprimerRecette,
                       recettes
                   }) => {
    const recette = recettes[key];

    const handleChange = (event, key ) => {
        const { name, value } = event.target;
        const recette = recettes[key];
        recette[name]= value;
        majRecette(key, recette)
    }
    return (
        <div className="card">
            <form action="" className="admin-form">
                <input value={recette.nom}  type='text' name="nom" onChange={e => handleChange(e, key)} placeholder="nom de la recette"/>
                <input value={recette.image}  type='text' name="image" onChange={e => handleChange(e, key)} placeholder="adresse de l'image de la recette"/>
                <textarea value={recette.ingredients} name="ingredients" onChange={e => handleChange(e, key)} rows="3" placeholder={'ingrédients de la recette'}/>
                <textarea value={recette.instructions} name="instructions" onChange={e => handleChange(e, key)} rows="3" placeholder={'instructions de la recette'}/>
            </form>
            <button onClick={ () => supprimerRecette(key)}>Supprimer</button>
        {/*
            if it was onClick={ supprimerRecette(key)} the fonction
            would be triggered at page loading.
         */}
        </div>
    );
};

export default AdminForm;
