import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RestaurantService from '../services/restaurantService';

const Recette = ({route}: any): JSX.Element => {
  const {item} = route.params;
  const [detailRecette, modifDetail] = useState<Step[]>([]);

  console.log('----------------------------');
  console.log(item.title);
  const fetchDetailRecette = async () => {
    try {
      const value = await RestaurantService.getDetailRecette(item.id);
      const tmpDetail: Step[] = [];
      if (
        typeof value.data !== 'undefined' &&
        typeof value.data[0] !== 'undefined' &&
        typeof value.data[0].steps !== 'undefined'
      ) {
        value.data[0].steps.forEach((oneStep: any) => {
          let lengthStep: LengthStep = {
            nombre: 0,
            unite: '',
          };
          if (
            typeof oneStep.length !== 'undefined' &&
            typeof oneStep.length.number !== 'undefined' &&
            oneStep.length.unit !== 'undefined'
          ) {
            lengthStep = {
              nombre: oneStep.length.number,
              unite: oneStep.length.unit,
            };
          }

          let createStep: Step = {
            id: oneStep.number,
            info: oneStep.step,
            lengthStep: lengthStep,
          };
          tmpDetail.push(createStep);
        });
      }
      modifDetail(tmpDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchDetailRecette();
  });

  if (!detailRecette || detailRecette.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text style={styles.subtitle}>Les étapes :</Text>
      <View style={styles.instructionsContainer}>
        {detailRecette.map((instruction, index) => (
          <View key={index} style={styles.instruction}>
            <Text style={styles.bullet}>•</Text>
            <View style={styles.instructionContent}>
              <Text style={styles.instructionTitle}>{instruction.info}</Text>
              <Text style={styles.instructionDuration}>
                Durée : {instruction.lengthStep.nombre}{' '}
                {instruction.lengthStep.unite}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  instructionContent: {
    flex: 1,
    marginLeft: 8,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    alignItems: 'center',
  },
  instructionsContainer: {
    flexWrap: 'wrap',
  },
  instruction: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  instructionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  instructionDuration: {
    fontSize: 14,
    color: 'gray',
  },
  bullet: {
    fontSize: 12,
    marginRight: 5,
  },
});

export default Recette;
function useEffect(arg0: () => void) {
  throw new Error('Function not implemented.');
}

