import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/Ionicons";

const {width,height}=Dimensions.get("screen");

const HeaderBarHome = () => {
    
  return (
    <SafeAreaView style={styles.headerBarMainWrapper}>
      <View style={styles.headerBarImageWrapper}>
        <Image style={styles.tinyLogo} source={require('../images/myProfile.jpg')}/>
      </View>
      <View style={styles.headerBarAppIconWrapper}>
        <Icon name="logo-twitter" style={{color:"#1A8CD8"}} size={width/14}></Icon>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="star-outline" size={width/18}></Icon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBarHome

const styles = StyleSheet.create({
  headerBarMainWrapper:{
    flexDirection:"row",
    width:"100%",
    height:height/15,
    justifyContent:'space-between',
    alignItems:"center",
    paddingHorizontal:width/82,
    borderBottomWidth:2,
    borderBottomColor:"gainsboro",
  },
  tinyLogo:{
    width:width/10,
    height:width/10,
    borderRadius:9999
  },
  headerBarImageWrapper:{
    width:width/10,
    height:width/10,
    borderRadius:9999
  },
  headerBarAppIconWrapper:{
    width:"70%",
    height:"80%",
    justifyContent:"center",
    alignItems:"center"
  }
})