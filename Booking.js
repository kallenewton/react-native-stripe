import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../styles'

export default class BookingScreen extends Component {
    static navigationOptions = {
        title: 'Bokning',
    }
    render() {
        console.log('Booking Screen!')
        return (
            <View>
                <Text>Bokning!</Text>
            </View>
        )
    }
}
