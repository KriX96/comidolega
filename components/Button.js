import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[
                    styles.button,
                    {
                        backgroundColor: this.props.disabled && this.props.disabledColor ?
                            this.props.disabledColor :
                            this.props.color
                    }
                ]}
            >
                <Text
                    style={[
                        styles.text,
                        {
                            color: this.props.textColor
                        }
                    ]}
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 200,
        borderRadius: 10,
        justifyContent: 'center',
        margin: 5
    },
    text: {
        textAlign: 'center',
        fontSize: 18
    }
})
