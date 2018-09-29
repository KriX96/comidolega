import React from 'react'
import { StyleSheet, ImageBackground, Image, AsyncStorage } from 'react-native'
import { Button } from '../components'
import { window, colors } from '../constants'

const background = require('../assets/images/bg.jpeg')
const logo = require('../assets/images/logo.png')

export class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    async componentWillMount() {
        const isLoggedIn = await AsyncStorage.getItem('username')

        if (isLoggedIn) {
            return this.props.navigation.navigate('Main')
        }

        this.setState({
            isLoading: false
        })
    }

    render() {
        return !this.state.isLoading ? (
            <ImageBackground
                style={styles.container}
                source={background}
                resizeMode="cover"
            >
                <Image
                    source={logo}
                    style={{
                        height: 200,
                        width: window.width - 50,
                    }}
                />
                <Button
                    text="Zaloguj się"
                    color={colors.peterReaver}
                    textColor={colors.white}
                    onPress={() => this.props.navigation.navigate('Login')}
                />
                <Button
                    text="Rejestracja"
                    color={colors.emerald}
                    textColor={colors.white}
                    onPress={() => this.props.navigation.navigate('Register')}
                />
            </ImageBackground>
        ) : null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})
