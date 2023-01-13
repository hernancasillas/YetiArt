import React, { Component } from 'react';
import {
	StatusBar,
	StyleSheet,
	View,
	Switch,
	ScrollView,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {
	UbuntuBoldText,
	UbuntuRegularText,
	ArialBold,
	Bauhaus,
	BeautifulLovers,
	Blarak,
	BringHeartRegular,
	BuchananBold,
	ClarendonBold,
	CookieRegular,
	COOPBL,
	Dutch801,
	EbrimaBoldText,
	ErasBold,
	FranklinGothic,
	Geometric415,
	GillSansUltraBold,
	Gloucester,
	Impact,
	LemonRegular,
	LuckiestGuy,
	Magneto,
	MilasianCircaBold,
	NFLDolphins,
	NFLEagles,
	OrbitronBold,
	PermanentMarker,
	Pistoletto,
	Playbill,
	ROCK,
	SHOWG,
	STENCIL,
	StrawberryBlossom,
	SwissBold,
	TheAthalita,
	Times,
	VeganStyle,
	Vladiviqo,
	//LASER
	Aldine,
	Algerian,
	Andaluz,
	AromaticGinger,
	BankGothic,
	BarrioRegular,
	Bauhs93,
	BRADHITC,
	BRUSHSCI,
	BubbleGumSans,
	CabinSketch,
	Curlz,
	Edwardian,
	Emilio,
	FrederickatheGreat,
	FreestyleScript,
	FrenchScript,
	Gabriola,
	Harrington,
	Haettenschweiler,
	HolyRavioliNF,
	InformalRoman,
	Jasmine,
	Jokerman,
	JuiceITC,
	KristenITC,
	Lucida,
	TheParthenon,
	Vinet,
} from '../components/StyledText';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Todas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			nameText: this.props.screenProps.textoPrueba,
			nameOriginal: this.props.screenProps.textoPrueba,
			reglon: this.props.screenProps.renglon,
			fontSize: 40,
		};
	}

	static navigationOptions = {
		header: null,
	};

	// Render any loading content that you like here
	render() {
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
							<Icon name="chevron-left" type="font-awesome" color="black" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								this.props.navigation.navigate('AllFonts');
							}}
						>
							<Icon name="search" type="font-awesome" color={'black'} />
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1 }}>
						<UbuntuBoldText style={styles.textStyle}>Todas las Fonts</UbuntuBoldText>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-around',
								width: '100%',
								borderWidth: 0,
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
										this.props.screenProps.renglon
											? 'rgb(48, 150, 199)'
											: '#c8c8c8'
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
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								marginBottom: 10,
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
						<ScrollView
							centerContent={true}
							minimumZoomScale={-5}
							maximumZoomScale={5}
							style={{
								flex: 1,
							}}
						>
							<View style={styles.viewStyle}>
								<BeautifulLovers style={styles.fontTitleStyle}>
									BeautifulLovers
								</BeautifulLovers>
								<BeautifulLovers
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BeautifulLovers>
							</View>
							<View style={styles.viewStyle}>
								<StrawberryBlossom style={styles.fontTitleStyle}>
									Strawberry
								</StrawberryBlossom>
								<StrawberryBlossom
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</StrawberryBlossom>
							</View>
							<View style={styles.viewStyle}>
								<BringHeartRegular style={styles.fontTitleStyle}>
									Bring Heart Regular
								</BringHeartRegular>
								<BringHeartRegular
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BringHeartRegular>
							</View>
							<View style={styles.viewStyle}>
								<CookieRegular style={styles.fontTitleStyle}>
									Cookie Regular
								</CookieRegular>
								<CookieRegular
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</CookieRegular>
							</View>
							<View style={styles.viewStyle}>
								<MilasianCircaBold style={styles.fontTitleStyle}>
									Milasian Circa Bold
								</MilasianCircaBold>
								<MilasianCircaBold
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</MilasianCircaBold>
							</View>
							<View style={styles.viewStyle}>
								<Pistoletto style={styles.fontTitleStyle}>Pistoletto</Pistoletto>
								<Pistoletto
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Pistoletto>
							</View>
							<View style={styles.viewStyle}>
								<TheAthalita style={(styles.fontTitleStyle, { lineHeight: 35 })}>
									The Athalita
								</TheAthalita>
								<TheAthalita
									style={{
										fontSize: this.state.fontSize,
										textAlign: 'center',
										lineHeight:
											this.state.fontSize < 50
												? this.state.fontSize + 40
												: this.state.fontSize + 50,
									}}
								>
									{this.props.screenProps.textoPrueba}
								</TheAthalita>
							</View>

							<View style={styles.viewStyle}>
								<VeganStyle
									style={
										(styles.fontTitleStyle, { lineHeight: 30, borderWidth: 0 })
									}
								>
									Vegan Style
								</VeganStyle>
								<VeganStyle
									style={{
										fontSize: this.state.fontSize,
										textAlign: 'center',
										lineHeight:
											this.state.fontSize < 50
												? this.state.fontSize + 40
												: this.state.fontSize + 50,
										borderWidth: 0,
										textAlignVertical: 'center',
										alignSelf: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba + ' '}
								</VeganStyle>
							</View>
							<View style={styles.viewStyle}>
								<Vladiviqo style={styles.fontTitleStyle}>Vladiviqo</Vladiviqo>
								<Vladiviqo
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Vladiviqo>
							</View>
							<View style={styles.viewStyle}>
								<Blarak style={styles.fontTitleStyle}>Blarak</Blarak>
								<Blarak
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Blarak>
							</View>
							<View style={styles.viewStyle}>
								<ArialBold style={styles.fontTitleStyle}>Arial Black</ArialBold>
								<ArialBold
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</ArialBold>
							</View>
							<View style={styles.viewStyle}>
								<Bauhaus style={styles.fontTitleStyle}>Bauhaus</Bauhaus>
								<Bauhaus
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Bauhaus>
							</View>

							<View style={styles.viewStyle}>
								<BuchananBold style={styles.fontTitleStyle}>
									Buchanan Bold
								</BuchananBold>
								<BuchananBold
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BuchananBold>
							</View>
							<View style={styles.viewStyle}>
								<ClarendonBold style={styles.fontTitleStyle}>
									Clarendon Bold
								</ClarendonBold>
								<ClarendonBold
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</ClarendonBold>
							</View>

							<View style={styles.viewStyle}>
								<COOPBL style={styles.fontTitleStyle}>Cooper Black</COOPBL>
								<COOPBL
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</COOPBL>
							</View>
							<View style={styles.viewStyle}>
								<Dutch801 style={styles.fontTitleStyle}>Dutch 801</Dutch801>
								<Dutch801
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Dutch801>
							</View>
							<View style={styles.viewStyle}>
								<ErasBold style={styles.fontTitleStyle}>Eras Bold</ErasBold>
								<ErasBold
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</ErasBold>
							</View>
							<View style={styles.viewStyle}>
								<FranklinGothic style={styles.fontTitleStyle}>
									Franklin Gothic
								</FranklinGothic>
								<FranklinGothic
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</FranklinGothic>
							</View>
							<View style={styles.viewStyle}>
								<Geometric415 style={styles.fontTitleStyle}>
									Geometric 415
								</Geometric415>
								<Geometric415
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Geometric415>
							</View>
							<View style={styles.viewStyle}>
								<GillSansUltraBold style={styles.fontTitleStyle}>
									Gill Sans Ultra
								</GillSansUltraBold>
								<GillSansUltraBold
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</GillSansUltraBold>
							</View>
							<View style={styles.viewStyle}>
								<Gloucester style={styles.fontTitleStyle}>Gloucester</Gloucester>
								<Gloucester
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Gloucester>
							</View>
							<View style={styles.viewStyle}>
								<Impact style={styles.fontTitleStyle}>Impact</Impact>
								<Impact
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Impact>
							</View>
							<View style={styles.viewStyle}>
								<LemonRegular style={styles.fontTitleStyle}>
									Lemon Regular
								</LemonRegular>
								<LemonRegular style={{ fontSize: 40, textAlign: 'center' }}>
									{this.props.screenProps.textoPrueba}
								</LemonRegular>
							</View>
							<View style={styles.viewStyle}>
								<LuckiestGuy style={styles.fontTitleStyle}>
									Luckiest Guy
								</LuckiestGuy>
								<LuckiestGuy
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</LuckiestGuy>
							</View>
							<View style={styles.viewStyle}>
								<Magneto style={styles.fontTitleStyle}>Magneto</Magneto>
								<Magneto
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Magneto>
							</View>

							<View style={styles.viewStyle}>
								<NFLDolphins style={(styles.fontTitleStyle, {})}>
									NFL Dolphins
								</NFLDolphins>
								<NFLDolphins
									style={{
										fontSize: this.state.fontSize,
										textAlign: 'center',
										lineHeight:
											this.state.fontSize < 50
												? this.state.fontSize + 40
												: this.state.fontSize + 50,
									}}
								>
									{this.props.screenProps.textoPrueba}
								</NFLDolphins>
							</View>
							<View style={styles.viewStyle}>
								<NFLEagles style={styles.fontTitleStyle}>NFL Eagles</NFLEagles>
								<NFLEagles
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</NFLEagles>
							</View>
							<View style={styles.viewStyle}>
								<OrbitronBold style={styles.fontTitleStyle}>
									Orbitron Bold
								</OrbitronBold>
								<OrbitronBold
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</OrbitronBold>
							</View>
							<View style={styles.viewStyle}>
								<PermanentMarker style={styles.fontTitleStyle}>
									Permanent Marker
								</PermanentMarker>
								<PermanentMarker
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</PermanentMarker>
							</View>

							<View style={styles.viewStyle}>
								<Playbill style={styles.fontTitleStyle}>Playbill</Playbill>
								<Playbill
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Playbill>
							</View>
							<View style={styles.viewStyle}>
								<ROCK style={styles.fontTitleStyle}>Rockwell</ROCK>
								<ROCK
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</ROCK>
							</View>
							<View style={styles.viewStyle}>
								<SHOWG style={styles.fontTitleStyle}>Showcard</SHOWG>
								<SHOWG
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</SHOWG>
							</View>
							<View style={styles.viewStyle}>
								<STENCIL style={styles.fontTitleStyle}>STENCIL</STENCIL>
								<STENCIL
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</STENCIL>
							</View>

							<View style={styles.viewStyle}>
								<SwissBold style={styles.fontTitleStyle}>Swiss Bold</SwissBold>
								<SwissBold style={{ fontSize: 40, textAlign: 'center' }}>
									{this.props.screenProps.textoPrueba}
								</SwissBold>
							</View>

							<View style={styles.viewStyle}>
								<Times style={styles.fontTitleStyle}>Times New</Times>
								<Times
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Times>
							</View>
							{/*AQUI ESTAN LAS FONTS DE LASER*/}
							<UbuntuBoldText style={styles.textStyle}>LASER</UbuntuBoldText>
							<View style={styles.viewStyle}>
								<TheParthenon style={styles.fontTitleStyle}>
									The Parthenon
								</TheParthenon>
								<TheParthenon
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</TheParthenon>
							</View>
							<View style={styles.viewStyle}>
								<AromaticGinger style={styles.fontTitleStyle}>
									Aromatic Ginger
								</AromaticGinger>
								<AromaticGinger
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</AromaticGinger>
							</View>
							<View style={styles.viewStyle}>
								<Edwardian style={styles.fontTitleStyle}>Edwardian</Edwardian>
								<Edwardian
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Edwardian>
							</View>
							<View style={styles.viewStyle}>
								<FrenchScript style={styles.fontTitleStyle}>
									French Script
								</FrenchScript>
								<FrenchScript
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</FrenchScript>
							</View>
							<View style={styles.viewStyle}>
								<Aldine style={styles.fontTitleStyle}>Aldine</Aldine>
								<Aldine
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Aldine>
							</View>
							<View style={styles.viewStyle}>
								<BRUSHSCI style={styles.fontTitleStyle}>Brush Script</BRUSHSCI>
								<BRUSHSCI
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BRUSHSCI>
							</View>
							<View style={styles.viewStyle}>
								<Algerian style={styles.fontTitleStyle}>Algerian</Algerian>
								<Algerian
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Algerian>
							</View>
							<View style={styles.viewStyle}>
								<Andaluz style={styles.fontTitleStyle}>Andaluz</Andaluz>
								<Andaluz
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Andaluz>
							</View>
							<View style={styles.viewStyle}>
								<BankGothic style={styles.fontTitleStyle}>Bank Gothic</BankGothic>
								<BankGothic
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BankGothic>
							</View>
							<View style={styles.viewStyle}>
								<BarrioRegular style={styles.fontTitleStyle}>
									Barrio Regular
								</BarrioRegular>
								<BarrioRegular
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</BarrioRegular>
							</View>
							<View style={styles.viewStyle}>
								<BRADHITC style={styles.fontTitleStyle}>Bradley Hand</BRADHITC>
								<BRADHITC
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BRADHITC>
							</View>

							<View style={styles.viewStyle}>
								<BubbleGumSans style={styles.fontTitleStyle}>
									Bubble Gum
								</BubbleGumSans>
								<BubbleGumSans
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</BubbleGumSans>
							</View>
							<View style={styles.viewStyle}>
								<CabinSketch style={styles.fontTitleStyle}>
									Cabin Sketch
								</CabinSketch>
								<CabinSketch
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</CabinSketch>
							</View>
							<View style={styles.viewStyle}>
								<Curlz style={styles.fontTitleStyle}>Curlz</Curlz>
								<Curlz
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Curlz>
							</View>

							<View style={styles.viewStyle}>
								<Emilio style={styles.fontTitleStyle}>Emilio</Emilio>
								<Emilio
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Emilio>
							</View>
							<View style={styles.viewStyle}>
								<FrederickatheGreat style={styles.fontTitleStyle}>
									Frederick The Great
								</FrederickatheGreat>
								<FrederickatheGreat
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</FrederickatheGreat>
							</View>
							<View style={styles.viewStyle}>
								<FreestyleScript style={styles.fontTitleStyle}>
									Freestyle Script
								</FreestyleScript>
								<FreestyleScript
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</FreestyleScript>
							</View>

							<View style={styles.viewStyle}>
								<Gabriola style={styles.fontTitleStyle}>Gabriola</Gabriola>
								<Gabriola
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Gabriola>
							</View>
							<View style={styles.viewStyle}>
								<Harrington style={styles.fontTitleStyle}>Harrington</Harrington>
								<Harrington
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Harrington>
							</View>
							<View style={styles.viewStyle}>
								<Haettenschweiler style={styles.fontTitleStyle}>
									Haettenschweiler
								</Haettenschweiler>
								<Haettenschweiler
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Haettenschweiler>
							</View>
							<View style={styles.viewStyle}>
								<HolyRavioliNF style={styles.fontTitleStyle}>
									Holy Ravioli
								</HolyRavioliNF>
								<HolyRavioliNF
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</HolyRavioliNF>
							</View>
							<View style={styles.viewStyle}>
								<InformalRoman style={styles.fontTitleStyle}>
									Informal Roman
								</InformalRoman>
								<InformalRoman
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</InformalRoman>
							</View>

							<View style={styles.viewStyle}>
								<Jasmine style={styles.fontTitleStyle}>Jasmine</Jasmine>
								<Jasmine
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Jasmine>
							</View>
							<View style={styles.viewStyle}>
								<Jokerman style={styles.fontTitleStyle}>Jokerman</Jokerman>
								<Jokerman
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Jokerman>
							</View>
							<View style={styles.viewStyle}>
								<JuiceITC style={styles.fontTitleStyle}>Juice ITC</JuiceITC>
								<JuiceITC
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</JuiceITC>
							</View>
							<View style={styles.viewStyle}>
								<KristenITC style={styles.fontTitleStyle}>Kristen ITC</KristenITC>
								<KristenITC
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</KristenITC>
							</View>
							<View style={styles.viewStyle}>
								<Lucida style={styles.fontTitleStyle}>Lucida</Lucida>
								<Lucida
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Lucida>
							</View>
							<View style={styles.viewStyle}>
								<Vinet style={styles.fontTitleStyle}>Vineta</Vinet>
								<Vinet
									style={{
										fontSize: this.state.fontSize - 15,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Vinet>
							</View>
						</ScrollView>
					</View>
				</ImageBackground>

				<StatusBar style="dark" />
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
	},
	fontTitleStyle: {
		fontSize: 20,
		paddingLeft: 5,
	},
});
