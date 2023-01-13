import React, { Component } from 'react';
import { StatusBar, StyleSheet, View, Switch, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import { UbuntuRegularText } from '../components/StyledText';
import Slider from '@react-native-community/slider';
import {
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
	MesquiteStd,
	MilasianCircaBold,
	NFLDolphins,
	NFLEagles,
	OrbitronBold,
	PermanentMarker,
	Pistoletto,
	Playbill,
	Ravie,
	ROCK,
	SHOWG,
	SnigletRegular,
	SportsWorld,
	STENCIL,
	StrawberryBlossom,
	SwissBold,
	TheAthalita,
	Times,
	UbuntuBoldText,
	//UbuntuRegularText,
	VeganStyle,
	Vladiviqo,
	Wreckers,
} from '../components/StyledText';
import DragTextEditor from 'react-native-drag-text-editor';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default class Vinil extends React.Component {
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

	// Render any loading content that you like here
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={require('../assets/images/fondo_yeti.png')}
					style={styles.imageStyle}
				>
					<View style={{ flex: 1 }}>
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
							<View style={styles.viewStyle} onPress={() => {}}>
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
								<LemonRegular
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</LemonRegular>
							</View>
							<View style={styles.viewStyle}>
								<LuckiestGuy style={styles.fontTitleStyle}>
									Luckiest Guy
								</LuckiestGuy>
								<LuckiestGuy
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
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
								<STENCIL style={styles.fontTitleStyle}>Stencil</STENCIL>
								<STENCIL
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</STENCIL>
							</View>

							<View style={styles.viewStyle}>
								<SwissBold style={styles.fontTitleStyle}>Swiss Bold</SwissBold>
								<SwissBold
									style={{
										fontSize: this.state.fontSize - 5,
										textAlign: 'center',
									}}
								>
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
							<View style={styles.viewStyle}>
								<MesquiteStd style={styles.fontTitleStyle}>
									Mesquite Std
								</MesquiteStd>
								<MesquiteStd
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</MesquiteStd>
							</View>
							<View style={styles.viewStyle}>
								<Ravie style={styles.fontTitleStyle}>Ravie</Ravie>
								<Ravie
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</Ravie>
							</View>
							<View style={styles.viewStyle}>
								<SnigletRegular style={styles.fontTitleStyle}>
									Sniglet Regular
								</SnigletRegular>
								<SnigletRegular
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</SnigletRegular>
							</View>
							<View style={styles.viewStyle}>
								<SportsWorld style={styles.fontTitleStyle}>
									Sports World
								</SportsWorld>
								<SportsWorld
									style={{
										fontSize: this.state.fontSize - 10,
										textAlign: 'center',
									}}
								>
									{this.props.screenProps.textoPrueba}
								</SportsWorld>
							</View>
							<View style={styles.viewStyle}>
								<Wreckers style={styles.fontTitleStyle}>Wreckers</Wreckers>
								<Wreckers
									style={{ fontSize: this.state.fontSize, textAlign: 'center' }}
								>
									{this.props.screenProps.textoPrueba}
								</Wreckers>
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
