// Search page Component

'use strict';
import React, {
  StyleSheet,
  Component,
  Image,
  ListView,
  PickerIOS,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

var PickerItemIOS = PickerIOS.Item;
var Styles = require('./Styles');

var SORT_OPTIONS = {
	relevance: {
		value: 'relevance',
		label: 'Sort by relevance'
	},
	datePostedAsc: {
		value: 'date-posted-asc',
		label:'Sort by newest date posted'
	},
	datePostedDesc: {
		value:'date-posted-desc',
		label:'Sort by oldest date posted'
	},
	dateTakenAsc: {
		value:'date-taken-asc',
		label:'Sort by oldest date taken'
	},
	dateTakenDesc: {
		value:'date-taken-desc',
		label:'Sort by newest date taken'
	},
	interestingnessDesc: {
		value:'interestingness-desc',
		label:'Sort by most interesting'
	},
	interestingnessAsc: {
		value:'interestingness-asc',
		label:'Sort by least interesting'
	}
};

class SearchPage extends Component{
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {results: ds, sort: 'relevance'};
	}
	_searchFlickr(searchTerm){
		console.log(this.state.sort);
		var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3a84419781bb3f1a1505be834333bf48&text='+encodeURI(searchTerm)+'&per_page=30&format=json&sort='+this.state.sort;
		fetch(url,{method: 'GET', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}})
			.then((response) => response._bodyInit)
			.then((responseBody) => {
				var responseJSON = JSON.parse(responseBody.substring(14,responseBody.length-1));
				var photos = responseJSON.photos.photo;
				var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				var dataSource =  ds.cloneWithRows(photos);
				this.setState({results: dataSource, sort: this.state.sort});
			})
			.catch((error) => {
				console.warn(error);
			});
	}
	render(){
		return (
			<View style={Styles.container}>
				<View style={Styles.header}>
					<TextInput
						style={Styles.inputText}
						placeholder={'Search flickr for images...'}
    					returnKeyType='search'
						onSubmitEditing={(text) => this._searchFlickr(text.nativeEvent.text)}
					/>
				</View>

				<ListView
					dataSource={this.state.results}
					renderRow={(image) => 
						<View style={Styles.row}>
							<Image style={Styles.thumb} source={{uri: 'https://farm'+image.farm+'.staticflickr.com/'+image.server+'/'+image.id+'_'+image.secret+'.jpg'}}/>
						</View>
					}
					contentContainerStyle={Styles.list}
				/>
				<PickerIOS
					selectedValue={this.state.order}
					onValueChange={(newOrder) => this.setState({results: this.state.results, order: newOrder})}
					style={{backgroundColor:'#EAF8FD', borderTopColor: '#05A5D1', borderTopWidth: 2}}>
					{Object.keys(SORT_OPTIONS).map((sortOption) => (
						<PickerItemIOS
							key={sortOption}
							value={SORT_OPTIONS[sortOption].value}
							label={SORT_OPTIONS[sortOption].label}
						/>
					))}
				</PickerIOS>
			</View>
		);		
	}
}

module.exports = SearchPage;