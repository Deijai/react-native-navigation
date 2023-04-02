import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/Theme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
      navigator.setOptions({
        title: 'Ola mundo',
        headerBackTitle: 'Voltar'
      })
  }, [navigator]);



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button title='Pagina 3' onPress={() => navigator.navigate('Pagina3Screen')} />
     </View>
  );
};
