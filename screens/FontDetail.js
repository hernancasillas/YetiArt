import React, { Component } from 'react';
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	Alert,
	FlatList,
	Image,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';
import { ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { UbuntuBoldText, UbuntuRegularText } from '../components/StyledText';
import SQL from '../constants/SQL.js';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export default class FontDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			search: '',
			nameText: '',
			data: [],
			loadingButton: false,
		};

		sql = new SQL();
		sql.getFontDetails(this.props.navigation.state.params.font, this.changeState);
	}

	static navigationOptions = {
		header: null,
	};

	changeState = (data) => {
		this.setState({
			loading: false,
			data: data,
		});
	};

	downloadFont() {
		var font = this.props.navigation.state.params.font;
		const uri = 'http://www.fontsquirrel.com/fontfacekit/' + font;
		let fileUri = FileSystem.documentDirectory + font + '.zip';
		FileSystem.downloadAsync(uri, fileUri)
			.then(({ uri }) => {
				this.saveFile(uri);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	saveFile = async (fileUri) => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status === 'granted') {
			const asset = await MediaLibrary.createAssetAsync(fileUri);
			console.log(fileUri);
			console.log(asset);
			var result = await MediaLibrary.createAlbumAsync('Downloads', asset, false);
			console.log('Result: ', result);
			Alert.alert('¡Font Descargada!', 'En /Almacenamiento Interno/Downloads/');
			this.setState({
				loadingButton: false,
			});
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
							<UbuntuBoldText style={styles.textStyle}>
								{this.props.navigation.state.params.fontName}
							</UbuntuBoldText>

							<FlatList
								style={{
									flex: 1,
									margin: 20,
								}}
								data={this.state.data}
								renderItem={({ item }) => (
									<TouchableOpacity
										style={{
											width: '80%',

											backgroundColor: 'white',
											shadowColor: '#000',
											shadowOffset: { width: 0, height: 2 },
											shadowOpacity: 0.5,
											shadowRadius: 2,
											elevation: 1,
											alignSelf: 'center',
											margin: 10,
										}}
									>
										<UbuntuRegularText style={{ fontSize: 25, padding: 5 }}>
											{item.style_name}
										</UbuntuRegularText>
										<Image
											source={{ uri: item.listing_image }}
											style={{
												alignSelf: 'center',
												width: '90%',
												height: 50,
												resizeMode: 'contain',
											}}
										/>
									</TouchableOpacity>
								)}
							></FlatList>
							<Button
								title={'Descargar Font'}
								onPress={() => {
									this.setState({
										loadingButton: true,
									});
									this.downloadFont();
								}}
								titleStyle={styles.buttonTitle}
								loading={this.state.loadingButton}
								loadingProps={{ color: Colors.white }}
								buttonStyle={styles.buttonStyle}
								containerStyle={styles.buttonContainer}
							/>
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
	buttonTitle: {
		color: Colors.white,
		fontFamily: 'Ubuntu Regular',
	},
	buttonStyle: {
		borderRadius: 10,
		backgroundColor: Colors.gradient1[0],
		height: 40,
	},
	buttonContainer: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
	},
});
