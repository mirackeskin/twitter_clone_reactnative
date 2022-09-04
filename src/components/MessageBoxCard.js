import { SafeAreaView, StyleSheet, Text, View,Dimensions,Image ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
const {width,height}=Dimensions.get("screen");

const MessageBoxCard = (props) => {

    const [click,setClick]=useState(false);
    const {image,name,username,date}=props;
    
    

  return (
    <TouchableOpacity onPressOut={()=>setClick(false)} onPressIn={()=>setClick(true)} activeOpacity={0.8} style={click? styles.messageBoxCardWrapperClick : styles.messageBoxCardWrapper}>
      <View style={styles.leftSideWrapper}>
        <Image style={styles.tinyLogo} source={image} />
      </View>
      <View style={styles.rigtSideWrapper}>
        <View style={styles.messageHeaderWrapper}>
            <Text style={{fontSize:18,marginRight:width/80,color:"black"}}>{name}</Text>
            <Text style={{fontSize:16,marginRight:width/80,color:"gray"}}>@{username}</Text>
            <Text style={{fontSize:16,marginLeft:width/80,color:"gray"}}>-{date}</Text>
        </View>
        <View style={styles.messageContentWrapper}>
            <Text style={{fontSize:16,marginLeft:width/80,color:"gray"}}>Mesaj içeriği buradadır..Bu bir mesaj denemesidir.</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MessageBoxCard

const styles = StyleSheet.create({
    messageBoxCardWrapper:{
        width:"100%",
        height:80,
        flexDirection:"row",
        marginVertical:height/80,
    },
    messageBoxCardWrapperClick:{
        width:"100%",
        height:80,
        flexDirection:"row",
        marginVertical:height/80,
        backgroundColor:"gainsboro"
    },
    leftSideWrapper:{
        width:"25%",
        justifyContent:"center",
        alignItems:"center"
    },
    tinyLogo:{
        width:height/10,
        height:height/10,
        borderRadius: 9999,
    },
    rigtSideWrapper:{
        width:"75%",
        flexDirection:"column"
    },
    messageHeaderWrapper:{
        flexDirection:"row",
        justifyContent:'flex-start'
    }
})