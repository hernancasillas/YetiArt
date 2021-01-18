import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import DrawerNavigatorAdmin from './DrawerNavigatorAdmin';

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			DrawerNavigator: DrawerNavigatorAdmin,
		},
		{
			initialRouteName: 'AuthLoading',
		}
	)
);
