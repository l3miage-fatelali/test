import axios from 'axios';

const apiKey: string = 'fa0df6f31d8d485d8b26cd169ddd6de0';

export default class RestaurantService {
  static getRecettes(ingredient: string) {
    return this.getHeader().get('/recipes/findByIngredients', {
      params: {apiKey: apiKey, ingredients: ingredient, number: 20},
    });
  }

  static getDetailRecette(id: Number) {
    return this.getHeader().get(`/recipes/${id}/analyzedInstructions`, {
      params: {apiKey: apiKey, stepBreakdown: 'true'},
    });
  }

  private static getHeader() {
    return axios.create({
      baseURL: 'https://api.spoonacular.com',
      headers: {},
    });
  }
}
