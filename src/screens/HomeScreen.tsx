import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="Go to Pokemon page"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </View>
  );
};
