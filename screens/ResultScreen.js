import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../constants'

export class ResultScreen extends React.Component {
    static navigationOptions = {
        title: 'Wynik'
    }

    renderResult() {
        return (
            <Text style={styles.result}>
                {this.props.navigation.getParam('disease')}
            </Text>
        )
    }

    renderHint() {
        const hint = this.props.navigation.getParam('hint')

        return hint ? (
            <Text style={styles.hint}>
                {hint}
            </Text>
        ) : null
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderResult()}
                {this.renderHint()}
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
    result: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.azarin,
        marginBottom: 10,
    },
    hint: {
        textAlign: 'center',
        margin: 10
    }
})
