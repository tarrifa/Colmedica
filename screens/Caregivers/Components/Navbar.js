import { StyleSheet} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Metricas from '../Patients/Metricas';
import Location from '../Components/Location';
import Schedule from '../Patients/Schedule';
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
          tabBarIcon: ({ focused, color }) => {
              let iconName;
              let rn = route.name;
              
              if (rn === homeName) {
                  iconName = focused ? 'medkit' : 'medkit-outline';
                  
                } else if (rn === detailsName) {
                    iconName = focused ? 'navigate' : 'navigate-outline';
                    
                } else if (rn === settingsName) {
                    iconName = focused ? 'calendar' : 'calendar';
                }
            
                return <Ionicons name={iconName} size={32} color={color} />;
            },
         headerShown: false,
        tabBarShowLabel:false,
         tabBarActiveTintColor: '#5CC5BA',
         tabBarInactiveTintColor: 'grey',
         tabBarStyle: {  height: 72,  borderTopLeftRadius: 16,
            borderTopRightRadius: 16, paddingTop:8} ,
          style:{flex:1, alignItems:'center', justifyContent:'center'}})}
        >

      <Tab.Screen name={homeName} component={Metricas} />
      <Tab.Screen name={detailsName} component={Location} />
      <Tab.Screen name={settingsName} component={Schedule} />

    </Tab.Navigator>
  )
}

export default Navbar

const styles = StyleSheet.create({})