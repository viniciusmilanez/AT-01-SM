import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Routes} from './src/routes/routes'
Icon.loadFont()

export default function App() {
  return (
    <Routes/>
  );
}





    /*{ <View style={styles.container}>

      <View style={styles.Botao}>
        <Icon name="person" size={40}></Icon>
        <Text>Perfil</Text>
      </View>

      <View style={styles.Botao}>
        <Icon name="camera-alt" size={40}></Icon>
        <Text>Câmera</Text>
      </View>

      <View style={styles.Botao}>
        <Icon name="exit-to-app" size={40}></Icon>
        <Text>Sair</Text>
      </View>

    </View>} */
/*   );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Botao: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    margin: 20,
    width: 300,
    height: 200,
    borderRadius: 8,

    elevation: 5,
    shadowColor: '#010101',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  }, */
/* }); */


