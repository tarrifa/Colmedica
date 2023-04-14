import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Button } from "@rneui/themed";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Image } from "@rneui/themed";
import { collection, doc, getDoc, query, where } from "firebase/firestore";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);

  const logoSC = require("../../assets/images/logoSC.png");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logoSC} style={{ width: 50, height: 50, marginTop: 20 }} />
      <Text style={styles.title}> Senior{"\n"}Care</Text>
      <View style={{ height: 150 }}></View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          inputContainerStyle={{
            borderBottomColor: "#5CC5BA",
            borderBottomWidth: 2,
          }}
        />
        <Input
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          inputContainerStyle={{
            borderBottomColor: "#5CC5BA",
            borderBottomWidth: 2,
          }}
        />
        {/* <Text onPress={()=>navigation.navigate("SignUp")}>¿Has olvidado tu contraseña?</Text> */}
      </View>
      <Button
        containerStyle={styles.button}
        titleStyle={{ lineHeight: 30, fontSize: 18 }}
        color="#5CC5BA"
        title="Ingresar"
        onPress={signIn}
      />
      <Text>¿No tiene cuenta?</Text>
      <Text
        onPress={() => navigation.navigate("SignUp")}
        style={{ color: "#5CC5BA" }}
      >
        Regístrate aquí{" "}
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    backgroundColor: "#EFF3F2",
  },
  input: {
    textAlign: "center",
  },
});
