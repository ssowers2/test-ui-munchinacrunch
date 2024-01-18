// RandomizerButton.js
import React, { useState } from 'react';
import RestaurantService from './path-to/RestaurantService';

const RandomizerButton = () => {
  const [randomRestaurant, setRandomRestaurant] = useState(null);

  const handleRandomize = async () => {
    try {
      // Make a GET request to the backend to get a random restaurant
      const response = await RestaurantService.getRandomRestaurant();
      
      // Handle the randomly selected restaurant in your React component
      setRandomRestaurant(response);
    } catch (error) {
      console.error('Error getting random restaurant:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handleRandomize}>Randomize Restaurant</button>
      {randomRestaurant && (
        <p>Randomly Selected Restaurant: {randomRestaurant}</p>
      )}
    </div>
  );
};

export default RandomizerButton;
