import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/Auth/SignUp";
import Patients from "./screens/HK/Patients";
import Navbar from "./screens/Component/Navbar";
import loggedIn from "./screens/Auth/Login";
import { auth } from "./firebase";
import Demographics from "./screens/Caregiver/Personal/Demographics";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#19191a" },
  headerTitleStyle: { color: "#fafafa" },
  headerTintColor: "#fafafa",
  headerBackTitle: "",
};

export default function App() {
  return(

  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {auth.currentUser !=null ? (
         */}
        <Stack.Group>
          <Stack.Screen name="Patients" component={Patients} />
          <Stack.Screen name="Navbar" component={Navbar} />
  
    
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Demographics" component={Demographics} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Group>
      {/* )} */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}
