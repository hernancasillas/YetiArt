import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Icon, Button } from 'react-native-elements';
import Modal from "react-native-modal";

export default class CustomAlert extends Component {
  constructor(props) {
    super(props);
    //console.log('Props: ', props);
    this.state = {
        isModalVisible: false
    };
  }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { isVisible } = nextProps;
      //  console.log('NextProps: ', nextProps);
        if(this.props.isVisible!=isVisible){
            this.setState({
                isModalVisible: isVisible
            });
        }
    }
  render() {
    return (
        <Modal
            isVisible={this.state.isModalVisible}
            backdropOpacity={0.5}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
            onBackButtonPress={() => this.setState({ isModalVisible: false })}
            animationIn="zoomInDown"
            animationOut="zoomOutUp"
            animationInTiming={900}
            animationOutTiming={600}
            backdropTransitionInTiming={600}
            backdropTransitionOutTiming={600}>
            <View style={styles.content}>
                <View style={styles.titleContainer}>
                    <Icon
                        name='exclamationcircleo'
                        type='antdesign'
                        size={36}
                        color={Colors.gradientVencedor[1]}
                    />
                    <View style={{ width: 10 }} />
                    <Text style={styles.contentTitle}>{this.props.title}</Text>
                </View>
                {this.props.showOnlyConfirm ? <Button
                    onPress={this.props.onPressConfirm}
                    title={this.props.confirmButtonLabel}
                    containerStyle={{ alignSelf: 'center' }}
                    buttonStyle={styles.confirmButtonStyle}
                    titleStyle={styles.confirmButtonTitle}
                /> : <View style={{ flexDirection: 'row' }}>
                        <Button
                            onPress={this.props.onPressCancel}
                            title={'Cancelar'}
                            containerStyle={{ flex: 1 }}
                            buttonStyle={styles.cancelButtonStyle}
                            titleStyle={styles.cancelButtonTitle}
                        />
                        <View style={{ width: 10 }} />
                        <Button
                            onPress={this.props.onPressConfirm}
                            title={this.props.confirmButtonLabel}
                            containerStyle={{ flex: 1 }}
                            buttonStyle={styles.confirmButtonStyle}
                            titleStyle={styles.confirmButtonTitle}
                        />
                    </View>
                    }
            </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    titleContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 20,
         
    },
    contentTitle: {
        fontFamily: 'ebrima-bold',
        fontSize: 16,
        flex: 1,
        flexWrap: 'wrap',
        color: Colors.textColor,
        
    },
    confirmButtonStyle: {
        backgroundColor: Colors.gradientVencedor[1],
        borderRadius: 0
    },
    confirmButtonTitle: {
        color: Colors.white,
        fontFamily: 'ebrima-bold',
        fontSize: 14
    },
    cancelButtonStyle: {
        backgroundColor: Colors.cancelButtonColor,
        borderRadius: 0
    },
    cancelButtonTitle: {
        color: Colors.textColor,
        fontFamily: 'ebrima-bold',
        fontSize: 14
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
