import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/Theme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParams } from '../navigatior/StackNavigoator';

// interface RouterParams {
//     id: number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PessoaScreen'> {}

export const PessoaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [route, navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
