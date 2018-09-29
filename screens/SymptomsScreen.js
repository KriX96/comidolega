import React from 'react'
import { StyleSheet, View, Text, CheckBox, ScrollView } from 'react-native'
import { SymptomsService } from '../services'
import { Button } from '../components'
import { colors, window } from '../constants'

export class SymptomsScreen extends React.Component {
    static navigationOptions = {
        title: 'Co mi dolega',
    }

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            fetchSymptomsError: false,
            symptoms: [],
            selectedSymptoms: []
        }

        this.examine = this.examine.bind(this)
        this.renderSymptom = this.renderSymptom.bind(this)
    }

    componentDidMount() {
        SymptomsService
            .getSymptomsList()
            .then(response => {this.setState({
                symptoms: response.result,
                isLoading: false
            })})
            .catch(() => this.setState({
                fetchSymptomsError: true,
                isLoading: false
            }))
    }

    examine() {
        const { selectedSymptoms } = this.state

        SymptomsService
            .checkSymptoms(selectedSymptoms)
            .then(response =>  this.props.navigation.navigate('Result', {
                disease: response.disease,
                hint: response.hint
            }))
            .catch(() => this.props.navigation.navigate('Result', {
                result: 'Brak wyników',
                hint: undefined
            }))
    }

    renderHeading() {
        return (
            <Text style={styles.heading}>
                Moje symptomy:
            </Text>
        )
    }

    renderSymptoms() {
        const { isLoading, fetchSymptomsError, symptoms } = this.state

        if (isLoading || fetchSymptomsError) {
            return (
                <View style={styles.loader}>
                    <Text style={styles.loaderText}>
                        {isLoading && 'trwa wczytywanie symptomów...'}
                        {fetchSymptomsError && 'wystąpił błąd podczas wczytywanie symptomów'}
                    </Text>
                </View>
            )
        }

        return (
            <ScrollView
                style={styles.symptomsList}
                contentContainerStyle={{
                    width: window.width
                }}
            >
                {symptoms.map(this.renderSymptom)}
            </ScrollView>
        )
    }

    renderSymptom({ symptoms }, index) {
        const isSelected = this.state.selectedSymptoms.find(s => s === symptoms)

        return (
            <View
                key={index}
                style={styles.symptom}
            >
                <CheckBox
                    value={Boolean(isSelected)}
                    onValueChange={value => {
                        if (value) {
                            return this.setState({
                                selectedSymptoms: [
                                    ...this.state.selectedSymptoms,
                                    symptoms
                                ]
                            })
                        }

                        this.setState({
                            selectedSymptoms: this.state.selectedSymptoms
                                .filter(s => s !== symptoms)
                        })
                    }}
                />
                <Text>
                    {symptoms}
                </Text>
            </View>
        )
    }

    renderButton() {
        return (
            <Button
                text="Przebadaj mnie"
                textColor={colors.white}
                color={colors.turquoise}
                onPress={this.examine}
                disabledColor={colors.asbestos}
                disabled={this.state.selectedSymptoms.length === 0}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeading()}
                {this.renderSymptoms()}
                {this.renderButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 22
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    loaderText: {
        textAlign: 'center'
    },
    symptomsList: {
        marginVertical: 20,
    },
    symptom: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
