import axios from 'axios';

const apiKey: string = 'fa0df6f31d8d485d8b26cd169ddd6de0';

//const apiKey: string = '5596b56717c446f284e5a2aa1abca17d';

export default class RestaurantService {
  static getRecettes(ingredient: string) {
    console.log('getrecettes');
    return this.getHeader().get('/recipes/findByIngredients', {
      params: {apiKey: apiKey, ingredients: ingredient, number: 20},
    });
  }

  static getDetailRecette(id: Number) {
    console.log('getDetailRectte');
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
