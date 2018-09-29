import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { TabBarIcon } from '../components'
import { UserScreen, SymptomsScreen, ResultScreen } from '../screens'

const SymptomsStack = createStackNavigator({
    Symptoms: SymptomsScreen,
    Result: ResultScreen
})

SymptomsStack.navigationOptions = {
    tabBarLabel: 'Sprawdź',
        tabBarIcon: ({ focused }) => (
            <TabBarIcon
                focused={focused}
                name="md-search"
            />
        ),
}

const UserStack = createStackNavigator({
    User: UserScreen,
})

UserStack.navigationOptions = {
      tabBarLabel: 'Użytkownik',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
              focused={focused}
              name="md-person"
        />
      ),
}


export default createBottomTabNavigator({
    SymptomsStack,
    UserStack
})
