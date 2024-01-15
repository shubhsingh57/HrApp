
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyExpenses from '../screen/MyExpenses';
import MyLeave from '../screen/MyLeave';
import BottomTab from './BottomTab';
import Team from '../screen/Team';
import MySpace from '../screen/MySpace';
import Approvals from '../screen/Approvals';

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='MyExpenses' screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyExpenses" component={BottomTab}   />
        <Stack.Screen name="MySpace" component={MySpace}   />
        <Stack.Screen name="Team" component={Team}   />
        <Stack.Screen name="Approvals" component={Approvals}   />
        <Stack.Screen name='MyLeave' component={MyLeave} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default Routes;
