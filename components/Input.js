import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../constants'

export class Input extends React.Component {
    render() {
        return (
            <TextInput
                {...this.props}
                style={styles.input}
                underlineColorAndroid={colors.transparent}
                autoCapitalize="none"
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.white,
        width: 200,
        height: 40,
        margin: 5,
        borderRadius: 10,
        fontSize: 18,
        padding: 5
    }
})
