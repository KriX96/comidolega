import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { HomeScreen, LoginScreen, RegisterScreen } from '../screens'

const AuthNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Register: {
        screen: RegisterScreen
    }
})

export default AuthNavigator
