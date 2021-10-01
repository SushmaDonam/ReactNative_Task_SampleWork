
import React, { Component } from 'react';

import { StyleSheet,View,Text,AsyncStorage } from 'react-native';
import { ListItem, SearchBar } from "react-native-elements";


const styles = StyleSheet.create({
  container: {
    padding: 2,
    // backgroundColor:"#D3D3D3"
  },
  
})


export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchValue: null,
      loadData:[],
      finalRes:[],
    };
    
  }
  componentDidMount () {
    AsyncStorage.getItem("DataItems").then(valor => {
      const val= JSON.parse(valor)
      this.setState({loadData: val});
    });
  
  }
  clearItems = () => {
    const some = this.state.loadData
    AsyncStorage.setItem('FinalRenderItems', JSON.stringify(some));
  }
 
  searchFunction = (text,i) => {
    const all = this.state.loadData;
    const newData = all?.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
    this.setState({
      loadData: newData,
      searchValue: text
      })
      AsyncStorage.setItem('FinalRenderItems', JSON.stringify(newData));
  }
  render() {

    return (
      <View style={styles.container}>
         <SearchBar
          placeholder="Search Here..."
          icon={{type: 'font-awesome', name: 'search'}}
          cancelIcon={{type: 'font-awesome', name: 'cancelIcon'}}
          value={this.state.searchValue}
          onChangeText={(value) => this.searchFunction(value)}
          autoCorrect={false}
          // onClear = {this.clearItems()}
        />
      </View>
    );
  }
}