import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Metricas from '../HK/Metricas';
import Location from '../HK/Location';
import Schedule from '../HK/Schedule';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeName = "Metricas";
const detailsName = "Location";
const settingsName = "Schedule";

const Tab = createBottomTabNavigator();

const Navbar = () => {
  return (
    <Tab.Navigator
      initialRouteName={detailsName}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
              
              if (rn === homeName) {
                  iconName = focused ? 'medkit' : 'medkit-outline';
                  
                } else if (rn === detailsName) {
                    iconName = focused ? 'navigate' : 'navigate-outline';
                    
                } else if (rn === settingsName) {
                    iconName = focused ? 'calendar' : 'calendar';
                }
            
                return <Ionicons name={iconName} size={size} color={color} />;
            },
         headerShown: false,
        tabBarShowLabel:false,
         tabBarActiveTintColor: '#5CC5BA',
         tabBarInactiveTintColor: 'grey',
         tabBarLabelStyle: { paddingBottom: 20, fontSize: 10 },
         tabBarStyle: {  height: 60,  borderTopLeftRadius: 20,
            borderTopRightRadius: 20} })}
        >

      <Tab.Screen name={homeName} component={Metricas} />
      <Tab.Screen name={detailsName} component={Location} />
      <Tab.Screen name={settingsName} component={Schedule} />

    </Tab.Navigator>
  )
}

export default Navbar

const styles = StyleSheet.create({})