import React, { useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RestaurantService from '../services/restaurantService';
import ItemRecette from './ItemRecette';
import RecentService from '../services/recentService';

interface RechercheProps {
  recettes: RecetteRecherche[];
  navigation: any;
}

const Recherche = ({recettes, navigation}: RechercheProps): JSX.Element => {
  const [ingredient, setIngredient] = useState('');
  const [recetteRecherche, setRecetteRecherche] = useState(recettes);
  const [etat, setEtat] = useState('Aleatoire');

  const search = async () => {
    setRecetteRecherche([]);
    let recettes;
    recettes = await RestaurantService.getRecettes(ingredient);
    let recettetmp: RecetteRecherche[] = [];
    recettes.data.forEach((recette: any) => {
      let recetteFinal: RecetteRecherche = {
        id: recette.id,
        image: recette.image,
        title: recette.title,
      };
      recettetmp.push(recetteFinal);
    });
    setEtat('Resultat');
    setRecetteRecherche(recettetmp);
  };

  const handlePress = () => {
    navigation.navigate('Recettes Récentes');
  };

  return (
    <View>
      <View style={styles.recherche}>
        <Image
          source={require('../assert/icon_loupe.png')}
          style={styles.icon}></Image>
        <TextInput
          style={styles.input}
          placeholder="Please enter an ingredient"
          onChangeText={ingredient => setIngredient(ingredient)}
        />
      </View>
      <Pressable style={styles.buttonRechercher} onPress={() => search()}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Recently Viewed Recipes</Text>
      </TouchableOpacity>
      <View style={styles.recette}>
      <ItemRecette recettes={recetteRecherche} navigation={navigation} composant='recherche' etat={etat}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C8AD7F',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '97%',
    marginLeft: 5,
    marginTop: 3,
  },
  buttonRechercher: {
    backgroundColor: '#DC143C',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '97%',
    marginLeft: 5,
  },
  buttonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    width: '97%',
    paddingLeft: 35,
    fontSize: 20,
    height: 45,
    marginBottom: 10,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    position: 'absolute',
    width: 20,
    top: 15,
    left: 10,
    height: 20,
    marginTop: 5,
  },
  recherche: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recette: {
    marginBottom: 30,
  },
});

export default Recherche;
