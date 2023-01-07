/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { appActions, appSelector } from '../redux/appRedux';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Profile = (props) => {

  const user = useSelector(appSelector.user)

  const {leftComponent} = props;

  const navigation = useNavigation();
  const navigateTo = (route) => {
    navigation.navigate(route)
  }

  return (
    <SafeAreaProvider>
      <Header title='Profile'
        leftComponent={leftComponent?leftComponent:(
				<View>
				  <TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => navigateTo('Home')}
				  >
					<Icon type="font-awesome-5" name="arrow-left" color="white" />
				  </TouchableOpacity>
				</View>
			)}

      />
        <View style={styles.wiewGrid}>
			    <Text style={styles.highlightText}>{user.name}</Text>
          <Text style={styles.textButton}>{user.type}</Text>
	      </View>
    </SafeAreaProvider>
  );   
};

const styles = StyleSheet.create({
  highlightText:{
    color:'black',
    fontSize: 25,
    fontWeight:'600',
    textDecorationLine: 'underline'
  },
  textButton:{
    color:'black',
    fontSize: 20,
    fontWeight:'600'
  },
  wiewGrid: {
    flex:1,
    justifyContent:'center',
    alignItems :'center',
    width:'100%',
	  height:'100%'
  },
  buttonGrid: {
	elevation: 3,
	justifyContent: 'center',
	alignItems: 'center',
  width: width*.4,
  height: width*.4,
  borderRadius:8
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Profile;