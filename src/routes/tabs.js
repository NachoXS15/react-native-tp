import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Profile from '../screens/Profile'
import GoogleMap from '../screens/GoogleMaps';
import List from '../screens/List';
import Tasks from '../screens/Tasks';
import { Icon } from '@rneui/themed';
import { Task } from '@mui/icons-material';
import ListDetail from '../screens/ListDetail';

const HomeStack = createStackNavigator();

const HomeScreens = () => {
  const session = true;
  
  return(
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen name="Tasks" component={Tasks}/>
      </HomeStack.Navigator>
  );
}

const ListStack = createStackNavigator();

const ListScreens = () => {
  const session = true;
  
  return(
      <ListStack.Navigator screenOptions={{headerShown: false}}>
        <ListStack.Screen name="List" component={List}/>
        <ListStack.Screen name="ListDetail" component={ListDetail}/>
      </ListStack.Navigator>
  );
}



const Tab = createMaterialBottomTabNavigator();
const PRIMARY_COLOR = '#2089dc';

export const Tabs = () => {
  return (
    <Tab.Navigator
      activeColor='blue' 
      barStyle={{backgroundColor: PRIMARY_COLOR}}
      >
      <Tab.Screen name="Casa" component={HomeScreens} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon
                name='home'
                type='font-awesome'
                color='#fff'
            />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon
                name='user'
                type='font-awesome-5'
                color='#fff'
            />
          ),
        }}/>
      <Tab.Screen name="Maps" component={GoogleMap} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Icon
                name='map'
                type='font-awesome-5'
                color='#fff'
            />
          ),
        }}/>
      <Tab.Screen name="Listas" component={ListScreens} options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon
                name='list'
                type='font-awesome-5'
                color='#fff'
            />
          ),
        }}/>
    </Tab.Navigator>
  );
}