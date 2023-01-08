/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
  ImageBackground,
  FlatList,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useSelector, useDispatch} from "react-redux";
import { appSelector, appActions } from '../redux/appRedux';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { Icon, ListItem, Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import api, {IMG_URL} from '../services/api';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const ListDetail = (props) => {
  const {leftComponent} = props;
  const navigation = useNavigation();
  const navigateTo = (route) => {
    navigation.navigate(route)
  }
  
  const dispatch = useDispatch()
  const [pokemon, setPokemons] = useState(null);
  const { url } = props.route.params.data
 
  useEffect(()=>{
    fetchData();
	},[])

  const fetchData = async (url) => {
    try{
        dispatch(appActions.loading(true))
        const result = await api.GET(url)
        if (result) {
            console.log('poke: ', result)
            setPokemons(result)
        }
    } catch (error){
        console.log(error)
    } finally{
        dispatch(appActions.loading(false))

    }
};

  const handleClose = () => {
    setOpen(false);
  };

	const getPokemonImgId = (id) => {
        console.log('long. '+id.length)
        switch (id.length) {
            case 1:
                return `00${id}`
            case 2:
                return `0${id}`
            default:
                return id
        }
    }

	const getPokemons = async () => {
    	try{
    	    dispatch(appActions.loading(true))
    	    const result = await api.GET(api.pokemons)
    	    if (result) {
    	        console.log('poke: ', result)
    	        setPokemons(result.results)
    	        setNext(result.next)
    	    }
    	} catch (error){
    	    console.log(error)
    	} finally{
    	    dispatch(appActions.loading(false))
    	}
	}
  return (
    <SafeAreaProvider>
        <Header title='Details'
    		  leftComponent={leftComponent?leftComponent:(
				  <View>
				    <TouchableOpacity
				  	style={{ marginLeft: 10 }}
				  	onPress={() => navigateTo('List')}
				    >
				  	<Icon type="font-awesome-5" name="arrow-left" color="white" />
				    </TouchableOpacity>
				  </View>
		      )	
          }
        />
        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../assets/images/image.jpg')}>
            <View style={styles.wiewGrid}>
              <Text style={styles.textType}>Nombre: {pokemon?.name}</Text>
              <Text style={styles.textType}>Experiencia base: {pokemon?.base_experience}</Text>
              <Text style={styles.textType}>Tipo: {pokemon?.types[0].type.name}</Text>
              <Text style={styles.textType}>Peso: {pokemon?.weight/10}Kg</Text>
            </View>
        </ImageBackground>
    </SafeAreaProvider>
  );   
};

const styles = StyleSheet.create({
  textType:{
    color:'red',
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

export default ListDetail;