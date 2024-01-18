// RestaurantService.js
const BASE_URL = '/api/restaurants';

const RestaurantService = {
  getAllRestaurants: async () => {
    const response = await fetch(BASE_URL);
    return response.json();
  },

  createRestaurant: async (restaurantData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurantData),
    });
    return response.json();
  },

  updateRestaurant: async (restaurantId, updatedData) => {
    const response = await fetch(`${BASE_URL}/${restaurantId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  },

  deleteRestaurant: async (restaurantId) => {
    const response = await fetch(`${BASE_URL}/${restaurantId}`, {
      method: 'DELETE',
    });
    return response.json();
  },
};

export default RestaurantService;
