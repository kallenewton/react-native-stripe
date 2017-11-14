import React, { Component } from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './app/screens/Home'
import BookingScreen from './app/screens/Booking'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

const StripeHowTo = StackNavigator({
  Home: { screen: HomeScreen },
  Booking: { screen: BookingScreen }
})

export default class App extends Component {
  render() {
    return <StripeHowTo />
  }
}
