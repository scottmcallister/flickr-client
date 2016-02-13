// iOS version of app

'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

var Styles = require('./Styles');

var SplashPage = require('./SplashPage');
var SearchPage = require('./SearchPage');
//var Results = require('./Results');
//var ImagePage = require('./ImagePage');


class FlickrClient extends Component {

  render() {
    return (
      <Navigator
          initialRoute={{id: 'SplashPage'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }} />
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'SearchPage') {
      return (
        <SearchPage
          navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No route!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('FlickrClient', () => FlickrClient);
