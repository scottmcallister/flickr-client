// Styling for app

'use strict';

import React, {
  StyleSheet
} from 'react-native';

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  header:{
    backgroundColor:'#3b3738',
    padding:20,
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row' 
  },
  content: {
    height:300,
    width: 100
  },
  inputText: {
    height: 40,
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: 'gray', 
    borderWidth: 1,
    paddingLeft:20
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 100,
    height: 100,
    borderRadius:5
  }
});

module.exports = Styles;