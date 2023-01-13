import React, { Component } from 'react';
import { Alert, AsyncStorage, Text, View } from 'react-native';
import CustomAlert from '../components/CustomAlert';

const URL = 'http://10.1.12.39:80/YetiArt/';
const getModelos = 'api/modelo/get_modelos.php';
const getInfoModelos = 'api/modelo/get_info_modelos.php';
const createModelo = 'api/modelo/crea_modelo.php';

const login = 'api/usuario/valida_usuario.php';
const createUser = 'api/usuario/create_user.php';
const getUsers = 'api/usuario/read.php';
const getUser = 'api/usuario/get_user.php';
const getCorridas = 'api/corrida/busca_corridas.php';
const getDetalleCorrida = 'api/corrida/detalle_corrida.php';
const consultaBoleto = 'api/boleto/consulta_boleto.php';
const quemadoBoleto = 'api/boleto/quemado_boleto.php';
const apiFont = 'http://www.fontsquirrel.com/api/fontlist/all';
const familyDetail = 'http://www.fontsquirrel.com/api/familyinfo/'; //Falta family_urlname;
const downloadFont = 'http://www.fontsquirrel.com/fontfacekit/'; //Falta family_urlname;

/* SELECT M.idModelo, M.Nombre, C.Hexadecimal, CAT.nombreCategoria, CAP.nombreCapacidad, md.Imagen FROM `Modelos` 
AS M INNER JOIN modelodetalles as md ON M.idModelo = md.idModelo INNER JOIN Colores AS C ON md.idColor = C.idColor INNER JOIN Categorias as CAT ON M.idCategoria = CAT.idCategoria 
INNER JOIN Capacidad AS CAP ON M.idCapacidad = CAP.idCapacidad*/

export default class SQL extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			user: '',
			password: '',
			isModalVisible: false,
			lang: 'es',
			json: {},
		};
	}

	async removeSession() {
		try {
			await AsyncStorage.clear();
			// this.props.navigation.navigate('Auth')
		} catch (error) {
			console.log(error);
		}
	}

	setSession = async (sesion) => {
		try {
			await AsyncStorage.setItem('sesion', JSON.stringify(sesion));
		} catch (error) {
			console.log(error);
		}
	};

	signIn(formData, props, changeState, showAlert, title, lang) {
		var user = {};

		console.log(formData);

		fetch(URL + login, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log('Objeto JSON', responseJson);

				//user = responseJson.usuario;
				/* accessToken = responseJson.access_token;
                tokenType = responseJson.token_type; */

				console.log('RESPUESTA DE LOGIN +++++++ ', responseJson);
				if (responseJson.message == 'Unauthorized') {
					changeState(false);
					showAlert(true);
				} else if (responseJson.status == '200') {
					this.setSession(responseJson.usuario);
					changeState(true);
					if (responseJson.usuario != undefined) {
						props.navigation.navigate('LoadData', { usuario: responseJson.usuario });
						//console.log(responseJson.user)
						/* if (responseJson.usuario.rol == '2') 
                        {
                            //props.navigation.navigate('VendedorLoadData', {user, accessToken, tokenType});
                            console.log('NO SOY ADMIN ROL 2')    
                            props.navigation.navigate('LoadData', {usuario: responseJson.usuario})
                        }   
                        else if (responseJson.usuario.rol == '1')
                        {
                            //props.navigation.navigate('AdminLoadData', {user, accessToken, tokenType});
                            console.log('SOY ADMIN ROL 1');
                            props.navigation.navigate('LoadData', {usuario: responseJson.usuario})
                        } */
					}
				} else {
					changeState(false);
					showAlert(true);
				}
			})
			.catch((error) => {
				Alert.alert('Error at Log In.', error.message);

				// console.error(error);
			});
	}

	downloadFont(font, props, changeState) {
		fetch(downloadFont + font, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log('Objeto JSON', responseJson);

				//user = responseJson.usuario;
				/* accessToken = responseJson.access_token;
                tokenType = responseJson.token_type; */

				console.log('RESPUESTA DE DESCARGA +++++++ ', responseJson);
				changeState(responseJson);
				/* if (responseJson.message == 'Unauthorized') {
					changeState(false);
					showAlert(true);
				} else if (responseJson.status == '200') {
					this.setSession(responseJson.usuario);
					changeState(true);
					if (responseJson.usuario != undefined) {
						props.navigation.navigate('LoadData', { usuario: responseJson.usuario });
						//console.log(responseJson.user)
						/* if (responseJson.usuario.rol == '2') 
                        {
                            //props.navigation.navigate('VendedorLoadData', {user, accessToken, tokenType});
                            console.log('NO SOY ADMIN ROL 2')    
                            props.navigation.navigate('LoadData', {usuario: responseJson.usuario})
                        }   
                        else if (responseJson.usuario.rol == '1')
                        {
                            //props.navigation.navigate('AdminLoadData', {user, accessToken, tokenType});
                            console.log('SOY ADMIN ROL 1');
                            props.navigation.navigate('LoadData', {usuario: responseJson.usuario})
                        } 
					}
				} else {
					changeState(false);
					showAlert(true);
				} */
			})
			.catch((error) => {
				Alert.alert('Error al intentar descargar', error.message);

				// console.error(error);
			});
	}

	createUser(data, changeState, props) {
		console.log(createUser);

		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('nombre', data.nombre);
		formData.append('apellido_p', data.apellido_p);
		formData.append('apellido_m', data.apellido_m); //0 estimacion, 1 pedido
		formData.append('clave', data.clave);
		formData.append('email', data.email);
		formData.append('passwd', data.passwd);
		formData.append('rol', data.rol ? 1 : 2);
		//formData.append('permissions', JSON.stringify(data.permissions));
		console.log(formData);
		//console.log('JSON de productos === ',products);
		//console.log('FormData ===', formData); */
		fetch(URL + createUser, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log('Objeto JSON', responseJson);
				//console.log(responseJson);

				changeState();

				if (responseJson.status == '200') {
					Alert.alert(
						'Usuario agregado!',
						'', // <- this part is optional, you can pass an empty string
						[{ text: 'OK', onPress: () => props.navigation.pop() }],
						{ cancelable: false }
					);
				} else if (responseJson.error == '23000')
					Alert.alert('Error, el email o la clave ya existen.');
				else Alert.alert('Error, intente de nuevo');

				//console.log(this.state.json);
			})
			.catch((error) => {
				Alert.alert('Error al Crear Usuario', JSON.stringify(error));
			});
	}

	getFonts(changeState) {
		console.log(apiFont);

		fetch(apiFont, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener fonts.', JSON.stringify(error));
			});
	}

	getFontDetails(font, changeState) {
		console.log(familyDetail + font);

		fetch(familyDetail + font, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener detalle de ' + font + '.', JSON.stringify(error));
			});
	}
	getUsers(changeState) {
		console.log(getUsers);

		fetch(URL + getUsers, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener usuarios.', JSON.stringify(error));
			});
	}

	getCorridas(data, changeState) {
		console.log(getCorridas);
		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('F_Busqueda', data.F_Busqueda);
		formData.append('K_Punto_Origen', data.K_Punto_Origen);
		formData.append('K_Punto_Envia', data.K_Punto_Envia);

		console.log(formData);

		fetch(URL + getCorridas, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener corridas.', JSON.stringify(error));
			});
	}

	getModelos(changeState) {
		console.log(getModelos);

		fetch(URL + getModelos, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener modelos.', JSON.stringify(error));
			});
	}

	getDetalleCorrida(K_Corrida, changeState) {
		console.log(getDetalleCorrida);
		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('K_Corrida', K_Corrida);

		console.log(formData);

		fetch(URL + getDetalleCorrida, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert(
					'Error al obtener detalle de corrida # ' + K_Corrida,
					JSON.stringify(error)
				);
			});
	}

	consultaBoleto(Boleto, changeState) {
		console.log(consultaBoleto);
		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('TipoBoleto', 1); //Hardcoded
		formData.append('Boleto', Boleto);

		console.log(formData);

		fetch(URL + consultaBoleto, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				//console.log(responseJson);
				if (responseJson.status == '200') changeState(responseJson);
				else
					Alert.alert(
						responseJson.status +
							': Error al obtener información del boleto #' +
							Boleto +
							'. Contacte a soporte.'
					);
			})
			.catch((error) => {
				Alert.alert(
					'Error al obtener informacion del boleto #' + Boleto,
					JSON.stringify(error)
				);
			});
	}

	quemadoBoleto(data, changeState) {
		console.log(quemadoBoleto);
		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('K_Corrida', 'NULL'); //Hardcoded
		formData.append('FolioBoletoArmado', data.FolioBoletoArmado);
		formData.append('Dispositivo', data.Dispositivo);
		formData.append('Gps', data.Gps);
		formData.append('K_Usuario', data.K_Usuario);

		console.log(formData);

		fetch(URL + quemadoBoleto, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				if (responseJson.resultado == '0') {
					changeState(responseJson);
					Alert.alert('¡Éxito! Boleto quemado.');
				} else {
					changeState(responseJson);
					Alert.alert('Error: ', responseJson.mensaje);
				}
			})
			.catch((error) => {
				Alert.alert(
					'Error al intentar quemar el boleto #' + data.FolioBoletoArmado,
					JSON.stringify(error)
				);
			});
	}

	getUser(data, changeState) {
		let formData = new FormData();
		/* formData.append('enterprise_id', data.enterprise_id); */

		formData.append('idUsuarioApp', data.idUsuarioApp);

		//formData.append('permissions', JSON.stringify(data.permissions));
		console.log(formData);

		console.log(getUser);

		fetch(URL + getUser, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
			},
			body: formData,
		})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				changeState(responseJson);
			})
			.catch((error) => {
				Alert.alert('Error al obtener usuario.', JSON.stringify(error));
			});
	}
}
