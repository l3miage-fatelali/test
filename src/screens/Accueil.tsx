import React, {PropsWithChildren} from 'react';
import { View} from 'react-native';
import Recherche from '../compenents/Recherche';

const Accueil = ({navigation}: PropsWithChildren<any>): JSX.Element => {
  return (
    <View>
      <Recherche navigation={navigation}></Recherche>
    </View>
  );
};


export default Accueil;
