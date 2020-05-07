import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p><strong>Calories</strong>: {Math.floor(calories)}</p>
            <img className='image' src={image} alt="" />
        </div>
    )
}

export default Recipe;