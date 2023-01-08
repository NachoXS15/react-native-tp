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
import { Button } from '@rneui/themed';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const List = (props) => {
  const {leftComponent} = props;
  const navigation = useNavigation();
  const navigateTo = (route, data) => {
    navigation.navigate(route, {data})
  }
  
  const dispatch = useDispatch()
  const [pokemons, setPokemons] = useState(null);
  const [next, setNext] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [data, setData ] = useState(null);
  const loading = useSelector(appSelector.loading);

  useEffect(()=>{
    getPokemons()
	},[])

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

	const renderItem = ({ item }) => {
		const path = item.url.split('/')
    const imgID = getPokemonImgId(path[6])
		return(
			<ListItem bottomDivider onPress={()=>navigateTo('ListDetail', {url: item.data})}>
	    		<Avatar source={{uri:`${IMG_URL}${imgID}.png`}} />
	    		<ListItem.Content>
	    			<ListItem.Title>{item.name}</ListItem.Title>
	    		</ListItem.Content>
	    		<ListItem.Chevron />
	  	</ListItem>
		)
	}

  const loadMore = async () => {
    try{
        dispatch(appActions.loading(true))
        const result = await api.GET(next)
        if (result) {
          
            setPokemons([...pokemons, ...result.results])
            setNext(result.next)
        }
    } catch (error){
        console.log(error)
    } finally{
        dispatch(appActions.loading(false))
    }
}

  const renderFooter = () => {
    return(
      <View style={styles.wiewGrid}>
        <Button style={{backgroundColor:'#2089dc', color:'black'}} disabled={false} title='Cargar más' onPress={()=>loadMore()} />
      </View>
    ); 
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

	const keyExtractor = (item, index) => index.toString()

  return (
    <SafeAreaProvider>
        <Header title='Pokedex'
    		leftComponent={leftComponent?leftComponent:(
				<View>
				  <TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={() => navigateTo('Home')}
				  >
					<Icon type="font-awesome-5" name="arrow-left" color="white" />
				  </TouchableOpacity>
				</View>
		)	}
        />
        <FlatList
        	keyExtractor={keyExtractor}
        	data={pokemons}
        	renderItem={(item)=>renderItem(item)}
          ListFooterComponent={()=>renderFooter()}
        />
    </SafeAreaProvider>
  );   
};

const styles = StyleSheet.create({
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

export default List;