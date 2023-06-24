import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import ItemRecette from '../compenents/ItemRecette';
import RecentService from '../services/recentService';

const ResultatRecherche = ({
  navigation,
}: PropsWithChildren<any>): JSX.Element => {
  let recetteRecherche = RecentService.getRecentRecipes();
  return (
    <View style={styles.recette}>
      <ItemRecette recettes={recetteRecherche} navigation={navigation} composant='resultat'/>
    </View>
  );
};

const styles = StyleSheet.create({
  recette: {
    marginBottom: 30,
  },
});

export default ResultatRecherche;
