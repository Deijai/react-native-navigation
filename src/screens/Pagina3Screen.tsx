import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/Theme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title='Voltar' onPress={() => navigation.pop()}/>
      <Button title='Pagina 1 = inicial' onPress={() => navigation.popToTop()}/>
     </View>
  );
};
