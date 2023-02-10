import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { Input, Button, Text } from "@rneui/themed";
import { Dropdown } from 'react-native-element-dropdown';
import { Icon, ListItem, Switch } from "@rneui/base";
import { StatusBar } from "expo-status-bar";

import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const Demographics = ({ navigation }) => {
  const [numDoc, setNumDoc] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cuidador, setCuidador] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Cuentanos más de tí</Text>
        <View style={{ height: 50 }}></View>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#5CC5BA", color:"#5CC5BA" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Tipo de Documento' : '...'}
          searchPlaceholder="Opciones..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? "#5CC5BA" : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        <Input
          placeholder="Número de Documento"
          style={styles.input}
          inputContainerStyle={{
            borderBottomColor: "#5CC5BA",
            borderBottomWidth: 2,
          }}
          value={numDoc}
          onChangeText={(text) => setNumDoc(text)}
        />
        <Input
          placeholder="Celular"
          style={styles.input}
          inputContainerStyle={{
            borderBottomColor: "#5CC5BA",
            borderBottomWidth: 2,
          }}
          value={cellphone}
          onChangeText={(text) => setCellphone(text)}
        />
        <Input
          placeholder="Teléfono"
          style={styles.input}
          inputContainerStyle={{
            borderBottomColor: "#5CC5BA",
            borderBottomWidth: 2,
          }}
          value={phone}
          onChangeText={(text) => setPhone(text)}
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
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          containerStyle={styles.button}
          titleStyle={{ lineHeight: 30, fontSize: 18 }}
          color="#5CC5BA"
          title="Registrarse"
          onPress={{}}
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

export default Demographics;

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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
