import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/Theme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();
  return (
    <View style={{...styles.globalMargin, marginTop: insets.bottom}}>
      <Text>SettingsScreen</Text>
     </View>
  );
}
