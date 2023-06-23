import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Recette from './screens/Recette';
import ResultatRecherche from './screens/ResultatRecherche';
import RecettesRecentes from './screens/RecettesRecentes';
import Accueil from './screens/Accueil';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Acceuil">
        <Stack.Screen name="La Cuisine de Maurice" component={Accueil} />
        <Stack.Screen name="Resultat Recherche" component={ResultatRecherche} />
        <Stack.Screen name="Recette" component={Recette} />
        <Stack.Screen name="Recettes Récentes" component={RecettesRecentes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
