import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput, TouchableOpacity, SafeAreaView, Animated, Button} from 'react-native';
import 'react-native-gesture-handler';

export default props => {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image style={styles.img}
          source={require('../img/eveControl2.png')} />
      </View>

      <View 
      style={styles.container}>
          <TextInput style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TextInput style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={() => {}}
          />

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.textSubmit}>
              Acessar
            </Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  background:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  input:{
    borderWidth: 2,
    borderColor: '#536a8f',
    width: '90%',
    marginBottom: 15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
    padding: 7
  },
  btnSubmit:{
    backgroundColor: '#536a8f',
    width: '70%',
    marginTop:50,
    alignItems:'center',
    marginBottom: 15,
    fontSize: 17,
    borderRadius: 7,
    padding: 11,
  },
  textSubmit:{
    color: '#fff'
  },
  img:{
  }

});
