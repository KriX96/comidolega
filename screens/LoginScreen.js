import React, { Fragment } from 'react'
import { StyleSheet, ImageBackground, View, Text, AsyncStorage } from 'react-native'
import { BackButton, Button, Input } from '../components'
import { colors } from '../constants'
import { AuthService } from '../services'

const background = require('../assets/images/bg.jpeg')

export class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            hasApiError: false
        }

        this.onLogin = this.onLogin.bind(this)
    }

    onLogin() {
        const { login, password } = this.state

        if (login && password) {
            AuthService
                .login(login, password)
                .then(async () => {
                    await AsyncStorage.setItem('username', this.state.login)
                    this.props.navigation.navigate('Main')
                })
                .catch(() => this.setState({
                    hasApiError: true
                }))

        }
    }

    renderBackButton() {
        return (
            <BackButton
                onBack={() => this.props.navigation.goBack()}
            />
        )
    }

    renderLoginButton() {
        return (
            <Button
                text="Zaloguj się"
                color={colors.peterReaver}
                textColor={colors.white}
                onPress={this.onLogin}
            />
        )
    }

    renderInputs() {
        return (
            <Fragment>
                <Input
                    placeholder="Login"
                    value={this.state.login}
                    onChange={event => this.setState({
                        login: event.nativeEvent.text
                    })}
                />
                <Input
                    placeholder="Hasło"
                    secureTextEntry
                    value={this.state.password}
                    onChange={event => this.setState({
                        password: event.nativeEvent.text
                    })}
                />
            </Fragment>
        )
    }

    renderErorr() {
        return this.state.hasApiError ? (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    Login lub hasło są niepoprawne
                </Text>
            </View>
        ) : null
    }

    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={background}
                resizeMode="cover"
            >
                {this.renderErorr()}
                {this.renderInputs()}
                {this.renderLoginButton()}
                {this.renderBackButton()}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    errorContainer: {
        backgroundColor: colors.azarin,
        padding: 10
    },
    errorText: {
        color: colors.white
    }
})
