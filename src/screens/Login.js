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

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Login = () => {
  return (

    <SafeAreaProvider >
  
    <View style={{...styles.wiewGrid, paddingBottom:"5%"}}>
            <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  );   
};

const styles = StyleSheet.create({
  textButton:{
    textAlign:'center',
    color:'#fff'
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

export default Login;