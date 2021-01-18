import React, { Component } from 'react';
import {
	ActivityIndicator,
	AsyncStorage,
	StatusBar,
	StyleSheet,
	View,
	Platform,
	Vibration,
	Alert,
} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Colors from '../constants/Colors';
import { ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, SearchBar } from 'react-native-elements';
import {
	EbrimaBoldText,
	OpenSansRegular,
	UbuntuBoldText,
	UbuntuRegularText,
} from '../components/StyledText';
import { TextInput } from 'react-native';
//import SQL from '../constants/SQL';
//import { showMessage, hideMessage } from "react-native-flash-message";

export default class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			changeFontSize: this.changeFontSize.bind(this),
			search: '',
			nameText: '',
			fontSize: 40,
		};
		//this._getSesionAsync();
		//AsyncStorage.clear();
		//sql = new SQL();
		this.props.navigation.navigate('VencedorStack');
	}

	changeFontSize = (value) => {
		this.setState({ fontSize: value });
	};

	_getSesionAsync = async () => {
		const sesion = await AsyncStorage.getItem('sesion');
		//const token = await AsyncStorage.getItem('token');
		let userSesion = JSON.parse(sesion);
		console.log('Sesion del usuario:   ======= ', userSesion);
		//console.log('Token notification: ', token);
		if (userSesion != null) {
			//console.log(userSesion);
			/* if(userSesion.user != undefined)
            { */
			this.props.navigation.navigate('LoadData', { usuario: userSesion });
			/*  if (userSesion.usuario.rol == '2') 
                    this.props.navigation.navigate('VendedorLoadData', {
                        user: userSesion.user,
                        accessToken: userSesion.access_token,
                        tokenType: userSesion.token_type
                    });
                else if (userSesion.usuario.rol == '1') {
                    this.props.navigation.navigate('VencedorStack'); 
                }*/
			//}
		} else {
			this.props.navigation.navigate('Auth');
		}
	};

	setSession = async (token) => {
		try {
			await AsyncStorage.setItem('token', token);
		} catch (error) {
			console.log(error);
		}
	};

	/* registerForPushNotificationsAsync = async () => {
        const tokenAsync = await AsyncStorage.getItem('token');
        const sesion = await AsyncStorage.getItem('sesion');
        
        let userSesion = JSON.parse(sesion);
        if (Constants.isDevice) {
            const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            let token = await Notifications.getExpoPushTokenAsync();
            //console.log('TOKEN NOTIFICATION: ', token);
            if (tokenAsync == null) {
                if(userSesion.user != undefined)
                    sql.saveToken(userSesion.user.id, token, userSesion.access_token, userSesion.token_type);
                else
                    sql.saveToken(userSesion.user_id, token, userSesion.access_token, userSesion.token_type);
              this.setSession(token);
            }
            /* else
            {
              sql.saveToken(userSesion.user.id, token, userSesion.access_token, userSesion.token_type);
            } 
            
            
            // this.setState({expoPushToken: token});
        } else {
            alert('Must use physical device for Push Notifications');
        }
    }; */

	componentDidMount() {
		//this.registerForPushNotificationsAsync();
		// Handle notifications that are received or selected while the app
		// is open. If the app was closed and then opened by tapping the
		// notification (rather than just tapping the app icon to open it),
		// this function will fire on the next tick after the app starts
		// with the notification data.
		//this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}

	_handleNotification = (notification) => {
		Vibration.vibrate();
		console.log(notification);
		/* showMessage({
          message: notification.data.title,
          description: notification.data.body,
          type: "info",
          duration: 3000
        }); */
		// this.setState({ notification: notification });
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" color="blue" />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
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
