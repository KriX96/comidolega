import React from 'react'
import { View, StyleSheet, Text, AsyncStorage } from 'react-native'
import { colors } from '../constants'
import { Button } from '../components'

export class UserScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {}

        this.logout = this.logout.bind(this)
    }

    async componentWillMount() {
        this.setState({
            username: await AsyncStorage.getItem('username')
        })
    }

    async logout() {
        await AsyncStorage.removeItem('username')
        this.props.navigation.navigate('Home')
    }

    renderGreetings() {
        return (
            <Text style={styles.greetings}>
                Witaj, {this.state.username} !
            </Text>
        )
    }

    renderLogoutButton() {
        return (
            <Button
                onPress={this.logout}
                text="Wyloguj się"
                color={colors.azarin}
                textColor={colors.white}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderGreetings()}
                {this.renderLogoutButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greetings: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    }
})
