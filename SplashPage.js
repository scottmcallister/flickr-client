// Initial Splash page

'use strict';

var React = require('react-native');
var {
  Component,
  Image,
  View,
  Text,
} = React;

var Styles = require('./Styles');

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
      <View style={Styles.splashBackground}>
        <Image style={Styles.logo} source={require('./img/flickr.png')}/>
        <Text style={Styles.splashMessage}>Flickr Client</Text>
        
      </View>
    );
  }
}

module.exports = SplashPage;
