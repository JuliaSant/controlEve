import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../views/Login'
import Home  from '../views/Home'
import Cadastro from '../views/Cadastro'
import GoCadastro from '../components/GoCadastro'

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Cadastro" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Cadastro">
        {props => (
            <GoCadastro {...props} go="Login">
                <Cadastro/>
            </GoCadastro>
        )}
        </Stack.Screen>

        <Stack.Screen name="Login">
        {props => (
            <GoCadastro {...props} goHome="Home">
                <Login/>
            </GoCadastro>
        )}
        </Stack.Screen>

        <Stack.Screen name="Home">
        {props => (
            <GoCadastro {...props}>
                <Home/>
            </GoCadastro>
        )}
        </Stack.Screen>
    </Stack.Navigator>
)