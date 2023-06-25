import React, {PropsWithChildren} from 'react';
import { View} from 'react-native';
import Recherche from '../compenents/Recherche';
import RestaurantService from '../services/restaurantService';

const Accueil = ({navigation}: PropsWithChildren<any>): JSX.Element => {

  let recettetmp: RecetteRecherche[] = [];
  RestaurantService.getRandomRecette().then((value: any)=>{
    value.data.recipes.forEach((recette: any) => {
      let recetteFinal: RecetteRecherche = {
        id: recette.id,
        image: recette.image,
        title: recette.title,
      };
      recettetmp.push(recetteFinal);
    });
  });
  
  return (
    <View>
      <Recherche navigation={navigation} recettes={recettetmp}></Recherche>
    </View>
  );
};


export default Accueil;
