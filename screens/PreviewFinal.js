import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	View,
	Switch,
	ScrollView,
	TouchableOpacity,
	ImageBackground,
	Text,
	Share,
	Image,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import Slider from '@react-native-community/slider';
import { UbuntuBoldText, UbuntuRegularText } from '../components/StyledText';
import { TextInput } from 'react-native';
import { captureRef as takeSnapshotAsync, ViewShot } from 'react-native-view-shot';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default class PreviewFinal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
			nameText: this.props.screenProps.textoPrueba,
			nameOriginal: this.props.screenProps.textoPrueba,
			reglon: this.props.screenProps.renglon,
			fontSize: 25,
			fontNames: [
				{ label: '-- VINIL --', value: 'Ubuntu Regular' },
				{ label: 'Arial Black', value: 'arialbold' },
				{ label: 'Bauhaus', value: 'bauhaus' },
				{ label: 'Beautiful Lovers', value: 'beautiful-lovers' },
				{ label: 'Blarak', value: 'Blarak' },
				{ label: 'Bring Heart Regular', value: 'BringHeart-Regular' },
				{ label: 'Buchanan Bold', value: 'buchananbold' },
				{ label: 'Clarendon Bold', value: 'clarendon-bold' },
				{ label: 'Cookie Regular', value: 'Cookie-Regular' },
				{ label: 'Cooper Black', value: 'COOPBL' },
				{ label: 'Dutch 801', value: 'dutcheb' },
				{ label: 'Eras Bold', value: 'ERASBD' },
				{ label: 'Franklin Gothic', value: 'FRADMIT' },
				{ label: 'Geometric', value: 'geometric' },
				{ label: 'Gill Sans', value: 'GILSANUB' },
				{ label: 'Gloucester', value: 'gloucester' },
				{ label: 'Impact', value: 'impact' },
				{ label: 'Lemon Regular', value: 'Lemon-Regular' },
				{ label: 'Luckiest Guy', value: 'luckiestguy' },
				{ label: 'Magneto', value: 'MAGNETOB' },
				{ label: 'Milasian Circa Bold', value: 'MilasianCircaBoldPERSONAL' },
				{ label: 'NFL Dolphins', value: 'NFLDOLPH' },
				{ label: 'NFL Eagles', value: 'NFLEAGLE' },
				{ label: 'Orbitron Bold', value: 'orbitron-bold' },
				{ label: 'Permanent Marker', value: 'PermanentMarker' },
				{ label: 'Pistoletto', value: 'Pistoletto' },
				{ label: 'Playbill', value: 'PLAYBILL' },
				{ label: 'Rock', value: 'ROCK' },
				{ label: 'Showcard', value: 'SHOWG' },
				{ label: 'Stencil', value: 'STENCIL' },
				{ label: 'Strawberry Blossom', value: 'Strawberry Blossom' },
				{ label: 'Swiss Bold', value: 'swissb' },
				{ label: 'The Athalita', value: 'The Athalita' },
				{ label: 'Times New', value: 'times' },
				{ label: 'Vegan Style', value: 'Vegan Style' },
				{ label: 'Vladiviqo', value: 'Vladiviqo' },
				{ label: 'Mesquite Std', value: 'MesquiteStd' },
				{ label: 'Ravie', value: 'RAVIE' },
				{ label: 'Sniglet Regular', value: 'Sniglet-Regular' },
				{ label: 'Sports World', value: 'SportsWorld' },
				{ label: 'Wreckers', value: 'Wreckers' },
				{ label: '-- LASER --', value: 'Ubuntu Regular' },
				{ label: 'Aldine', value: 'aldine' },
				{ label: 'Alger', value: 'alger' },
				{ label: 'Andaluz', value: 'andlso' },
				{ label: 'Aromatic Ginger', value: 'aromatic-ginger' },
				{ label: 'Bank Gothic', value: 'bank-gothic' },
				{ label: 'Barrio Regular', value: 'barrio-regular' },
				{ label: 'Bradley Hand', value: 'BRADHITC' },
				{ label: 'Brush Script', value: 'BRUSHSCI' },
				{ label: 'Bubble Gum Sans Regular', value: 'BubblegumSans-Regular' },
				{ label: 'Cabin Sketch Bold', value: 'CabinSketch-Bold' },
				{ label: 'Curlz', value: 'curlz' },
				{ label: 'Edwardian Script ITC', value: 'edwardian-script-itc' },
				{ label: 'Emilio', value: 'emilio-20' },
				{ label: 'Frederick The Great', value: 'FrederickatheGreat-Regular' },
				{ label: 'Freestyle Script', value: 'FREESCPT' },
				{ label: 'French Script', value: 'FRSCRIPT' },
				{ label: 'Gabriola', value: 'Gabriola' },
				{ label: 'Harrington', value: 'HARNGTON' },
				{ label: 'Haettenschweiler', value: 'HATTEN' },
				{ label: 'Holy Ravioli', value: 'HolyRavioliNF' },

				{ label: 'Informal Roman', value: 'INFROMAN' },
				{ label: 'Kristen ITC', value: 'ITCKRIST' },
				{ label: 'Jasmine', value: 'jasmine' },
				{ label: 'Jokerman', value: 'JOKERMAN' },
				{ label: 'Juice', value: 'JUICE' },
				{ label: 'Lucida', value: 'lucida' },
				{ label: 'The Parthenon', value: 'theparthenon' },

				{ label: 'Vineta', value: 'vinet' },
			],
			modeTerms: '',

			cameraRollUri: null,
		};
		console.log('Aqui toy: ', Constants.deviceName);
	}

	componentDidMount() {
		Permissions.askAsync(Permissions.CAMERA_ROLL);
	}

	_saveToCameraRollAsync = async () => {
		await StatusBar.setHidden(true);
		let result = await takeSnapshotAsync(this._container, {
			format: 'png',
			result: 'tmpfile',
			height,
			width,
			quality: 1,
		});
		console.log(result);

		let saveResult = await CameraRoll.save(result, 'photo');
		await StatusBar.setHidden(false);
		this.setState({ cameraRollUri: result });
	};

	static navigationOptions = {
		header: null,
	};

	onShare = async () => {
		try {
			const result = await Share.share({
				message: 'React Native | A framework for building native apps using React',
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					// shared with activity type of result.activityType
				} else {
					// shared
				}
			} else if (result.action === Share.dismissedAction) {
				// dismissed
			}
		} catch (error) {
			alert(error.message);
		}
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignContent: 'center',
						alignItems: 'center',
						marginHorizontal: 40,

						marginTop: 40,
						marginBottom: 0,
						borderWidth: 0,
					}}
				>
					<TouchableOpacity
						style={{ right: 20 }}
						onPress={() => {
							this.props.navigation.pop();
						}}
					>
						<Icon name="chevron-left" type="font-awesome" color="black" />
					</TouchableOpacity>
					<UbuntuBoldText style={styles.textStyle}>Preview Final</UbuntuBoldText>
					{/* <TouchableOpacity
						onPress={() => {
							this._saveToCameraRollAsync();
						}}
					>
						<Icon
							name="cellphone-screenshot"
							type="material-community"
							color={'black'}
						/>
					</TouchableOpacity> */}
				</View>
				<View style={{ flex: 1 }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-around',
							width: '100%',
							borderWidth: 0,
							alignSelf: 'center',
						}}
					>
						<TextInput
							style={{
								width: '50%',
								height: 40,
								fontSize: 20,
								borderWidth: 0,
								padding: 5,
								marginVertical: 30,
								backgroundColor: 'white',
								shadowColor: '#000',
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.5,
								shadowRadius: 2,
								elevation: 1,
								alignSelf: 'center',
							}}
							value={this.props.screenProps.textoPrueba}
							placeholder={'Texto Prueba'}
							onChangeText={(text) => {
								this.setState({
									//nameText: text,
									nameOriginal: text,
								});
								this.props.screenProps.changeTextoPrueba(text);
							}}
						/>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								alignSelf: 'center',
								justifyContent: 'space-between',
								borderWidth: 0,
								marginTop: 0,
								paddingLeft: 0,
								paddingRight: 0,
							}}
						>
							<UbuntuRegularText style={{ fontSize: 16, fontWeight: 'bold' }}>
								{!this.props.screenProps.renglon ? '1 Renglon' : '2 Renglones'}
							</UbuntuRegularText>

							<Switch
								thumbColor={
									this.props.screenProps.renglon ? 'rgb(48, 150, 199)' : '#c8c8c8'
								}
								trackColor={{
									false: 'rgba(223, 223, 223, 0.1)',
									true: 'rgba(223, 223, 223, 0.1)',
								}}
								ios_backgroundColor={'rgba(223, 223, 223, 0.1)'}
								style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
								value={this.props.screenProps.renglon}
								onValueChange={(value) => {
									var name = this.props.screenProps.textoPrueba
										.split(' ')
										.join('\n');
									console.log(name);
									if (value) {
										/* this.setState({
												renglon: !this.state.renglon,
												//nameText: name,
											}); */

										this.props.screenProps.changeRenglon(
											!this.props.screenProps.renglon
										);
										this.props.screenProps.changeTextoPrueba(name);
									} else {
										/* this.setState({
												renglon: !this.state.renglon,
												//nameText: this.state.nameOriginal,
											}); */
										this.props.screenProps.changeTextoPrueba(
											this.state.nameOriginal
										);
										this.props.screenProps.changeRenglon(
											!this.props.screenProps.renglon
										);
									}
								}}
							/>
						</View>
					</View>
					<View
						style={{
							width: '80%',
							alignSelf: 'center',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<RNPickerSelect
							placeholder={{
								label: 'Seleccionar Font',
								value: '',
								color: 'black',
							}}
							useNativeAndroidPickerStyle={true}
							items={this.state.fontNames}
							onValueChange={(value) => {
								if (value != '')
									this.setState({
										modeTerms: value,
									});
							}}
							style={{
								...pickerSelectStyles,
								iconContainer: {
									top: 15,
									right: 15,
								},
								placeholder: {
									color: 'rgb(200, 200, 200)',
									fontSize: 20,
									fontWeight: 'normal',
									fontFamily: 'Ubuntu Regular',
								},
							}}
							Icon={() => {
								return (
									<Image
										source={require('../assets/images/chevron_down_black.png')}
										style={{
											height: 9,
											width: 17,
										}}
									/>
								);
							}}
							value={this.state.modeTerms}
						/>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								margin: 20,
								alignSelf: 'center',
								borderWidth: 0,
								left: 15,
							}}
						>
							<UbuntuRegularText style={{ fontSize: 18, marginHorizontal: 10 }}>
								Tamaño
							</UbuntuRegularText>
							<Slider
								style={{ width: 200, height: 40 }}
								minimumValue={10}
								maximumValue={75}
								minimumTrackTintColor="#AAAAAA"
								maximumTrackTintColor="#000000"
								onValueChange={(value) => {
									this.setState({
										fontSize: value,
									});
								}}
							/>
							<UbuntuRegularText style={{ fontSize: 18, marginHorizontal: 10 }}>
								{this.state.fontSize.toFixed(0)}
							</UbuntuRegularText>
						</View>
						{this.state.cameraRollUri && (
							<Image
								source={{ uri: this.state.cameraRollUri }}
								style={{
									width: 200,
									height: 200,
									resizeMode: 'contain',
									borderWidth: 2,
									borderColor: 'red',
								}}
							/>
						)}
					</View>
					<View
						style={{
							flex: 1,
							marginTop: 0,
							borderWidth: 0,
							backgroundColor: 'white',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 5,
						}}
						ref={(view) => {
							this._container = view;
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								color: '#aaa1a3',
								fontSize: this.state.fontSize,
								fontFamily: this.state.modeTerms,
								lineHeight:
									this.state.modeTerms == 'theparthenon'
										? this.state.fontSize > 27
											? this.state.fontSize + 80
											: this.state.fontSize + 50
										: null,
								borderWidth: 0,
								letterSpacing: 0,
							}}
						>
							{this.props.screenProps.textoPrueba + ' '}
						</Text>
					</View>
				</View>
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
	viewStyle: {
		width: '80%',

		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
		alignSelf: 'center',
		margin: 10,
	},
	fontTitleStyle: {
		fontSize: 25,
		paddingLeft: 5,
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 20,
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
		fontSize: 20,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: 'black',
		color: 'black',
		paddingRight: 0, // to ensure the text is never behind the icon
		width: '100%',
		borderWidth: 0,
		height: 40,
		fontFamily: 'Ubuntu Regular',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 1,
	},
});
