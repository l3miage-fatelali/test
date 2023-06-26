export default class RecentService {
  static recentRecipes: RecetteRecherche[] = [];

  static getRecentRecipes() {
    return RecentService.recentRecipes;
  }

  static addRecentRecipe(recipe: RecetteRecherche) {
    let trouver = false;
    let i = 0;
    while(i < this.recentRecipes.length && !trouver){
      
      if(this.recentRecipes[i]['id'] === recipe['id']){
        trouver = true;
      }
      i++;
    }
    if(!trouver){
      RecentService.recentRecipes.unshift(recipe);
    }
  }
}
