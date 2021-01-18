import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreAllLogs(true);

let customFonts = {
	'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
	'Ubuntu Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
	'ebrima-bold': require('./assets/fonts/ebrimabd.ttf'),
	'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),

	//LASER
	aldine: require('./assets/fonts/laser/Aldine.ttf'),
	alger: require('./assets/fonts/laser/alger.ttf'),
	andlso: require('./assets/fonts/laser/andlso.ttf'),
	'aromatic-ginger': require('./assets/fonts/laser/AromaticGinger.ttf'),
	'bank-gothic': require('./assets/fonts/laser/bankgothic.ttf'),
	'barrio-regular': require('./assets/fonts/laser/Barrio-Regular.ttf'),
	BRADHITC: require('./assets/fonts/laser/BRADHITC.ttf'),
	BRUSHSCI: require('./assets/fonts/laser/BRUSHSCI.ttf'),
	'BubblegumSans-Regular': require('./assets/fonts/laser/BubblegumSans-Regular.ttf'),
	'CabinSketch-Bold': require('./assets/fonts/laser/CabinSketch-Bold.ttf'),
	curlz: require('./assets/fonts/laser/curlz.ttf'),
	'edwardian-script-itc': require('./assets/fonts/laser/edwardian-script-itc.ttf'),
	'emilio-20': require('./assets/fonts/laser/emilio-20.ttf'),
	'FrederickatheGreat-Regular': require('./assets/fonts/laser/FrederickatheGreat-Regular.ttf'),
	FREESCPT: require('./assets/fonts/laser/FREESCPT.ttf'),
	FRSCRIPT: require('./assets/fonts/laser/FRSCRIPT.ttf'),
	Gabriola: require('./assets/fonts/laser/Gabriola.ttf'),
	HARNGTON: require('./assets/fonts/laser/HARNGTON.ttf'),
	HATTEN: require('./assets/fonts/laser/HATTEN.ttf'),
	HolyRavioliNF: require('./assets/fonts/laser/HolyRavioliNF.ttf'),
	HARNGTON: require('./assets/fonts/laser/HARNGTON.ttf'),
	INFROMAN: require('./assets/fonts/laser/INFROMAN.ttf'),
	ITCKRIST: require('./assets/fonts/laser/ITCKRIST.ttf'),
	jasmine: require('./assets/fonts/laser/jasmine.ttf'),
	JOKERMAN: require('./assets/fonts/laser/JOKERMAN.ttf'),
	JUICE: require('./assets/fonts/laser/JUICE___.ttf'),
	vinet: require('./assets/fonts/laser/vinet.ttf'),
	theparthenon: require('./assets/fonts/laser/TheParthenon.ttf'),
	lucida: require('./assets/fonts/laser/LCALLIG.ttf'),

	//VINIL
	arialbold: require('./assets/fonts/vinil/arialbd.ttf'),
	bauhaus: require('./assets/fonts/vinil/bauhaus.ttf'),
	'beautiful-lovers': require('./assets/fonts/vinil/beautiful-lovers.ttf'),
	Blarak: require('./assets/fonts/vinil/Blarak.ttf'),
	'BringHeart-Regular': require('./assets/fonts/vinil/BringHeart-Regular.ttf'),
	buchananbold: require('./assets/fonts/vinil/buchananbold.ttf'),
	'clarendon-bold': require('./assets/fonts/vinil/clarendon-bold.ttf'),
	'Cookie-Regular': require('./assets/fonts/vinil/Cookie-Regular.ttf'),
	COOPBL: require('./assets/fonts/vinil/COOPBL.ttf'),
	dutcheb: require('./assets/fonts/vinil/dutcheb.ttf'),
	ERASBD: require('./assets/fonts/vinil/ERASBD.ttf'),
	FRADMIT: require('./assets/fonts/vinil/FRADMIT.ttf'),
	geometric: require('./assets/fonts/vinil/geometric.ttf'),
	GILSANUB: require('./assets/fonts/vinil/GILSANUB.ttf'),
	gloucester: require('./assets/fonts/vinil/gloucester.ttf'),
	impact: require('./assets/fonts/vinil/impact.ttf'),
	'Lemon-Regular': require('./assets/fonts/vinil/Lemon-Regular.ttf'),
	luckiestguy: require('./assets/fonts/vinil/luckiestguy.ttf'),
	MAGNETOB: require('./assets/fonts/vinil/MAGNETOB.ttf'),
	MilasianCircaBoldPERSONAL: require('./assets/fonts/vinil/MilasianCircaBoldPERSONAL.ttf'),
	NFLDOLPH: require('./assets/fonts/vinil/NFLDOLPH.ttf'),
	NFLEAGLE: require('./assets/fonts/vinil/NFLEAGLE.ttf'),
	'orbitron-bold': require('./assets/fonts/vinil/orbitron-bold.otf'),
	PermanentMarker: require('./assets/fonts/vinil/PermanentMarker.ttf'),
	'Pistoletto-Free': require('./assets/fonts/vinil/Pistoletto-Free.ttf'),
	Pistoletto: require('./assets/fonts/vinil/Pistoletto.otf'),

	PLAYBILL: require('./assets/fonts/vinil/PLAYBILL.ttf'),
	ROCK: require('./assets/fonts/vinil/ROCK.ttf'),
	SHOWG: require('./assets/fonts/vinil/SHOWG.ttf'),
	STENCIL: require('./assets/fonts/vinil/STENCIL.ttf'),
	'Strawberry Blossom': require('./assets/fonts/vinil/StrawberryBlossom.ttf'),
	swissb: require('./assets/fonts/vinil/swissb.ttf'),
	'The Athalita': require('./assets/fonts/vinil/TheAthalita.ttf'),
	times: require('./assets/fonts/vinil/times.ttf'),
	'Vegan Style': require('./assets/fonts/vinil/VeganStyle.ttf'),
	Vladiviqo: require('./assets/fonts/vinil/Vladiviqo.ttf'),
	MesquiteStd: require('./assets/fonts/vinil/MesquiteStd.otf'),
	RAVIE: require('./assets/fonts/vinil/RAVIE.ttf'),
	'Sniglet-Regular': require('./assets/fonts/vinil/Sniglet-Regular.otf'),
	SportsWorld: require('./assets/fonts/vinil/SportsWorld.otf'),
	Wreckers: require('./assets/fonts/vinil/Wreckers.otf'),
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			changeTextoPrueba: this.changeTextoPrueba.bind(this),
			changeRenglon: this.changeRenglon.bind(this),
			renglon: false,
			search: '',
			nameText: '',
			textoPrueba: '',
		};
		//this._getSesionAsync();
		//AsyncStorage.clear();
		//sql = new SQL();
	}

	state = {
		fontsLoaded: false,
	};

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);

		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	changeTextoPrueba = (value) => {
		this.setState({ textoPrueba: value });
	};

	changeRenglon = (value) => {
		this.setState({ renglon: value });
	};

	/* const [isLoadingComplete, setLoadingComplete] = useState(false); */

	render() {
		//if (!isLoadingComplete && !props.skipLoadingScreen) {
		if (!this.state.fontsLoaded) {
			return (
				<AppLoading
				/* startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)} */
				/>
			);
		} else {
			return (
				<View style={styles.container}>
					<StatusBar
						setStatusBarStyle={{ style: 'dark' }}
						style="dark"
						backgroundColor="white"
						translucent={true}
					/>

					<AppNavigator screenProps={this.state} />
				</View>
			);
		}
	}
}
/* async function loadResourcesAsync() {
  console.log('Hola?');
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/icon.png'),
      require('./assets/images/splash.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
     
      'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      
      'Ubuntu Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    }),
  ]);
} */

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
