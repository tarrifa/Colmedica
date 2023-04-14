import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { auth } from "../../firebase";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Schedule from './Components/Schedule';
import Safety from './Components/Safety'

const homeName = "Safety";
const scheduleName = "Schedule";

const Tab = createBottomTabNavigator();

const HomePage = () => {
  const onSignOut = async () => {
    try {
      await auth.signOut();
      navigation.dispatch(
        CommonActions.navigate({
          name: 'NestedNavigator',
          params: {
            screen: 'Login',
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Button

  buttonStyle={{
    height:40,
    width:40,
    borderRadius:50,
    backgroundColor:"#5CC5BA",
    marginRight:40,
  marginTop:300}}
    onPress={onSignOut}
/>   
      <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
              
              if (rn === homeName) {
                  iconName = focused ? 'medkit' : 'medkit-outline';
                   
                } else if (rn === scheduleName) {
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

      <Tab.Screen name={homeName} component={Safety} />
      <Tab.Screen name={scheduleName} component={Schedule} />
    </Tab.Navigator>
    </>
  )
}

export default HomePage
