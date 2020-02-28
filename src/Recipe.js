import React from 'react';
import './Recipe.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="xablau">
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
