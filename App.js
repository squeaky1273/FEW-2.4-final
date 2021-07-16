import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Bands from './screens/Bands'
import Stats from './screens/Stats'
import Styles from './screens/Styles'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Bands':
                iconName = focused ? 'people' : 'people';
                break;
              case 'Stats':
                iconName = focused ? 'stats-chart' : 'stats-chart';
                break;
              case 'Styles':
                iconName = focused ? 'ios-musical-notes' : 'ios-musical-notes';
                break;
              default:
              // iconName = focused ? 'ios-desktop' : 'ios-desktop-outline'
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#f00',
          inactiveTintColor: '#600',
          labelStyle: {
            fontSize: 15
          },
          style: {
            backgroundColor: '#000',
            paddingTop: 10,
            paddingBottom: 5,
            flex: 0.07,
          }
        }}>
        <Tab.Screen
          name='Bands' 
          component={Bands} 
        />
        <Tab.Screen
          name='Stats'
          component={Stats}
        />
        <Tab.Screen
          name='Styles'
          component={Styles}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
