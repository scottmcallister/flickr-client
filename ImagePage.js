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
var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

class ImagePage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			views: '',
			date: '',
			loading: true
		};
	}
	componentDidMount(){
		this._fetchData();
	}

	_fetchData(){
		var url = 	'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=3a84419781bb3f1a1505be834333bf48&'+
					'photo_id='+this.props.image.id+
					'&secret='+this.props.image.secret+
					'&format=json';
		fetch(url, {method: 'GET', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
			.then((response) => response._bodyInit)
			.then((responseBody) => {
				var responseJSON = JSON.parse(responseBody.substring(14,responseBody.length-1));
				var info = responseJSON.photo;
				var date = info.dates.taken;
				var day = date.substring(8,10);
				if(day.charAt(0) == '0'){
					day = date.substring(9,10);
				}
				var monthIndex = date.substring(5,7);
				var year = date.substring(0,4);
				this.setState({
					username: info.owner.username,
					views: info.views,
					date: day + ' ' + monthNames[parseInt(monthIndex)-1] + ' ' + year,
					loading: false
				});
			})
			.catch((error) => {
				console.warn(error);
			});
	}

	_goBack(){
		this.props.navigator.pop();
	}

	render(){
		var image = this.props.image;
		if(this.state.loading){
			var info = 	<View style={Styles.textContainer}>
						<Text style={Styles.info}>Loading info...</Text>
						</View>;

		}
		else{
			var info = 	<View style={Styles.textContainer}>
							<Text style={Styles.infoHeading}>Owner</Text>
							<Text style={Styles.info}>{this.state.username}</Text>
							<Text style={Styles.infoHeading}>Views</Text>
							<Text style={Styles.info}>{this.state.views}</Text>
							<Text style={Styles.infoHeading}>Taken On</Text>
							<Text style={Styles.info}>{this.state.date}</Text>
						</View>;
		}
		return(
			<View style={Styles.imageBackground}>
				<View style={Styles.header}>
					<TouchableOpacity onPress={this._goBack.bind(this)}>
						<Text style={Styles.imageBackButton}>Back</Text>
					</TouchableOpacity>
				</View>
				<Image style={Styles.bigImage} source={{uri: 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg'}}/>
					{info}
			</View>
		);
	}
}

module.exports = ImagePage;