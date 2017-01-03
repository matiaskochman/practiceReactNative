import React, { Component } from 'react';
import { Platform,Image,ScrollView,StatusBar,StyleSheet,Text,TouchableHighlight,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Util from '../../Utils';


const weatherData = [
  { key:0,
    city:"Buenos Aires",
    night:!0,
    bg:require("../../img/w2.png"),
    abs:"almagro",
    degree:15,
    today:{week:"21",day:"lunes",high:16,low:14},
    hours:
          [{key:101,time:"0",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},
          {key:102,time:"1",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},
          {key:103,time:"2",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
          {key:104,time:"3",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
          {key:105,time:"4",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
          {key:106,time:"5",icon:"ios-sunny-outline",degree:"16\xb0",color:"#fedf32"},
          {key:107,time:"6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
          {key:108,time:"7",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
          {key:109,time:"8",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},
          {key:110,time:"9",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},
          {key:111,time:"10",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},
          {key:112,time:"11",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
          {key:113,time:"12",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
          {key:114,time:"13",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
          {key:115,time:"14",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},
          {key:116,time:"15",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},
          {key:117,time:"16",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},
          {key:118,time:"17",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
          {key:119,time:"18",icon:"ios-partly-sunny-outline",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
          {key:120,time:"19",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
          {key:121,time:"20",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
          {key:122,time:"21",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
          {key:123,time:"22",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
          {key:124,time:"23",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],
    days:
          [{key:21,day:"lunes",icon:"ios-partly-sunny",high:21,low:16},
          {key:22,day:"martes",icon:"ios-rainy",high:22,low:14},
          {key:23,day:"miercoles",icon:"ios-rainy",high:21,low:11},
          {key:24,day:"jueves",icon:"ios-rainy",high:12,low:8},
          {key:25,day:"viernes",icon:"ios-rainy",high:9,low:7},
          {key:26,day:"sabado",icon:"ios-partly-sunny",high:13,low:9},
          {key:27,day:"domingo",icon:"ios-rainy",high:17,low:13},
          {key:28,day:"lunes",icon:"ios-partly-sunny",high:18,low:14},
          {key:29,day:"martes",icon:"ios-partly-sunny",high:22,low:17}],
    info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
    rise:"06:21",
    down:"18:06",
    prop:"10%",
    humi:"94%",
    dir:"up ",
    speed:"3",
    feel:"15\xb0",
    rain:"0.0",
    pres:"1,016",
    sight:"5.0",
    uv:"0"},
{   key:1,
    city:"Barcelona",
    night:!1,bg:require("../../img/w3.png"),
    abs:"Gracia",
    degree:15,
    today:{week:"\u661f\u671f\u516d",day:"\u4eca\u5929",high:16,low:14},
    hours:[{key:101,time:"\u73b0\u5728",icon:"ios-moon",degree:"15\xb0",color:"rgba(255,255,255,1)"},
        {key:102,time:"3\u65f6",icon:"ios-cloudy-night",degree:"15\xb0",color:"rgba(255,255,255,0.8)"},
        {key:103,time:"4\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
        {key:104,time:"5\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
        {key:105,time:"6\u65f6",icon:"ios-cloudy-night",degree:"16\xb0",color:"rgba(255,255,255,0.8)"},
        {key:106,time:"06:21",icon:"ios-sunny-outline",degree:"\u65e5\u51fa",color:"#fedf32"},
        {key:107,time:"7\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
        {key:108,time:"8\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
        {key:109,time:"9\u65f6",icon:"ios-sunny",degree:"19\xb0",color:"#fedf32"},
        {key:110,time:"10\u65f6",icon:"ios-sunny",degree:"122\xb0",color:"#fedf32"},
        {key:111,time:"11\u65f6",icon:"ios-sunny",degree:"23\xb0",color:"#fedf32"},
        {key:112,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
        {key:113,time:"13\u65f6",icon:"ios-sunny",degree:"22\xb0",color:"#fedf32"},
        {key:114,time:"14\u65f6",icon:"ios-partly-sunny",degree:"16\xb0",color:"rgba(255,255,255,0.9)"},
        {key:115,time:"15\u65f6",icon:"ios-partly-sunny",degree:"22\xb0",color:"rgba(255,255,255,0.9)"},
        {key:116,time:"16\u65f6",icon:"ios-partly-sunny",degree:"21\xb0",color:"rgba(255,255,255,0.9)"},
        {key:117,time:"17\u65f6",icon:"ios-partly-sunny",degree:"19\xb0",color:"rgba(255,255,255,0.9)"},
        {key:118,time:"18\u65f6",icon:"ios-partly-sunny",degree:"18\xb0",color:"rgba(255,255,255,0.9)"},
        {key:119,time:"18:06",icon:"ios-partly-sunny-outline",degree:"\u65e5\u843d",color:"rgba(255,255,255,0.9)"},
        {key:120,time:"19\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
        {key:121,time:"20\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
        {key:122,time:"21\u65f6",icon:"ios-cloudy-night",degree:"18\xb0",color:"rgba(255,255,255,0.8)"},
        {key:123,time:"22\u65f6",icon:"ios-cloudy-night",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
        {key:124,time:"23\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
        {key:125,time:"0\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
        {key:126,time:"1\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"},
        {key:127,time:"2\u65f6",icon:"ios-cloudy",degree:"17\xb0",color:"rgba(255,255,255,0.8)"}],
    days:[{key:21,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:21,low:16},
        {key:22,day:"\u661f\u671f\u4e8c",icon:"ios-rainy",high:22,low:14},
        {key:23,day:"\u661f\u671f\u4e09",icon:"ios-rainy",high:21,low:11},
        {key:24,day:"\u661f\u671f\u56db",icon:"ios-rainy",high:12,low:8},
        {key:25,day:"\u661f\u671f\u4e94",icon:"ios-rainy",high:9,low:7},
        {key:26,day:"\u661f\u671f\u516d",icon:"ios-partly-sunny",high:13,low:9},
        {key:27,day:"\u661f\u671f\u65e5",icon:"ios-rainy",high:17,low:13},
        {key:28,day:"\u661f\u671f\u4e00",icon:"ios-partly-sunny",high:18,low:14},
        {key:29,day:"\u661f\u671f\u4e8c",icon:"ios-partly-sunny",high:22,low:17}],
    info:"\u4eca\u5929\uff1a\u4eca\u5929\u5927\u90e8\u591a\u4e91\u3002\u73b0\u5728\u6c14\u6e29 15\xb0\uff1b\u6700\u9ad8\u6c14\u6e2923\xb0\u3002",
    rise:"06:21",down:"18:06",prop:"10%",
    humi:"94%",
    dir:"down ",
    speed:"3",
    feel:"15\xb0",
    rain:"0.0",
    pres:"1,016 ",
    sight:"5.0",
    uv:"0"}];

class Weather extends Component{

  constructor(){
    super();
    this.state = {
      weather: weatherData,
    }
  }


  render(){

    const slides = this.state.weather.map((element,index) => {

      const hourView = element.hours.map((hourElem, hourIndex) => {
        return (
          <View key={hourElem.key} style={{width:55,}}>
            <Text style={hourIndex==0? {
              color:"#fff",
              fontSize:13,
              textAlign:"center",
              fontWeight:"500",
            }:{
              color:"#fff",
              fontSize:12,
              textAlign:"center"
            }}>{hourElem.time}</Text>
            <Icon name={hourElem.icon} size={25} style={[{
              textAlign:"center",
              paddingTop:5,
            },{color:hourElem.color}]}></Icon>
            <Text style={hourIndex==0? {
              color:"#fff",
              fontSize:15,
              textAlign:"center",
              paddingTop:5,
              fontWeight:"500"
            }:{
              color:"#fff",
              fontSize:14,
              paddingTop:5,
              textAlign:"center"
            }}>{hourElem.degree}</Text>
          </View>
        );
      });

      const dayView = element.days.map((dayElem, dayIndex) => {
        return (
          <View key={dayElem.key} style={{flexDirection:"row",height: 28}}>
            <View style={{justifyContent:"center",alignItems:"flex-start",flex:1,}}>
              <Text style={{color:"#fff",paddingLeft:20,fontSize:15,}}>{dayElem.day}</Text>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",flex:1,}}>
              <Icon name={dayElem.icon}  style={{color:"#fff"}} size={25}></Icon>
            </View>
            <View style={{justifyContent:"flex-end",alignItems:"center",flex:1,flexDirection:"row",paddingRight:25,}}>
              <Text style={{color:"#fff",width:35,fontSize:16,textAlign:"right"}}>{dayElem.high}</Text>
              <Text style={element.night?{
                color:"#aaa",
                width:35,
                fontSize:16,
                textAlign:"right"
              }:{
                color:"#eee",
                width:35,
                fontSize:16,
                textAlign:"right"
              }}>{dayElem.low}</Text>
            </View>
          </View>
        );
      });
        return(
          <View key={element.key}>
            {/*la imagen es el fondo de pantalla*/}
            <Image style={styles.image} source={element.bg}></Image>
            <ScrollView showsVerticalScrollIndicator={true} style ={{backgroundColor:"transparent",position: "absolute",width: Util.size.width,
              left:0,
              top: 20,
              height: Util.size.height - 53
            }}>
                <View style={{paddingTop:70,alignItems:"center",paddingBottom:60,}}>
                  <Text style={{fontSize:25,color:"#fff",paddingBottom: 5,backgroundColor:"transparent"}}>{element.city}</Text>
                  <Text style={{fontSize:15,color:"#fff",backgroundColor:"transparent"}}>{element.abs}</Text>
                  <Text style={{fontSize:85,color:"#fff",fontWeight: "100",}}>{element.degree}</Text>
                  <Text style={{fontSize:35,color:"#fff",fontWeight: "300",position:"absolute",top:130,right:Util.size.width/2-55,}}>°</Text>
                </View>
                <View style={{flexDirection:"column"}}>
                  <View style={{flexDirection:"row",width: Util.size.width,}}>
                    <View style={{flex:1,flexDirection:"row",justifyContent: 'flex-start',paddingLeft: 20,}}>
                      <Text style={{fontSize:15,color: "#fff",fontWeight: "400",width:50,}}>{element.today.week}</Text>
                      <Text style={{fontSize:15,color: "#fff",fontWeight: "300",width:50,}}>{element.today.day}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row",justifyContent: 'flex-end',paddingRight: 10,}}>
                      <Text style={{fontSize:16,color: "#fff",fontWeight: "200",width:30,}}>{element.today.high}</Text>
                      <Text style={element.night?{
                        fontSize:16,
                        color: "#aaa",
                        fontWeight: "200",
                        width:30,
                      }:{
                        fontSize:16,
                        color: "#eee",
                        fontWeight: "200",
                        width:30,
                      }}>{element.today.low}</Text>
                    </View>
                  </View>
                  <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{
                    marginTop:3,
                    borderTopColor:"rgba(255,255,255,0.7)",borderTopWidth:Util.pixel,
                    borderBottomColor:"rgba(255,255,255,0.7)",borderBottomWidth:Util.pixel
                  }}>
                    <View style={{
                      paddingLeft:7,paddingTop:10,paddingBottom:10,paddingRight:10,flexDirection:"row",flexWrap:"nowrap"}}>
                      {hourView}
                    </View>
                  </ScrollView>
                  <View style={{paddingTop:5}}>
                    {dayView}
                  </View>
                </View>
            </ScrollView>
          </View>
        );

    });

    return(
      <View style={{paddingTop:64}}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          paginationStyle={{bottom:10, paddingTop:10, borderTopColor:"rgba(255,255,255,0.7)", borderTopWidth:Util.pixel}}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,0.2)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: 'rgba(255,255,255,0.5)', width: 6, height: 6, borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}>
            {slides}
        </Swiper>
      </View>
    );
  }
}
export default Weather;

const styles = StyleSheet.create({});
