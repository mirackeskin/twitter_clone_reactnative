import { SafeAreaView, StyleSheet, Text, View ,Dimensions, ScrollView, TouchableOpacity,Image, TextInput} from 'react-native'
import React from 'react'

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from '@react-navigation/native';

const {width,height}=Dimensions.get("screen");

const MessageContentHeaderBar=(props)=>{
    const {name,username}=props;
    const Navigation=useNavigation();
    return(
        <SafeAreaView style={styles.messageContentHeaderBarWrapper}>
            <View>
                <TouchableOpacity onPress={()=>Navigation.navigate("messageBoxScreen")}>
                    <Icon name="arrow-back-outline" style={{borderRadius:9999,padding:5}} size={width/14}></Icon>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{fontWeight:"bold",fontSize:20}}>{name}</Text>
                <Text>@{username}</Text>
            </View>
            <View>
                <Icon name="information-circle-outline" size={width/14}></Icon>
            </View>
        </SafeAreaView>
    )
}

const MessageContentUserİnfo=(props)=>{
    const {name,username}=props;
    return(
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",paddingVertical:width/41,borderBottomWidth:1,borderBottomColor:"gainsboro"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:2}}>
                <Text style={{fontSize:width/22,fontWeight:"bold",color:"black"}}>{name}</Text>
                <Text style={{fontSize:width/30,color:"#0569EF"}}>@{username}</Text>
            </View>
            <View style={{paddingVertical:2}}>
                <Text style={{fontSize:width/24}}>#SoftwareEngineer | #Photographer </Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",paddingVertical:2}}>
                <Text style={{fontSize:width/30,paddingHorizontal:5}}>345 Takip Edilen</Text>
                <Text style={{fontSize:width/30,paddingHorizontal:5}}>544 Takipçi</Text>
            </View>
        </View>
    )
}

const SendMessage=(props)=>{
    const {message}=props;
    return(
        <View style={{paddingVertical:20}}>
            <View style={{justifyContent:"center",alignItems:"flex-end"}}>
                <Text style={styles.sendTextStyle}>{message}</Text>
            </View>
        </View>
    )
}

const ComingMessage=(props)=>{
    const {image,message}=props;
    return(
        <View style={{paddingVertical:20,flexDirection:"row",alignItems:"center"}}>
            <View style={{backgroundColor:"green",borderRadius:999}}>
                <Image style={styles.tinyLogo} source={image}/>
            </View>
            <View style={{justifyContent:"center",alignItems:"flex-start",maxWidth:"70%"}}>
                <Text style={styles.comingTextStyle}>{message}</Text>
            </View>
        </View>
    )
}

const MessageContentScreen = () => {
    const Route=useRoute();
    const image=Route.params.image;
    const name=Route.params.name;
    const username=Route.params.username;
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",justifyContent:"space-between"}}>
      <View style={{height:"92%"}}>
        <MessageContentHeaderBar name={name} username={username}></MessageContentHeaderBar>
        <ScrollView>
            <MessageContentUserİnfo name={name} username={username}></MessageContentUserİnfo>
            <SendMessage message="Hello ! How are you?"></SendMessage>
            <ComingMessage message="Hello :) I'm fine.And you?" image={image}></ComingMessage>  

            <SendMessage message="Thanks :) How do you do?"></SendMessage>
            <ComingMessage message="I'm write a code.U?" image={image}></ComingMessage> 
            <SendMessage message="Me too :=)"></SendMessage>          
        </ScrollView>
      </View>
      <View style={{height:49,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:width/82}}>
        <View style={{flexDirection:"row"}}>
            <Icon name="image-outline" style={{padding:5,color:"#1A8CD8"}} size={width/14}></Icon>
            <Icon name="terminal-outline" style={{padding:5,color:"#1A8CD8"}} size={width/14}></Icon>
        </View>
        <View style={{flexGrow:1,padding:width/82}}>
            <TextInput style={{borderWidth:1,borderColor:"transparent",borderBottomColor:"gainsboro"}} placeholder="Bir mesaj başlat"></TextInput>
        </View>
        <View>
            <Icon name="send-outline" style={{padding:5,color:"#1A8CD8"}} size={width/14}></Icon>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MessageContentScreen

const styles = StyleSheet.create({
    messageContentHeaderBarWrapper:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        paddingHorizontal:width/41,
        paddingVertical:width/41,
        borderBottomColor:"gainsboro",
        borderBottomWidth:1
    },
    sendTextStyle:{
        maxWidth:"70%",
        color:"white",
        backgroundColor:"#1A8CD8",
        fontSize:width/26,
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomRightRadius:20,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    tinyLogo:{
        width:width/10,
        height:width/10,
        borderRadius:9999
    },
    comingTextStyle:{
        width:"100%",
        backgroundColor:"gainsboro",
        fontSize:width/26,
        paddingVertical:10,
        paddingHorizontal:20,
        borderBottomLeftRadius:20,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    }
})