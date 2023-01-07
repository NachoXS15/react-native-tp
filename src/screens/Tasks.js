import React, { useState } from 'react';
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
import { 
  Input,
  CheckBox,
  Button,
  Stack
} from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import { appSelector, appActions } from '../redux/appRedux';
import {v4 as uuid} from 'uuid';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const Tasks = (props) => {
  const dispatch = useDispatch();
  const todo = useSelector(appSelector.todo);
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e)
  }
  const addTask = () =>{
    dispatch(appActions.addTodo({text: text, id: todo.length +1 }))
    setText('')
  }

  const handleChecked = (e, id) => {
    dispatch(appActions.setCompletedTodo({id, completed: e}))
  }

  const delTask = (id) =>{
    dispatch(appActions.deleteTodo(id))
  }

  const {leftComponent} = props;

  const navigation = useNavigation();
  const navigateTo = (route) => {
    navigation.navigate(route)
  }
  
  return (
    <SafeAreaProvider>
      <Header title='Tasks'
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
        <ScrollView style={styles.wiewGrid}>
          <View style={{flex:1, width: width}}>
              <Input
              placeholder='Ingrese nueva tarea'
              value={text}
              onChangeText={(e)=>handleChange(e)}
          />
            <Button title='Agregar tarea' onPress={()=>addTask()} />
          </View>   
          
          <View style={{flex:4, width: width, alignItems:'center'}}>
            {todo.map((t,index)=>
              <View key={t.id} style={{display:'flex', flexDirection:'row', aligItems:'center', justifyContent:'space-around'}}>
                <CheckBox
                  checked={t.completed}
                  onPress={() => handleChecked(!t.completed, t.id)}
                />
                <Text style={{color:'black', textAlign:'center'}} key={t.id}>{t.text}</Text>
                <Button title='Eliminar' onPress={()=>delTask(t.id)} />
              </View>
            )
            }
          </View> 
          
	      </ScrollView>
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

export default Tasks;