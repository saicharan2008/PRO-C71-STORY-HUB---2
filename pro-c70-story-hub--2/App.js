import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator=createBottomTabNavigator({
  WRITESTORY:{screen:WriteStoryScreen},
  READSTORY:{screen:ReadStoryScreen}
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName=navigation.state.routeName;
    if(routeName==="WRITESTORY"){
      return(
        <Image style={{width:30,height:30,}}source={require("./write.png")}/>
      )
    }else if(routeName==="READSTORY"){
 return(
        <Image style={{width:30,height:30,}}source={require("./read.png")}/>
     )}}})})

const AppContainer =  createAppContainer(TabNavigator);