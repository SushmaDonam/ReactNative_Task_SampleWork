
import React, { Component } from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';


export default class Screen2 extends React.Component {
  constructor(props) {
    super(props);
         this.state = { 
        
         }
    }
  render() {
    const data = this.props.navigation.getParam('itemValue',);  
    return (
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          paddingTop:20
        }}>
        <View>
              <TouchableOpacity>
               <Image 
    source={{uri: data?.thumbnail}}
    style={{width: 400, height: 300}}
/>
<Text style = {{fontSize:17,paddingTop:10, textAlign:'left'}}>{data?.description}</Text>
              </TouchableOpacity>
             
          </View>

      </View>
    );
  }
}