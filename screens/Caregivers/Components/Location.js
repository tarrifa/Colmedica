import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "./Map";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialIcons";

const Location = ({ navigation }) => {
  return (
    <View>
      <View style={{ height: 67 }}></View>
      <View style={styles.button}>
      <Button
        icon={
          <Icon name="home" size={20} color="white" />}
          buttonStyle={{
            height: 40,
            width: 40,
            borderRadius: 50,
            backgroundColor: "#5CC5BA",
            marginRight: 40,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("Demographics")}
          />
          </View>
      <Text style={styles.title}>
        Última conexión {"\n"}
        {new Date().toLocaleString()}
      </Text>
      <Text style={styles.title}>Ubicando a: User</Text>
      <View style={styles.map}>
        <Map />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  map: {
    zIndex: 0,
    position: "absolute",
  },
  title: {
    zIndex: 1,
    marginLeft: 30,
    fontSize: 25,
    fontWeight: "bold",
    color: "#5CC5BA",
  },
  button:{
    zIndex:2,
    marginLeft:"auto",
  }
});
