import { StyleSheet, Text, View,ScrollView,Dimensions,Image } from 'react-native'
import React from 'react'
import HeaderBarNotifications from '../components/HeaderBarNotifications'

import Icon from "react-native-vector-icons/Ionicons";

const {width,height}=Dimensions.get("screen");

const NotificationCard=(props)=>{
  const {image,name,type,content}=props;
  return(
    <View style={styles.NotificationsCardMainWrapper}>
      <View style={styles.leftBox}>
        <Icon name="heart" style={{borderRadius:9999,padding:10,color:"#EF0056"}} size={width/13}></Icon>
      </View>
      <View style={styles.rightBox}>
        <View>
          <Image style={styles.tinyLogo} source={image}/>
        </View>
        <View>
          <Text style={{color:"gray",fontSize:16,margin:1}}><Text style={{color:"black",fontSize:17}}>{name} </Text>{type}</Text>
          <Text style={{color:"gray",fontSize:15,margin:1}}>{content}</Text>
        </View>
      </View>
    </View>
  )
}

const NotificationsScreen = () => {
  return (
    <ScrollView style={{backgroundColor:"transparent"}}>
      <HeaderBarNotifications></HeaderBarNotifications>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile4.png')} name="Jane Doe" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Her şey çok güzel olacak :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile4.png')} name="Jane Doe" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Her şey çok güzel olacak :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile4.png')} name="Jane Doe" type="Tweetini Beğendi" content="Bugün çok güzel bir gün :-)"></NotificationCard>
      <NotificationCard image={require('../images/profile3.png')} name="Barbara Palm" type="Tweetini Beğendi" content="Her şey çok güzel olacak :-)"></NotificationCard>
    </ScrollView>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
  NotificationsCardMainWrapper:{
    backgroundColor:"transparent",
    width:"100%",
    flexDirection:"row",
    padding:5,
    borderBottomColor:"gainsboro",
    borderBottomWidth:1
  },
  leftBox:{
    justifyContent:"flex-start",
    alignItems:"flex-end"
  },
  rightBox:{
    flexDirection:"column",    
  },
  tinyLogo:{
    width:width/10,
    height:width/10,
    borderRadius:9999
  },
})