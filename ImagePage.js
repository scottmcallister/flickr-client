'use strict';
import React, {
  StyleSheet,
  Component,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

var Styles = require('./Styles');

class ImagePage extends Component{
	constructor(props) {
		super(props);
	}
	_goBack(){
		this.props.navigator.pop();
	}
	render(){
		var image = this.props.image;
		//console.log(this.props.image);
		console.log('https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg');
		return(
			<View style={Styles.imageBackground}>
				<View style={Styles.header}>
					<TouchableOpacity onPress={this._goBack.bind(this)}>
						<Text style={Styles.imageBackButton}>Back</Text>
					</TouchableOpacity>
				</View>
				<Image style={Styles.bigImage} source={{uri: 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg'}}/>
			</View>
		);
	}
}

module.exports = ImagePage;