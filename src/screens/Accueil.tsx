import React, {PropsWithChildren, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Recherche from '../compenents/Recherche';
import RestaurantService from '../services/restaurantService';

const Accueil = ({navigation}: PropsWithChildren<any>): JSX.Element => {
  const [recettetmp, setRecettetmp] = useState<RecetteRecherche[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const aleatoire = async () => {
      try {
        const value = await RestaurantService.getRandomRecette();
        const recettes: RecetteRecherche[] = value.data.recipes.map(
          (recette: any) => ({
            id: recette.id,
            image: recette.image,
            title: recette.title,
          })
        );
        setRecettetmp(recettes);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    aleatoire();
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Recherche navigation={navigation} recettes={recettetmp} />
      )}
    </View>
  );
};

export default Accueil;
