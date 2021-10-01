
import React, { Component } from 'react';

import { Text, View, Image, FlatList, TouchableOpacity, AsyncStorage, } from 'react-native';


export default class Screen1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      JSONResult: [],
      anotherData:[],
      updated:false,
      loading:false
    }
  }
   componentDidUpdate(prevState) {
    if (prevState.anotherData !== this.state.anotherData) {
      AsyncStorage.getItem("FinalRenderItems").then(valor => {
        const val = JSON.parse(valor);
        this.setState({ anotherData: val});
      });
    }
  }

  componentDidMount() {
    this.getListCall();
  }
  getNavigation = (item) => {

    if (item?.type == "article") {

      this.props.navigation.navigate('Article', {
        itemValue: item,
      })
    }
    else if (item?.type == "video") {
      this.props.navigation.navigate('Video', {
        videoValue: item?.video_link
      })
    }
  }

  getListCall() {

    fetch("https://cw-tech.herokuapp.com/feed.json")
      .then(response => response.json())
      .then((responseJson) => {
        const values = responseJson.feed
        AsyncStorage.setItem('DataItems', JSON.stringify(values));
        this.setState({
          JSONResult: responseJson.feed,
        });

      })
      .catch(error => console.log(error))
  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={{
        marginVertical: 8,
      }} index={index}>
        <TouchableOpacity onPress={() => this.getNavigation(item)}>
        <Text style={{ fontSize: 37,paddingBottom:8 }}>{item.author.name}</Text>
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: 400, height: 200, paddingBottom: 10 }}
          />
         
          <Text style={{ fontSize: 17, alignContent: "flex-start",paddingTop:5 }}>{item.title}</Text>

        </TouchableOpacity>

      </View>

    )
  }

  keyExtractor = (item, index) => String(index)
  ItemSeparatorView = () => {
    return (

      <View
        style={{
          height: 0.7,
          width: '100%',
          backgroundColor: '#333333',
        }}
      />
    );
  };
  render() {
    console.log(this.state.anotherData)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
  
        <FlatList
          contentContainerStyle={{ paddingLeft: 2, paddingRight: 2, }}
          data={this.state.anotherData?.length > 0 ? this.state.anotherData : this.state.JSONResult}
          renderItem={this._renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.ItemSeparatorView}
        />
      </View>
    );
  }
}