import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SidebarAdmin from '../components/SidebarAdmin';
import VencedorStack from './VencedorStack';

const DrawerNavigatorAdmin = createDrawerNavigator(
	{
		VencedorStack: VencedorStack,
	},
	{
		initialRouteName: 'VencedorStack',

		contentComponent: (props) => <SidebarAdmin {...props} />,
	}
);

export default createAppContainer(DrawerNavigatorAdmin);
