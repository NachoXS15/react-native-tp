import { createStackNavigator } from '@react-navigation/stack';
import {Tabs} from './tabs';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const AppStack = () => {

    const session = true
    return (
          <Stack.Navigator screenOptions={{headerShown: false}}>
              {
                  session?
                  <Stack.Screen name="Main" component={Tabs} />
                  :
                  <Stack.Screen name="Login" component={Login} />
              }
          </Stack.Navigator>
    );
}

