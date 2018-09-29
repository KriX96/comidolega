import React from 'react'
import { Icon } from 'expo'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors } from '../constants'

export class BackButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onBack}
                style={styles.backButton}
            >
                <Icon.Ionicons
                    name="md-arrow-back"
                    size={20}
                    color={colors.white}
                />
                <Text style={styles.backText}>
                    Powrót
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        marginTop: 10
    },
    backText: {
        color: colors.white,
        marginLeft: 5
    }
})
