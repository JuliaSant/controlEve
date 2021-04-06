import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Funcionario from '../views/Funcionario'
import Perfil  from '../views/Perfil'
import Eventos from '../views/Eventos'

const Tab = createBottomTabNavigator()

export default props => {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
       headerShown: true,
      labelStyle: {fontSize: 13}
  }}>
      <Tab.Screen name="Funcionarios" component={Funcionario}></Tab.Screen>
      <Tab.Screen name="Eventos" component={Eventos}></Tab.Screen>
      <Tab.Screen name="Perfil" component={Perfil}></Tab.Screen>
  </Tab.Navigator>
  )
}