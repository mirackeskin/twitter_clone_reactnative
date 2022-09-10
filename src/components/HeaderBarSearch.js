import { SafeAreaView, StyleSheet, Text, View ,Image, TextInput, TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/Ionicons";

const {width,height}=Dimensions.get("screen");

const HeaderBarSearch = (props) => {
    const {placeholder}=props;
  return (
    <SafeAreaView style={styles.headerBarMainWrapper}>
      <View style={styles.headerBarImageWrapper}>
        <Image style={styles.tinyLogo} source={require('../images/myProfile.jpg')}/>
      </View>
      <View style={styles.headerBarInputWrapper}>
        <TextInput style={{borderWidth:1,borderColor:"gainsboro",backgroundColor:"gainsboro",borderRadius:20}} placeholder={placeholder}></TextInput>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="settings-outline" size={width/18}></Icon>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HeaderBarSearch

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
  headerBarInputWrapper:{
    width:"70%",
    height:"80%"
  }
})