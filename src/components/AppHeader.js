/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

import { useDispatch } from 'react-redux';
import { appActions } from '../redux/appRedux';

import { Header, Icon } from '@rneui/themed';


const AppHeader = (props) => {
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(appActions.setUser(false))
	}

	const {title= 'Pilar Tecno', rightComponent, leftComponent} = props;
	return (
		<Header
			leftComponent={leftComponent?leftComponent:(
				// <View style={styles.headerRight}>
				// 	<TouchableOpacity
				// 	  style={{ marginLeft: 10 }}
				// 	>
				// 	  <Icon type="font-awesome-5" name="arrow-" color="white" />
				// 	</TouchableOpacity>
			  	// </View>
				null
			)}
			rightComponent={rightComponent?rightComponent:(
				<View style={styles.headerRight}>
				  <TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => logOut()}
				  >
					<Icon type="font-awesome-5" name="arrow-right" color="white" />
				  </TouchableOpacity>
				</View>
			)}
			
			centerComponent={{ text: title, style: styles.heading }}
		  />
	  );
};   


const styles = StyleSheet.create({
	headerContainer: {
	  justifyContent: 'center',
	  alignItems: 'center',
	  backgroundColor: '#397af8',
	  marginBottom: 20,
	  width: '100%',
	  paddingVertical: 15,
	},
	heading: {
	  color: 'white',
	  fontSize: 22,
	  fontWeight: 'bold',
	},
	headerRight: {
	  display: 'flex',
	  flexDirection: 'row',
	  marginTop: 5,
	},
	headerLeft: {
		
	},
	subheaderText: {
	  color: 'white',
	  fontSize: 16,
	  fontWeight: 'bold',
	},
});

export default AppHeader;