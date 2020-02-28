import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const YOUR_APP_ID = 'a8c8ec15';
  const YOUR_APP_KEY = 'f0c397c829b3200f3f2ceea5af80c689';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const pegaReceita = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );

    const data = await response.json();
    console.log('sou o data', data);
    setRecipes(data.hits);
    console.log(response);
    console.log('eoque =>', data.hits);
  };

  useEffect(() => {
    pegaReceita();
  }, [query]);

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
