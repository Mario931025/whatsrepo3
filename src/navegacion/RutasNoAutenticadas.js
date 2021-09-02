//login, registro y cambio de contraseña
//aqui vamos a crear la navegacion principal y esta debe de estar envuelto en toda la navegacion container


import React from 'react'

//navigator principal de este componente 
import {createStackNavigator} from '@react-navigation/stack'
//debe de estar envuelto en el navigation container 
import {NavigationContainer} from '@react-navigation/native'
import Login from '../pantallas/cuenta/Login'
import Registrar from '../pantallas/cuenta/Registrar'
import RestaurarPassword from '../pantallas/cuenta/RestaurarPassword'

const Stack = createStackNavigator();

export default function RutasNoAutenticadas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
                <Stack.Screen component={Login} name="login"/>
                <Stack.Screen component={Registrar} name="register"/>
                <Stack.Screen component={RestaurarPassword} name="lostpassword" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


