import { StyleSheet, Text, View ,SafeAreaView,Image,Dimensions, TouchableOpacity,ScrollView} from 'react-native'
import React, { useState } from 'react'

import Icon from "react-native-vector-icons/Ionicons";

const {width,height}=Dimensions.get("screen");

const ProfileArea=()=>{
    return(
        <SafeAreaView style={styles.profileAreaMainWrapper}>
            <View style={styles.profileImageWrapper}>
                <Image style={styles.tinyLogo} source={require('../images/myProfile.jpg')}/>
            </View>
            <View style={styles.usernamesWrapper}>
                <Text style={{fontSize:width/20,fontWeight:"bold",margin:0,padding:0,color:"black"}}>Miraç Keskin</Text>
                <Text style={{fontSize:width/29,margin:0,padding:0,color:"gray"}}>@mirackeskin</Text>
            </View>
            <View style={styles.followersInfoWrapper}>
                <Text style={{fontSize:width/25}}>84 Takip Edilen</Text>
                <Text style={{fontSize:width/25,marginLeft:width/20}}>65 Takipçi</Text>
            </View>
        </SafeAreaView>
    )
}

const DrawerButtons=()=>{
    return(
        <SafeAreaView style={styles.drawerButtonsMainWrapper}>
            <DrawerButton icon="person-outline" title="Profil"></DrawerButton>
            <DrawerButton icon="reader-outline" title="Listeler"></DrawerButton>
            <DrawerButton icon="chatbubble-ellipses-outline" title="Konular"></DrawerButton>
            <DrawerButton icon="people-outline" title="Twitter Çevresi"></DrawerButton>
            <DrawerButton icon="bookmark-outline" title="Yer İşaretleri"></DrawerButton>
            <DrawerButton icon="flash-outline" title="An"></DrawerButton>
            <DrawerButton icon="cash-outline" title="Gelire Dönüştürme"></DrawerButton>
            <DrawerButton icon="rocket-outline" title="Profesyoneller İçin Twitter"></DrawerButton>
        </SafeAreaView>
    )
}

const DrawerButton=(props)=>{
    const [isClick,setIsClick]=useState(false);
    const {icon,title}=props;
    return(
        <SafeAreaView style={styles.drawerButtonWrapper}>
            <TouchableOpacity onPressIn={()=>setIsClick(true)} onPressOut={()=>setIsClick(false)} style={isClick ? styles.drawerButtonClick : styles.drawerButton} activeOpacity={0.1}>
                <Icon name={icon} style={{color:"black"}} size={width/18}></Icon>
                <Text style={{fontSize:width/22,marginLeft:width/41,color:"black"}}>{props.title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const DrawerSettingsArea=()=>{
    return(
        <SafeAreaView style={styles.drawerSettingsAreaWrapper}>
            <DrawerButton icon="settings-outline" title="Ayarlar ve gizlilik"></DrawerButton>
            <DrawerButton icon="help-outline" title="Yardım Merkezi"></DrawerButton>
            
        </SafeAreaView>
    )
}

const CustomDrawer = () => {
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <ProfileArea></ProfileArea>
      <ScrollView>
        <DrawerButtons></DrawerButtons>
        <DrawerSettingsArea></DrawerSettingsArea>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    mainWrapper:{
        flex:1,
        backgroundColor:"transparent"
    },
    profileAreaMainWrapper:{
        width:"100%",
        height:"30%",
        paddingHorizontal:width/82
    },
    tinyLogo:{
        width:width/5.5,
        height:width/5.5,
        borderRadius:9999
    },
    profileImageWrapper:{
        width:"100%",
        height:"50%",
        justifyContent:"center",
        alignItems:"flex-start",        
    },
    usernamesWrapper:{
        flexDirection:"column",
        width:"100%",
        height:"25%",
    },
    followersInfoWrapper:{
        flexDirection:"row",
        width:"100%",
        height:"25%",
        justifyContent:"flex-start",
        alignItems:"center",
    },
    drawerButtonsMainWrapper:{
        
        width:"100%",
    },
    drawerButtonWrapper:{
        height:height/13,
        width:"100%",
        alignItems:"flex-start",
        justifyContent:"center",
    },
    drawerButton:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:"100%",
        paddingHorizontal:width/82
    },
    drawerButtonClick:{
        backgroundColor:"gainsboro",
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        height:"100%",
        paddingHorizontal:width/82
    },
    drawerSettingsAreaWrapper:{
        width:"100%",
        borderTopColor:"gainsboro",
        borderTopWidth:0.5,
    }
})