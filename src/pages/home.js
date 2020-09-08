import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Camera from 'react-native-vector-icons/MaterialCommunityIcons';
Camera.loadFont()
import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont()
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()

export function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('perfil')}>
              <User name="user" size={20} color="gray"></User>
              <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Perfil </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Foto')}>
              <Camera name="camera" size={20} color="gray"></Camera>
              <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
                    onPress={() => { BackHandler.exitApp()}}>
                    <Exit name="sign-out" size={20} color="gray"></Exit> 
                    <Text style={{ fontSize: 15,fontWeight: 'bold' }}>Sair </Text>      
                </TouchableOpacity>
            
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 200,
    height: 150,
    margin: 10,
    borderRadius: 6,
    alignItems: "center",
  },

  ident1: {
    backgroundColor:'white',
    shadowColor: 'gray',
    alignItems: 'center',
    borderRadius: 10,
    width: 200,
    height: 150,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 7,
    padding: 55,
    margin: 20,
    
  },
  });
