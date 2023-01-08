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
import {NavigationContainer} from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../components/AppHeader';
import 'react-native-gesture-handler';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Home = () => {
  const navigation = useNavigation();
  const navigateTo = (route) => {
    navigation.navigate(route)
  }

  return (
    <SafeAreaProvider >
    
	  <Header />
      <ImageBackground style={{width: width, height: height}} source={ require("../assets/images/messi.jpg") }>
      <View style={{flex:1}}>
        <View style={{flexDirection:'row', flex:1}}>
          <View style={{...styles.wiewGrid, justifyContent: 'flex-end', paddingBottom:'10%'}}>
			      <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'#fff'}} onPress={()=>navigateTo('Tasks')}
      >
			      	<Text style={styles.textButton}>TAREAS</Text>
			      </TouchableOpacity>
          </View>
          <View style={{...styles.wiewGrid, justifyContent: 'flex-end', paddingBottom:'10%'}}>
            <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'#fff'}} onPress={()=>navigateTo('Profile')}>
			  	    <Text style={styles.textButton}>PERFIL</Text>
			      </TouchableOpacity>
          </View>
        </View>
	    <View style={{flexDirection:'row', flex:1}}>
	      	<View style={{...styles.wiewGrid, justifyContent: 'flex-start'}}>
		    	  <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'#fff'}} onPress={()=>navigateTo('Listas')}>
		    	  	<Text style={styles.textButton}>POKEDEX</Text>
		    	  </TouchableOpacity>
          </View>
          <View style={{...styles.wiewGrid, justifyContent: 'flex-start'}}>
		    	<TouchableOpacity style={{...styles.buttonGrid, backgroundColor:'#fff'}} onPress={()=>navigateTo('Maps')}>
		    		<Text style={styles.textButton}>MAPA</Text>
		    	</TouchableOpacity>
          </View>
	    </View>
        
      </View>
      </ImageBackground>
    </SafeAreaProvider>
  );   
};

const styles = StyleSheet.create({
  textButton:{
    textAlign:'center',
    color:'#000',
    fontWeight: '600',
    fontSize: 20
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

export default Home;