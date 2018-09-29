import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { AppNavigator } from './navigation'

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    }

    loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/bg.jpeg'),
                require('./assets/images/logo.png'),
            ]),
            Font.loadAsync({
                ...Icon.Ionicons.font
            }),
        ])
    }

    handleLoadingError = error => {
        console.warn(error)
    }

    handleFinishLoading = () => {
        this.setState({
            isLoadingComplete: true
        })
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading}
                />
            )
        }

        return (
            <View style={styles.container}>
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
