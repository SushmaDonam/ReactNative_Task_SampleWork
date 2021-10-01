
import React, { Component } from 'react';

import { Text, View,StyleSheet } from 'react-native';
import Video from 'react-native-video';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"#D3D3D3"
  },
  backgroundVideo: {
    position: 'absolute',
    top: 30,
    left: 20,
    bottom: 30,
    right: 20,
  },
})

export default class Screen3 extends React.Component {
  onBuffer = () => {
    alert("Please try again later")
  }
  videoError = () => {
    alert("Something went wrong")
  }
  render() {
    const data = this.props.navigation?.getParam('videoValue');
   
    return (
      <View style={styles.container}>
    <Video source={{uri: data}}   
       ref={(ref) => {
         this.player = ref
       }}                                      
       onBuffer={() => this.onBuffer}                
       onError={() => this.videoError}             
       style={styles.backgroundVideo}
       controls={true}
        />
      </View>
    );
  }
}