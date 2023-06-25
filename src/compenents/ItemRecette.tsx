import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RecetteRecherche from '../models/RecetteRecherche';
import RecentService from '../services/recentService';

interface ItemRecetteProps {
  recettes: RecetteRecherche;
  navigation: any;
  composant: string;
  etat: string;
}

const ItemRecette = ({recettes, navigation, composant, etat}: ItemRecetteProps): JSX.Element => {

  const openRecette = (item: RecetteRecherche)=>{
    if(composant !== 'recent'){
      RecentService.addRecentRecipe(item);
    }
    console.log('itemrecette');
    navigation.navigate('Recette', {item: item});
  }
  
  return (
    <><h3>{etat}</h3><FlatList
      style={styles.flatList}
      data={recettes}
      keyExtractor={(recette: RecetteRecherche) => recette.id}
      renderItem={({ item }: RecetteRecherche) => {
        return (
          <TouchableOpacity onPress={() => openRecette(item)}>
            <View style={styles.container}>
              <View style={styles.cadre}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.texte}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      } } /></>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    margin: 5,
  },
  flatList: {
    height: '100%',
    //apadding: '20px',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadre: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '97%',
    marginTop: 5,
    display: 'flex',
  },
  texte: {
    width: '60%',
  },
});

export default ItemRecette;
