import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import Collapsible from 'react-native-collapsible';
import { UbuntuBoldText, UbuntuRegularText } from './StyledText';

export default class ItemCorrida extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: 1,
            collapsed2: true,
        }
    }
    render(){
        const{fecha, folio, precio, tipo, lang, status, status_pay, width} = this.props;
        const  URL  = 'http://co.pruebasdanthop.com/';


        

        const bgColor = {borderLeftColor: Colors.gradientVencedor[1]};
        
        return(
            <View style={{width: '90%', 
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
                elevation: 1,
                backgroundColor: 'white',
                alignSelf: 'center',
                marginVertical: 10,
                }}>
                  <TouchableOpacity style={{flexDirection: 'row', height: 50,justifyContent: 'space-between', alignItems: 'center',
                                        width: '100%', alignSelf: 'center', borderWidth: 0,
                                        
                                    }} 
                                onPress={() => {
                                    this.setState({collapsed2: !this.state.collapsed2})
                                }}>
                                    
                                    <View>
                                <UbuntuBoldText style={{marginLeft: 10, color: Colors.gradientVencedor[1], fontWeight: 'bold', fontSize: 16}}>{folio}</UbuntuBoldText>
                                <UbuntuRegularText style={{marginLeft: 10, color: Colors.gradientVencedor[1], fontSize: 16}}>{fecha}</UbuntuRegularText>
                                </View>
                                <Icon
                                    name={this.state.collapsed2 ? 'caret-down' : 'caret-up'}
                                    type='font-awesome'
                                    color= {Colors.gradientVencedor[1]}
                                    size={35}
                                    containerStyle={{
                                        marginRight: 10,
                                        marginLeft: 10
                                    }}
                                />
                                
                </TouchableOpacity>
              
                <Collapsible collapsed={this.state.collapsed2} style={{ width: '100%'}}>
                    <TouchableOpacity style={{borderWidth: 0, width: '100%',
                    margin: 10,
                    }}
                    onPress={this.props.onPress}
                  >
                        <UbuntuBoldText style={{}}>{status_pay}</UbuntuBoldText>
                        <UbuntuRegularText>{status}</UbuntuRegularText>
                        
                        <View>
                            <UbuntuRegularText style={{}}>{tipo}</UbuntuRegularText>
                            <UbuntuRegularText style={{}}>{precio}</UbuntuRegularText>
                        </View>
                        <UbuntuRegularText style={{color: Colors.gradientVencedor[1], alignSelf: 'flex-end', marginRight: 20, marginTop: 5}}>{'Ver más' + ' >'}</UbuntuRegularText>
                    </TouchableOpacity>
                    
                </Collapsible>
                  
                </View>
        );
    }

    

}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 25,
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 20
    },
    imageStyle: {
        width: '100%',
        height: 500
    },
    view1: {
        flex: 1,
    },
    view2: {
        alignItems: 'center', 
        flexDirection: "row"
    },
    iconStyle: {
        width: 30,
        height: 30,  
    },
    iconStyleLeft: {
        width: 30,
        height: 30,
        alignSelf: 'flex-end',
    },
    textCardStyle:{
        fontSize: 15,
        
        marginRight: 20,
    },
    itemShadow:{ 
        flexDirection: 'row',
        height: '100%', 
        alignItems: 'center', 
        width: '99%', 
        justifyContent: 'space-between', 
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        backgroundColor: 'white',
        borderLeftWidth: 20,
        padding: 20,
    }
});

