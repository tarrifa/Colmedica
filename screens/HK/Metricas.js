import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button } from "@rneui/base";
import { width } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const cards = [
  {
    id: 1,
    title: "Pasos",
    icon: "directions-walk",
    description: "1111",
  },
  {
    id: 2,
    title: "Calorias",
    icon: "local-fire-department",
    description: "1111",
  },
  {
    id: 1,
    title: "Pulso",
    icon: "favorite",
    description: "96",
  },
  {
    id: 2,
    title: "Sueño",
    icon: "nights-stay",
    description: "8 horas",
  },
];

const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const Metricas = ({ navigation }) => {
  const [loggedIn, setLogin] = useState(true);



  const onSignOut = () => {
    signOut(auth)
      .then(() =>{
        navigation.navigate("Login")
      }
      )
      .catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View style={{flexDirection:"row",marginTop: 40, justifyContent:"space-between"}}>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          marginLeft: 40,
        }}
        >
        Métricas
      </Text>

<Button
icon={
  <Icon
  name="home"
  size={20}
  color="white"
  />}
  buttonStyle={{
    height:40,
    width:40,
    borderRadius:50,
    backgroundColor:"#5CC5BA",
    marginRight:40,
  marginTop:5}}
    onPress={onSignOut}
/>
  </View>
      <Text style={{ fontSize: 30, marginLeft: 40, color: "grey" }}>
        Del Paciente
      </Text>
      <View style={styles.container}>
        {cards.map((item, idx) => {
          return (
            <Button buttonStyle={styles.card} type="clear">
              <View style={{ alignItems: "center" }}>
                <Icon name={item.icon} size={60} color={"#5CC5BA"} />
              </View>
              <Text style={{ fontSize: 25, marginTop: 10 }}>{item.title}</Text>
              <Text style={{ fontSize: 20, color: "grey" }}>
                {item.description}
              </Text>
            </Button>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Metricas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    width: ITEM_WIDTH / 2 - 20,
    height: ITEM_WIDTH / 2 - 30,
    borderRadius: 20,
    backgroundColor: "#EBEFEF",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 10,
  },
});
