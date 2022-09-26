import { StyleSheet, Text, View,ScrollView ,Dimensions,Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

import Icon from "react-native-vector-icons/Ionicons";
import HeaderBarHome from '../components/HeaderBarHome'

const {width,height}=Dimensions.get("screen");

const TweetCard=(props)=>{
  
  const {name,username,tweetContent,image}=props;
  const [like,setLike]=useState(false);
  const [retweet,setRetweet]=useState(false);

  return(
    <View style={styles.tweetCardMainWrapper}>
      <View style={styles.tweetCardLeftBox}>
        <Image style={styles.tinyLogo} source={image} />
      </View>
      <View style={styles.tweetCardRightBox}>
        <View style={{flexDirection:"row",marginBottom:5}}>
          <Text style={{color:"black",fontSize:width/24,color:"black"}}>{name} </Text>
          <Text style={{color:"gray",fontSize:width/24}}>@{username}</Text>
        </View>
        <View style={{flexDirection:"row",marginBottom:5}}>
          <Text style={{fontSize:width/23}}>{tweetContent}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"70%",marginBottom:5}}>
          <TouchableOpacity><Icon name="chatbubble-outline" size={width/18}></Icon></TouchableOpacity>
          <TouchableOpacity onPress={()=>setRetweet(!retweet)}>{retweet ? <Icon name="repeat-outline" style={{color:"green"}} size={width/18}></Icon> : <Icon name="repeat-outline" size={width/18}></Icon>}</TouchableOpacity>
          <TouchableOpacity onPress={()=>setLike(!like)}>{like ? <Icon name="heart" style={{color:"#EF0056"}} size={width/18}></Icon> : <Icon name="heart-outline" size={width/18}></Icon>}</TouchableOpacity>
          <TouchableOpacity><Icon name="share-social-outline" size={width/18}></Icon></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <ScrollView>
      <HeaderBarHome></HeaderBarHome>
      <TweetCard name="Miraç Keskin" username="mirackeskin" tweetContent="Bugün herşey çok güzel ilerliyor.Bence harika bir gün olacak..:-)" image={require('../images/myProfile.jpg')}></TweetCard>
      <TweetCard name="Barbara Palm" username="barbarapalm" tweetContent="Bu ne güzel bir gün böyle :-)" image={require('../images/profile2.jpg')}></TweetCard>
      <TweetCard name="Jane Doe" username="janedoe" tweetContent="Hay aksi bu yağmur nereden çıktı böyle ??" image={require('../images/profile4.png')}></TweetCard>
      <TweetCard name="Barbara Palm" username="barbarapalm" tweetContent="Bu ne güzel bir gün böyle :-)" image={require('../images/profile2.jpg')}></TweetCard>
      <TweetCard name="Angela Barbaro" username="angela" tweetContent="Harika bir konser oluyor doğrusu.." image={require('../images/profile3.png')}></TweetCard>
      <TweetCard name="Jane Doe" username="janedoe" tweetContent="Hay aksi bu yağmur nereden çıktı böyle ??" image={require('../images/profile4.png')}></TweetCard>
      <TweetCard name="Barbara Palm" username="barbarapalm" tweetContent="Bu ne güzel bir gün böyle :-)" image={require('../images/profile2.jpg')}></TweetCard>
      <TweetCard name="Angela Barbaro" username="angela" tweetContent="Harika bir konser oluyor doğrusu.." image={require('../images/profile3.png')}></TweetCard>
      <TweetCard name="Jane Doe" username="janedoe" tweetContent="Hay aksi bu yağmur nereden çıktı böyle ??" image={require('../images/profile4.png')}></TweetCard>
      <TweetCard name="Barbara Palm" username="barbarapalm" tweetContent="Bu ne güzel bir gün böyle :-)" image={require('../images/profile2.jpg')}></TweetCard>
      <TweetCard name="Angela Barbaro" username="angela" tweetContent="Harika bir konser oluyor doğrusu.." image={require('../images/profile3.png')}></TweetCard>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  tinyLogo:{
    width:width/100*15,
    height:width/100*15,
    borderRadius: 9999,
},
tweetCardMainWrapper:{
  flexDirection:"row",
  flex:1,
  width:"100%",
  marginTop:5,
  marginBottom:5,
  borderBottomColor:"gainsboro",
  borderBottomWidth:1,
},
tweetCardLeftBox:{
  width:width/100*15,
  justifyContent:"flex-start",
  alignItems:"center"
},
tweetCardRightBox:{
  width:width/100*85,
  paddingLeft:10
}


})