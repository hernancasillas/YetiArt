import React, { Component } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, Switch } from 'react-native';
import { CheckBox, Input, Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import CustomAlert from './CustomAlert';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { UbuntuBoldText, UbuntuRegularText } from './StyledText';

const ticket = (
	<FontAwesome5
		name={'ticket-alt'}
		solid
		size={18}
		color={Colors.gradientVencedor[1]}
		style={{ marginRight: 20 }}
	/>
);
const web = (
	<FontAwesome5
		name={'globe'}
		solid
		size={18}
		color={Colors.gradientVencedor[1]}
		style={{ marginRight: 20 }}
	/>
);

export default class ItemPasajero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			/* tipoDescuento: this.props.tipo == null ? null : this.props.tipo == '1' ? true : false,
            checked: this.props.checked == null ? false : this.props.checked,
            amount: this.props.cantidad == null ? '' : this.props.cantidad, */
			isModalVisible: false,
			title: 'Necesita 1 o más productos en la cantidad a ordenar.',
		};
	}

	verifyAdd(item, amount) {
		//console.log('AMOUNT EN VERIFY ADD ======= ', this.state.amount);
		// if(this.state.amount != '')
		//{

		if (+amount > 0) this.setState({ checked: true });
		else this.setState({ checked: false });

		console.log('AMOUNT EN VERIFY ADD EN STATE==== ', amount);
		if (!this.state.checked == true) {
			let item = {
				cellar_id: this.props.cellar_id,
				product_id: this.props.item.Producto_id,
				qtty: amount,
				precio: this.props.item.precio, // * amount,
			};
			this.props.addProduct(item);
		} else {
			this.props.removeProduct(item);
		}
		//}
	}
	verifyAddAmount(producto) {
		//console.log('AMOUNT EN VERIFY ADD ======= ', this.state.amount);
		// if(this.state.amount != '')
		//{

		let amount = this.state.amount;
		if (+amount > 0) {
			console.log('DEBO AGREGAR ESTE PRODUCTO : ', producto);

			console.log('AMOUNT EN VERIFY ADD EN STATE==== ', amount);
			if (this.state.checked) {
				console.log('A AGREGAR EN FUNCION ======= ID', producto.id);
				let item = {
					product_id: producto.id,
					descuento: amount,
					tipo_descuento: !this.state.tipoDescuento ? '0' : '1', // 0 porcentaje, 1 dinero
				};
				this.props.addProduct(item);
			} else {
				console.log('A REMOVER ========');
				let item = {
					product_id: producto.id,
					descuento: amount,
					tipo_descuento: !this.state.tipoDescuento ? '0' : '1', // 0 porcentaje, 1 dinero
				};
				this.props.removeProduct(item);
			}
		} else {
			Alert.alert(
				'Deseas deseleccionar ' + item + '?',

				[
					{
						text: 'No',
						onPress: () => this.setState({ amount: this.state.amount, checked: true }),
						style: 'cancel',
					},
					{
						text: 'Si',
						onPress: () => {
							this.setState({ amount: '', checked: false });
							this.verifyAddAmount(item);
						},
					},
				],
				{ cancelable: false }
			);
		}

		//}
	}

	render() {
		const { item, asiento, tipo, tipo_pasajero, tipo_servicio, status } = this.props;
		return (
			<View>
				<UbuntuBoldText style={{}}>FOLIO: {item.FolioBoleto}</UbuntuBoldText>
				<TouchableOpacity
					style={{
						flex: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
					onPress={() => {
						if (this.state.checked) {
							Alert.alert(
								'¿Deseas deseleccionar ' + asiento + '?',
								'',
								[
									{
										text: 'No',
										onPress: () => {},
										style: 'cancel',
									},
									{
										text: 'Si',
										onPress: () => {
											this.setState({
												checked: !this.state.checked,
												amount: '',
											});
											let product = {
												product_id: item.id,
												descuento: this.state.amount,
											};
											this.props.removeProduct(product);
										},
									},
								],
								{ cancelable: false }
							);
						} else {
							this.setState({ checked: !this.state.checked });
						}
					}}
				>
					<CheckBox
						center
						checkedIcon="check-square"
						checked={this.state.checked}
						checkedColor={Colors.gradientVencedor[1]}
						/* onPress={() => {
                                                
                                                    
                                                this.setState({checked: !this.state.checked})
                                                if(!this.state.checked)
                                                    this.verifyAddAmount(item);
                                            }} */
						size={20}
						textStyle={{ fontSize: 12, fontWeight: 'normal' }}
						containerStyle={{
							width: '10%',
							backgroundColor: 'transparent',
							borderWidth: 0,
						}}
					/>

					{tipo == 'SIVYL' ? ticket : web}

					<View style={{ width: '40%' }}>
						<UbuntuBoldText style={{ fontSize: 15, right: 10 }}>
							{tipo_pasajero}
						</UbuntuBoldText>
					</View>
					<View style={{ width: '40%', marginLeft: 10 }}>
						<UbuntuRegularText style={{ fontSize: 15 }}>
							{'Asiento: ' + asiento}
						</UbuntuRegularText>
					</View>
				</TouchableOpacity>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginBottom: 20,
					}}
				>
					<UbuntuRegularText>De: {item.D_PuntoOrigen.slice(9)}</UbuntuRegularText>
					<UbuntuRegularText>Hacia: {item.D_PuntoDestino.slice(9)}</UbuntuRegularText>
				</View>
				{/* {
                    this.state.checked ?
                    <View style={{flexDirection:'row', alignItems: 'center', marginLeft: 20, justifyContent: 'space-between'}}>
                        <View style={{flexDirection:'row', alignItems: 'center', borderWidth: 0, width: '40%'}}>

                            <Text style={{fontSize: 12}}>{'Descuento: '}</Text>
                            <TextInput
                                style={{borderWidth:1, width: '40%', height: 30, fontSize: 12, paddingLeft: 10}}
                                placeholder={!this.state.tipoDescuento ? '%' : '$'}
                                value={this.state.amount}
                                onChangeText={(text)=>{
                                    this.setState({amount: text})
                                    let expresion = /^\d*$/;
                                    if (expresion.test(text)) {
                                        if(+text > 0)
                                        {
                                            this.setState({amount: text, checked: true});
                                            //this.verifyAddAmount(item, amount);
                                        }
                                        else
                                        {
                                            console.log('NO ES > 0');
                                            
                                            Alert.alert(
                                                'Deseas deseleccionar ' + item.name + '?',
                                                'Tiene que ser mayor a 0 para seleccionarlo',
                                                [
                                                  {
                                                    text: 'No',
                                                    onPress: () => this.setState({amount: text}),
                                                    style: 'cancel',
                                                  },
                                                  {
                                                      text: 'Si', onPress: () => {
                                                            this.setState({amount: text, checked: false});
                                                            this.verifyAddAmount(item);
                                                        }
                                                  },
                                                ],
                                                {cancelable: false},
                                              );
                                            //this.verifyAddAmount(item, amount);
                                        }
                                    }
                                }}
                            /> 
                        </View>
                                <Text style={{fontSize: 12}}>{'% / $'}</Text>
                                <Switch
                                    thumbColor={this.state.tipoDescuento ? 'rgb(48, 150, 199)' : '#c8c8c8'}
                                    trackColor={{false: 'rgba(223, 223, 223, 0.1)', true: 'rgba(223, 223, 223, 0.1)'}}
                                    ios_backgroundColor={'rgba(223, 223, 223, 0.1)'}
                                    style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }], left: -10 }}
                                    value={this.state.tipoDescuento}
                                    onValueChange={() => {this.setState({tipoDescuento: !this.state.tipoDescuento})}}
                                />
                            <Icon
                                containerStyle={{
                                    marginRight: 20
                                }}
                                name='save'
                                type='font-awesome'
                                color='#3096c7'
                                onPress={() => {         
                                    if(this.state.amount != '')
                                    {
                                        console.log('Item #', item.id);
                                        this.verifyAddAmount(item);
                                    }
                                    else
                                        Alert.alert('Necesita indicar un porcentaje de descuento');
                                    
                                }}
                            />
                            <Icon
                                containerStyle={{
                                    marginRight: 20
                                }}
                                name='trash'
                                type='font-awesome'
                                color='red'
                                onPress={() => {         
                                    console.log('Item #', item.id);
                                    let product = {                    
                                        product_id: item.id,
                                        descuento: this.state.amount,
                                    }
                                    this.props.removeProduct(product);
                                    this.setState({checked: false, amount: ''})
                                }}
                            />
                        
                    </View> : null

                } */}
			</View>
		);
	}
}
