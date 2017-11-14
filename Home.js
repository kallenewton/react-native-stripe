import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        /*
        this.state = {
          cardNumber: "4242424242424242",
          expMonth: "09",
          expYear: "18",
          cvc: "111"
        }
        */
    }
    static navigationOptions = {
        title: 'Hem'
    }

    render() {
        console.log('Home Screen!')
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>Hem!</Text>
                <Button
                    onPress={() => navigate('Booking')}
                    title="Boka"
                />
            </View>
        )
    }
}