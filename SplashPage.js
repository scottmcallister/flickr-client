// Initial Splash page

'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
} = React;

class SplashPage extends Component {
  componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'SearchPage',
      });
    }, 1000);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 32,}}>Flickr Client</Text>
      </View>
    );
  }
}

module.exports = SplashPage;
