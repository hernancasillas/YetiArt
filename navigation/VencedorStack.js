import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AllFonts from '../screens/AllFonts';
import FontDetail from '../screens/FontDetail';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { ImageBackground, View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import Vinil from '../screens/Vinil';
import { Icon } from 'react-native-elements';
import { UbuntuBoldText } from '../components/StyledText';
import Constants from 'expo-constants';
import Favoritas from '../screens/Favoritas';
import Todas from '../screens/Todas';
import Laser from '../screens/Laser';
import PreviewFinal from '../screens/PreviewFinal';

const TabListaOrdenes = createMaterialTopTabNavigator(
	{
		Vinil: {
			screen: Vinil,
			navigationOptions: (screenProps) => {
				return {
					title: 'Vinil',
				};
			},
		},
		Laser: {
			screen: Laser,
			navigationOptions: (screenProps) => {
				return {
					title: 'Laser',
				};
			},
		},

		Favoritas: {
			screen: Favoritas,
			navigationOptions: (screenProps) => {
				return {
					title: 'Favoritas',
				};
			},
		},
	},
	{
		initialRouteName: 'Vinil',
		tabBarOptions: {
			labelStyle: {
				fontFamily: 'Ubuntu Regular',
			},
			activeTintColor: '#000',
			inactiveTintColor: 'black',
			labelStyle: { fontFamily: 'Ubuntu Regular' },
			indicatorStyle: {
				backgroundColor: 'black',
			},
			tabStyle: {
				height: 48,
				alignItems: 'center',
				justifyContent: 'center',
			},
			style: {
				backgroundColor: 'white',
				borderTopWidth: 0,
				/* position: 'absolute',
                left: 0,
                right: 0,*/
				top: 0,
				height: 50,
			},
		},
	}
);

const VencedorStack = createStackNavigator(
	{
		Vinil: Vinil,
		AllFonts: AllFonts,
		FontDetail: FontDetail,
		Todas: Todas,
		PreviewFinal: PreviewFinal,
		Laser: Laser,
		TabListaOrdenes: {
			screen: TabListaOrdenes,
			navigationOptions: {
				gesturesEnabled: false,
				header: ({ navigation, screenProps }) => (
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignContent: 'center',
							alignItems: 'center',
							padding: 40,
							backgroundColor: 'white',
						}}
					>
						<StatusBar style="dark" />
						<TouchableOpacity
							style={{ right: 10 }}
							onPress={() => {
								navigation.openDrawer();
							}}
						>
							<Icon name="bars" type="font-awesome" color="black" />
						</TouchableOpacity>
						<UbuntuBoldText style={styles2.textStyle}>
							{'Previsualización'}
						</UbuntuBoldText>
						<View style={{}} />
					</View>
				),
			},
		},
	},
	{
		//initialRouteName: 'Home',
		initialRouteName: 'TabListaOrdenes',
		//headerMode: 'none',
	}
);

const styles2 = StyleSheet.create({
	textStyle: {
		fontWeight: 'bold',
		fontSize: 30,
		color: 'black',
		textAlign: 'center',
		textAlignVertical: 'center',
	},
	imageStyle: {
		width: '100%',
		resizeMode: 'cover',
		borderWidth: 0,
	},
});

export default createAppContainer(VencedorStack);
