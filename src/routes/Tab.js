import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Funcionario from '../views/Funcionario'
import Perfil  from '../views/Perfil'
import Eventos from '../views/Eventos'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {fontSize: 30}
    }}>
        <Tab.Screen name="Funcionario" component={Home}></Tab.Screen>
        <Tab.Screen name="Eventos" component={Eventos}></Tab.Screen>
        <Tab.Screen name="Perfil" component={Perfil}></Tab.Screen>
    </Tab.Navigator>
)