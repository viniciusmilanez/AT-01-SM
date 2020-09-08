import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



export function perfil() {
    return (
        <View style={styles.container}>

            <Image
                style={{width: 150, height: 150,borderRadius: 400/ 2 ,alignItems: 'center',}}
                source={require('../../assets/app.jpg')}>
            </Image>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>{"\n"}Vinicius Pedroso Milanez</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>16 anos</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Curso Técnico de Informática {"\n"} </Text>


            <View style={[styles.views, styles.ident1]}>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Profissional de bed wars </Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}> {"\n"} Caracteristicas: </Text>
            <Text style={{ fontSize: 15 }}> Montador de cubo magico {"\n"}</Text>
            <Text style={{ fontSize: 15 }}> Imitador de Ednaldo Pereira {"\n"}</Text>
            <Text style={{ fontSize: 15 }}> JOJOfag {"\n"}</Text>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8217db',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "column",
      paddingTop: 40,
    },
    views: {
      width: 300,
      height: 170,
      margin: 15,
      borderRadius: 6,
      alignItems: "center",
    },

    ident1: {
      backgroundColor:'#6b6464',
      shadowColor: '#DEDEDE',
      shadowOpacity: 0.2,
      shadowRadius: 1.5,
      shadowOffset: {width: 0, height: 2},
      elevation: 2,
      paddingTop: 60,
      width: 300,
      height: 250

    }, 
    });
