import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import HeaderBarMessageBox from '../components/HeaderBarMessageBox'
import MessageBoxCard from '../components/MessageBoxCard'

const MessageBoxScreen = () => {
  return (
    <ScrollView>
      <HeaderBarMessageBox></HeaderBarMessageBox>
      <MessageBoxCard image={require('../images/profile.jpg')} name="John Doe" username="johndoe" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile2.jpg')} name="Jane Doe" username="janedoe" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile3.png')} name="Barbara Palm" username="barbarapalm" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile4.png')} name="Barbara Palm" username="barbarapalm" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile3.png')} name="Barbara Palm" username="barbarapalm" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile2.jpg')} name="Barbara Palm" username="barbarapalm" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile.jpg')} name="John Doe" username="johndoe" date="17 Ekim"></MessageBoxCard>
      <MessageBoxCard image={require('../images/profile3.png')} name="Barbara Palm" username="barbarapalm" date="17 Ekim"></MessageBoxCard>
    </ScrollView>
  )
}

export default MessageBoxScreen

const styles = StyleSheet.create({})