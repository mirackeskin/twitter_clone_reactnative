import { ScrollView, StyleSheet, Text, View ,Image,Dimensions, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'


import HeaderBarSearch from '../components/HeaderBarSearch';


const {width,height}=Dimensions.get("screen");


const AgendaCard=(props)=>{
  const [click,setClick]=useState(false);
  const {agendaTitle,cardTitle}=props;
  return(
    <TouchableOpacity onPressOut={()=>setClick(false)} onPressIn={()=>setClick(true)} style={click ? styles.agendaCardWrapperClick : styles.agendaCardWrapper}>
      <Text style={{color: "gray"}}>{agendaTitle}</Text>
      <Text style={{fontSize:16,fontWeight:"bold",color:"black"}}>{cardTitle}</Text>
      <Text>1905 Tweet</Text>
    </TouchableOpacity>
  )
} 

const DiscoverScreen = () => {
  return (
    <ScrollView style={styles.discoverMainWrapper}>
      <HeaderBarSearch placeholder="Twitter'da Ara"></HeaderBarSearch>
      
      <View style={styles.covidImageWrapper}>
        <Image style={styles.covidLogo} source={require('../images/covid.jpg')}/>
        <View style={{position:"absolute",bottom:25,paddingLeft:width/40}}>
          <Text style={{color:"aliceblue", fontSize:width/24}}>Covid-19 - CANLI</Text>
          <Text style={{color:"aliceblue", fontSize:width/20}}>Türkiye'de Covid-19 ile ilgili güncel gelişmeler</Text>
        </View>
      </View>

      <View style={styles.agendasWrapper}>
        <View style={{paddingVertical:width/41}}>
          <Text style={{fontSize:width/22,fontWeight:"bold",color:"black",paddingHorizontal:width/41}}>İlginizi çekebilecek gündemler</Text>
        </View>        
        
        <AgendaCard agendaTitle="Gündemdekiler" cardTitle="Galatasaray'dan"></AgendaCard>
        <AgendaCard agendaTitle="Gündemdekiler" cardTitle="Aslan"></AgendaCard>
        <AgendaCard agendaTitle="Spor Gündeminde" cardTitle="Mauro İcardi"></AgendaCard>
        <AgendaCard agendaTitle="Gündemdekiler" cardTitle="Trabzon"></AgendaCard>
        <AgendaCard agendaTitle="Gündemdekiler" cardTitle="Miraç Keskin"></AgendaCard>

      </View>

      
      
    </ScrollView>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  discoverMainWrapper:{
    flex:1,
    backgroundColor:"transparent",
    flexDirection:"column",

  },
  covidImageWrapper:{
    backgroundColor:"red",
    width:"100%",
    height:height/3,
  },
  covidLogo:{
    backgroundColor:"orange",
    width:"100%",
    height:height/3
  },
  agendasWrapper:{
    
  },
  agendaCardWrapper:{
    backgroundColor:"transparent",
    paddingVertical:width/41,
    paddingHorizontal:width/40
  },
  agendaCardWrapperClick:{
    backgroundColor:"gainsboro",
    paddingVertical:width/41,
    paddingHorizontal:width/41
  }
})