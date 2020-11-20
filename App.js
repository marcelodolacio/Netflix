import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';

import Tabs from './routes/tab'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
        <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

