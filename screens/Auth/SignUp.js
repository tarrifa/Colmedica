import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Input, Button, Text } from "@rneui/themed";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword,  } from "firebase/auth";
import {  doc, setDoc } from "firebase/firestore";

import { StatusBar } from "react-native";
import { Switch } from "@rneui/base";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cuidador, setCuidador] = useState(false);

  const toggleSwitch = () => setCuidador((previousState) => !previousState);

  const signUp = () => {
    if (password == confirmPassword) {
      if (cuidador) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (user) => {
            await setDoc(doc(db, `users/${user.user.uid}`), {
              name: name,
              lastName: lastName,
              email: email,
              caregiver:true,
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(error.message);
          });
      } else {
        createUserWithEmailAndPassword(auth, email, confirmPassword)
          .then(async (user) => {
            await setDoc(doc(db, `users/${user.user.uid}`), {
              name: name,
              lastName: lastName,
              email: email,
              caregiver:false,
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(error.message);
          });
      }
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.inputContainer}>
        <Text style={styles.title}>Bienvenido a SeniorCare</Text>
        <View style={{height:50}}></View>
          <Input
            placeholder="Nombre"
            style={styles.input}
            inputContainerStyle={{
              borderBottomColor: "#5CC5BA",
              borderBottomWidth: 2,
            }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
            <Input
            placeholder="Apellido"
            style={styles.input}
            inputContainerStyle={{
              borderBottomColor: "#5CC5BA",
              borderBottomWidth: 2,
            }}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Input
            placeholder="Email"
            style={styles.input}
            inputContainerStyle={{
              borderBottomColor: "#5CC5BA",
              borderBottomWidth: 2,
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Contraseña"
            style={styles.input}
            inputContainerStyle={{
              borderBottomColor: "#5CC5BA",
              borderBottomWidth: 2,
            }}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            placeholder="Confirmar Contraseña"
            style={styles.input}
            inputContainerStyle={{
              borderBottomColor: "#5CC5BA",
              borderBottomWidth: 2,
            }}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "grey", fontSize: 15 }}>¿Es Cuidador?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#5CC5BA" }}
              thumbColor={cuidador ? "#B8E2DD" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={cuidador}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Button
            containerStyle={styles.button}
            titleStyle={{ lineHeight: 30, fontSize: 18 }}
            color="#5CC5BA"
            title="Registrarse"
            onPress={signUp}
          />
          <Text>¿Ya tiene cuenta?</Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{ color: "#5CC5BA" }}
          >
            Ingrese aquí{" "}
          </Text>
        </View>
  
      
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "#5CC5BA",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 250,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EFF3F2",
  },
  input: {
    textAlign: "center",
  },
});
