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
}

const ItemRecette = ({recettes, navigation}: ItemRecetteProps): JSX.Element => {
  const openRecette = (item: RecetteRecherche)=>{
    RecentService.addRecentRecipe(item);
    navigation.navigate('Recette', {item: item});
  }
  return (
    <FlatList
      style={styles.flatList}
      data={recettes}
      keyExtractor={(recette: RecetteRecherche) => recette.id}
      renderItem={({item}: RecetteRecherche) => {
        return (
          <TouchableOpacity onPress={() => openRecette(item)}>
            <View style={styles.container}>
              <View style={styles.cadre}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.texte}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
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
    padding: '20px',
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