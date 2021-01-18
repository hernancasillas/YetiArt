import React, { Component } from 'react';
import { View, Alert, AsyncStorage, Image, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { SafeAreaView, ScrollView } from 'react-navigation';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/* import AwesomeAlert from 'react-native-awesome-alerts'; */
/* import SharedStyles from '../constants/SharedStyles'; */

export default class SidebarAdmin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAlert: false,
			//usuario: this.props.screenProps.usuario,
		};
	}

	render() {
		const { navigation } = this.props;

		return (
			<View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
				<LinearGradient
					colors={Colors.gradient1}
					style={{}}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<View
						style={{
							marginTop: Constants.statusBarHeight,
							height: 150,
							justifyContent: 'center',
						}}
					>
						<ListItem
							key={'0'}
							leftAvatar={{
								imageProps: { resizeMode: 'contain' },
								source: require('../assets/images/icon.png'),
								size: 'large',
							}}
							titleStyle={{
								fontSize: 20,
								color: 'white',
								fontFamily: 'Ubuntu Regular',
							}}
							subtitleStyle={{
								fontSize: 12,
								color: 'white',
								fontFamily: 'Ubuntu Regular',
							}}
							title={'YetiArt Valles'}
							subtitle={'Administrador'}
							onPress={() => {
								navigation.navigate('VencedorStack');
								navigation.closeDrawer();
							}}
							containerStyle={{
								backgroundColor: 'transparent',
							}}
						/>
					</View>
					<ScrollView style={{ backgroundColor: 'white' }}>
						<ListItem
							key={'1'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Previsualización'}
							leftIcon={{
								name: 'font',
								type: 'font-awesome',
								color: 'black',
								size: 18,
							}}
							onPress={() => {
								navigation.navigate('VencedorStack');
								navigation.closeDrawer();
							}}
						/>
						<ListItem
							key={'4'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Previsualización Final'}
							leftIcon={{
								name: 'font',
								type: 'font-awesome',
								color: 'black',
								size: 18,
							}}
							onPress={() => {
								navigation.navigate('PreviewFinal');
								navigation.closeDrawer();
							}}
						/>
						<ListItem
							key={'3'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Todas las Fonts'}
							leftIcon={{
								name: 'book',
								type: 'font-awesome',
								color: 'black',
								size: 22,
							}}
							onPress={() => {
								navigation.navigate('Todas');
								navigation.closeDrawer();
							}}
						/>
						<ListItem
							key={'2'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Buscar Fonts Web'}
							leftIcon={{
								name: 'search',
								type: 'font-awesome',
								color: 'black',
								size: 22,
							}}
							onPress={() => {
								navigation.navigate('AllFonts');
								navigation.closeDrawer();
							}}
						/>

						{/* <ListItem
							key={'3'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Consultar Boletos'}
							leftIcon={{
								name: 'qrcode',
								type: 'font-awesome',
								color: 'black',
								size: 22,
							}}
							onPress={() => {
								navigation.navigate('Escaneo');
								navigation.closeDrawer();
							}}
						/>
						
						<ListItem
							key={'4'}
							bottomDivider
							titleStyle={{ fontSize: 20, fontFamily: 'Ubuntu Regular' }}
							title={'Cerrar Sesión'}
							leftIcon={{
								name: 'log-out',
								type: 'feather',
								color: 'black',
								size: 18,
							}}
							onPress={() => this.props.navigation.navigate('Logout')}
						/> */}
						{/*  <ListItem
                        key={'4'}
                        bottomDivider
                        titleStyle={{fontSize: 20 , fontFamily: 'Ubuntu Regular'}}
                        title={Language[lang].settings}
                        leftIcon={{
                            name: "settings",
                            type: 'material',
                            color: 'black',
                            
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('Settings');
                        }}
                    />
                    <ListItem
                        key={'5'}
                        bottomDivider
                        titleStyle={{fontSize: 20, fontFamily: 'Ubuntu Regular' }}
                        title={lang.toUpperCase()}
                        leftIcon={{
                            name: "language",
                            type: 'material',
                            color: 'black',
                            
                        }}
                        onPress={() => {
                            this.props.screenProps.changeLanguage()
                        }}
                    /> */}
						<View style={{ height: 100 }} />
					</ScrollView>
				</LinearGradient>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
