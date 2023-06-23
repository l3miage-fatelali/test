export default class RecentService {
  static recentRecipes: RecetteRecherche[] = [];

  static getRecentRecipes() {
    return RecentService.recentRecipes;
  }

  static addRecentRecipe(recipe: RecetteRecherche) {
    RecentService.recentRecipes.unshift(recipe);
  }

  static clearRecentRecipes() {
    RecentService.recentRecipes = [];
  }
}
