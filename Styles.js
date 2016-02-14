// Styling for app

'use strict';

import React, {
  StyleSheet
} from 'react-native';

var Styles = StyleSheet.create({
  splashBackground: {
    flex: 1, 
    backgroundColor: '#333333', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  splashMessage: {
    color: '#ffffff', 
    fontSize: 32
  },
  logo: {
    width:70,
    height:60
  },
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
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    flex:0.5,
    alignItems: 'stretch'
  },
  imageBackButton: {
    justifyContent: 'flex-start',
    paddingLeft: 20,
    color: '#ffffff'
  },
  bigImage:{
    height:400,
    justifyContent: 'center'
  },
  textContainer: {
    backgroundColor: '#EAF8FD',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#05A5D1', 
    borderTopWidth: 2
  },
  infoHeading: {
    fontWeight: 'bold',
    fontSize: 25
  },
  info: {
    fontWeight: 'normal',
    fontSize: 25,
    marginBottom: 5
  },
  picker: {
    backgroundColor:'#EAF8FD', 
    borderTopColor: '#05A5D1', 
    borderTopWidth: 2
  }
});

module.exports = Styles;