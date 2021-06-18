import React from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity,TextInput,Image} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import db from'../config.js';


export default class TransactionScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hasCameraPermissions:null,
      author:'',
      storyText:'',
      title:'',
      }
      }
      
submitStory=()=>{
  db.collection('stories').add({
    author:this.state.author,
    storyText:this.state.storyText,
    title:this.state.title,
  })
  this.setState({
     author:'',
      storyText:'',
      title:'',
  })
 
}

render(){
  return(
      <View style={styles.container}>
      <View>
      <Text style={{textAlign:'center',fontSize:30,backgroundColor:'lightgreen'}}>StoryHub</Text>
      </View>
      <View style={styles.inputView}>
       <TextInput style={styles.inputBox} placeHolder="TITLE OF STORY"/>
      </View>
       <View style={styles.inputView}>
       <TextInput style={styles.inputBox} placeHolder="AUTHOR OF STORY"/>
      </View>
      <TextInput style={styles.storyBox} placeHolder="WRITE YOUR STORY HERE"/>
      <TouchableOpacity onPress={this.submitStory} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
      </View>
      )}}

const styles=StyleSheet.create({
  container:{
textAlign:'center',
backgroundColor:'lightgreen',
flex:1,
justifyContent:'center,'
  },
inputView:{
flexDirection:'row',
margin:20,
alignSelf:'center',
},
inputBox:{
width:200,
height:40,
borderWidth:1.5,
borderRightWidth:1.5,
backgroundColor:'lightblue',
fontSize:20,
},
storyBox:{
width:200,
alignSelf:'center',
height:200,
borderWidth:1.5,
borderRightWidth:1.5,
backgroundColor:'lightblue',
fontSize:30,
},
submitButton:{
width:200,
height:50,
backgroundColor:'#fbco2d',
alignSelf:'center',
},
submitButtonText:{
padding:10,
textAlign:'center',
color:'white',
alignSelf:'center',
fontSize:20,
fontWeight:'bold',
}})