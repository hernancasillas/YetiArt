import React, { Component } from 'react';
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View,
	TouchableOpacity,
	Vibration,
	FlatList,
} from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import { UbuntuBoldText, UbuntuRegularText } from '../components/StyledText';
import SQL from '../constants/SQL.js';

export default class Modelos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			search: '',
			nameText: '',
			data: [],
			arrayCorridasFilter: [],
		};
		//this._getSesionAsync();
		//AsyncStorage.clear();
		sql = new SQL();
		sql.getModelos(this.changeState);
	}

	static navigationOptions = {
		header: null,
	};

	changeState = (data) => {
		this.setState({
			loading: false,
			modelos: data.modelos,
			arrayCorridasFilter: data.modelos,
		});
	};

	searchFilterFunction = (text) => {
		let itemData;

		if (text == '') {
			this.setState({
				arrayCorridasFilter: this.state.data,
				search: text,
			});
		} else {
			const newData = this.state.arrayCorridasFilter.filter((item) => {
				//applying filter for the inserted text in search bar

				itemData = item.family_name ? item.family_name.toUpperCase() : ''.toUpperCase();

				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});

			this.setState({ arrayCorridasFilter: newData, search: text });
		}
	};

	// Render any loading content that you like here
	render() {
		if (!this.state.loading)
			return (
				<View style={{ flex: 1 }}>
					<ImageBackground
						source={require('../assets/images/fondo_yeti.png')}
						style={styles.imageStyle}
					>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignContent: 'center',
								alignItems: 'center',
								marginHorizontal: 40,
								marginTop: 40,
								marginBottom: 20,
							}}
						>
							<TouchableOpacity
								onPress={() => {
									this.props.navigation.pop();
								}}
							>
								<Icon name="chevron-left" type="font-awesome" color={'black'} />
							</TouchableOpacity>
						</View>
						<View style={{ flex: 1 }}>
							<UbuntuBoldText style={styles.textStyle}>Modelos</UbuntuBoldText>

							<SearchBar
								placeholder={'Buscar por nombre'}
								lightTheme
								round
								value={this.state.search}
								onChangeText={(text) => this.searchFilterFunction(text)}
								autoCorrect={false}
								containerStyle={{
									margin: 0,
									padding: 0,
									borderRadius: 0,
									width: '80%',
									alignSelf: 'center',
									margin: 20,
								}}
								inputContainerStyle={{
									margin: 0,
									padding: 0,
									borderRadius: 0,
									backgroundColor: 'white',
								}}
								inputStyle={{
									fontFamily: 'Ubuntu Regular',
								}}
							/>

							<FlatList
								style={{
									flex: 1,
									borderWidth: 0,
								}}
								columnWrapperStyle={{ justifyContent: 'space-between' }}
								data={this.state.arrayCorridasFilter}
								numColumns={2}
								renderItem={({ item }) => (
									<TouchableOpacity
										style={{
											width: '40%',
											padding: 5,
											backgroundColor: 'white',
											shadowColor: '#000',
											shadowOffset: { width: 0, height: 2 },
											shadowOpacity: 0.5,
											shadowRadius: 2,
											elevation: 1,
											alignSelf: 'center',
											margin: 20,
										}}
										onPress={() => {
											this.props.navigation.navigate('FontDetail', {
												font: item.family_urlname,
												fontName: item.family_name,
											});
										}}
									>
										<Image
											resizeMode="cover"
											source={{ uri: item.Imagen }}
											style={{
												height: 100,
												width: 100,
												alignSelf: 'center',
												margin: 5,
											}}
										/>
										<UbuntuRegularText style={{ fontSize: 15 }}>
											{item.nombreCategoria + ' ' + item.nombreCapacidad}
										</UbuntuRegularText>

										<UbuntuRegularText style={{ fontSize: 20 }}>
											{item.Nombre}
										</UbuntuRegularText>
									</TouchableOpacity>
								)}
							></FlatList>
						</View>
					</ImageBackground>

					<StatusBar style="dark" />
				</View>
			);
		else
			return (
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<ActivityIndicator size="large" color="blue" />
				</View>
			);
	}
}
const styles = StyleSheet.create({
	textStyle: {
		fontWeight: 'bold',
		fontSize: 35,
		color: 'black',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	textStyleDate: {
		margin: 5,
		fontSize: 20,
		color: 'black',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	imageStyle: {
		height: '100%',
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 15,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 0,
		borderColor: 'black',
		color: 'black',
		paddingRight: 0, // to ensure the text is never behind the icon
		width: '100%',
		fontFamily: 'Ubuntu Regular',
		height: 40,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
	},
	inputAndroid: {
		fontSize: 12,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: 'black',
		color: 'black',
		paddingRight: 0, // to ensure the text is never behind the icon
		width: '100%',

		height: 35,
		fontFamily: 'Ubuntu Regular',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
	},
});
