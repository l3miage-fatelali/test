import axios from 'axios';

//const apiKey: string = 'fa0df6f31d8d485d8b26cd169ddd6de0';
//const apiKey: string = '5596b56717c446f284e5a2aa1abca17d';
//const apiKey: string = '102773f1a871401783f9f91b5bf18915';
//const apiKey: string = '0dbe3c7b4c9e4c0cae4a69812eb42457';
//const apiKey: string = 'cac179876e174408bf21a39fe048a586';


export default class RestaurantService {
  static getRecettes(ingredient: string) {
    console.log('getrecettes');
    return this.getHeader().get('/recipes/findByIngredients', {
      params: {apiKey: apiKey, ingredients: ingredient, number: 20},
    });
  }

  static getDetailRecette(id: Number) {
    console.log('getDetailRecette');
    return this.getHeader().get(`/recipes/${id}/analyzedInstructions`, {
      params: {apiKey: apiKey, stepBreakdown: 'true'},
    });
  }

  static getRandomRecette() {
    console.log('getRandomRecette');
    return this.getHeader().get(`/recipes/random`, {
      params: {apiKey: apiKey, number: 20},
    });
  }

  private static getHeader() {
    return axios.create({
      baseURL: 'https://api.spoonacular.com',
      headers: {},
    });
  }
}
