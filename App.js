import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./screens/Auth/SignUp";
import Patients from "./screens/Caregivers/Components/Navbar";
import Demographics from "./screens/Auth/Demographics";
import Navbar from "./screens/Caregivers/Components/Navbar";

import HomePage from "./screens/Patients/HomePage";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#19191a" },
  headerTitleStyle: { color: "#fafafa" },
  headerTintColor: "#fafafa",
  headerBackTitle: "",
};

const App = () => {
  const [caregiver, setCargiver] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchData();
      console.log(data)
      setCargiver(data?.caregiver);
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  const fetchData = async () => {
    const usersRef = doc(db, "users", `${auth.currentUser.uid}`);
    const docSnap = await getDoc(usersRef);
    return docSnap.exists() ? docSnap.data() : null;
  };
console.log(caregiver)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Group>
            {caregiver ? (
              <>
                <Stack.Screen name="Patients" component={Patients} />
                <Stack.Screen name="Navbar" component={Navbar} />
                <Stack.Screen name="Demographics" component={Demographics} />
              </>
            ) : (
              <>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="DemographicsPatient" component={Demographics} />
              </>
            )}
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
