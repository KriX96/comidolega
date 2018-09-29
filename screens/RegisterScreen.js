import React, { Fragment } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { BackButton, Button, Input } from '../components'
import { colors } from '../constants'
import { AuthService } from '../services'

const background = require('../assets/images/bg.jpeg')

export class RegisterScreen extends React.Component {
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

        this.onRegister = this.onRegister.bind(this)
    }

    onRegister() {
        const { login, password } = this.state

        if (login && password) {
            AuthService
                .register(login, password)
                .then(() => this.props.navigation.navigate('Login'))
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

    renderRegisterButton() {
        return (
            <Button
                text="Zarejestruj się"
                color={colors.emerald}
                textColor={colors.white}
                onPress={this.onRegister}
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
                    Ups! Coś poszło nie tak
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
                {this.renderRegisterButton()}
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
