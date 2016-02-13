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
    backgroundColor:'#81c04d',
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
    borderWidth: 1
  }
});

module.exports = Styles;