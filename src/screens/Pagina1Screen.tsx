import React, { useEffect } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/Theme';
import { DrawerScreenProps } from '@react-navigation/drawer';

//interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {


  useEffect(() =>{
    navigation.setOptions({
      headerLeft: () => ( <Button title='Menu' onPress={() => navigation.toggleDrawer()} /> )
    });
  }, [navigation]);


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar com argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botaoGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PessoaScreen', {
              id: 1,
              name: 'Deijaí Miranda Almeida',
            })
          }
          activeOpacity={0.8}>
          <Text style={styles.botaoGrandeTitle}>Deijai</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botaoGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PessoaScreen', {
              id: 1,
              name: 'Maria Helena Medeiros',
            })
          }
          activeOpacity={0.8}>
          <Text style={styles.botaoGrandeTitle}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
