import {
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
  Linking,
} from "react-native";
import React from "react";
import { Button, Card } from "@rneui/base";
import { collection, query, where, doc, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = 550;


const getPatients = async() => {
  const docRef = collection(db, "patients");
  const docQuery = query(docRef, where("caregiver", "==", auth.currentUser.uid ));
  
  const querySnapshot = await getDocs(docQuery);
  
};


const data = [
  {
    key: 1,
    image: require("../../assets/images/viejita2.jpeg"),
    title: "Mariela Garavito",
    age:73,
    phone: 3123945094,
    emergency: 3164734659,
  },
  {
    key: 2,
    image: require("../../assets/images/foto.png"),
    title: "Card 2",
    age:74,
    phone: 3123945095,
    emergency: 3164734658,
  },
  {
    key: 3,
    image: require("../../assets/images/foto.png"),
    title: "Card 3",
    age:75,
    phone: 3123945096,
    emergency: 3164734657,
  },
];

const Patients = ({navigation}) => {
  return (
    <SafeAreaView style={{ flexGrow: 1, justifyContent: "center", backgroundColor:"#EBEFEF", }}>
      <Text style={{marginTop: 40, fontSize:35, fontWeight:"bold", marginLeft:40 }}>Pacientes</Text>
      <Text style={{fontSize:30, marginLeft:40, color:"grey" }}>Asignados</Text>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        bounces={false}
        style={{
          marginTop: 30,
          paddingHorizontal: 0,
        }}
        contentContainerStyle={{ justifyContent: "center" }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={12}
      >
        {data.map((item, idx) => {
          return (
            <View key={item.key}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_HEIGHT,
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={item.image}
                style={styles.image}
                imageStyle={{ borderRadius: 20 }}
              />
              <Card
                containerStyle={{
                  marginTop: -80,
                  width: 300,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
                style={styles.card}
              >
                <Text style={{ fontSize:20,}}>{item.title}</Text>
                <Text style={{ fontSize:15, marginBottom:20, color:"grey"}}>{item.title}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                  <View style={{alignItems:"center"}}>
                    <Text style={{marginBottom:10, color:"#5CC5BA",fontWeight:"bold"}}>Edad</Text>
                    <Text>{item.age}</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{marginBottom:10, color:"#5CC5BA",fontWeight:"bold"}}>Celular</Text>
                    <Text onPress={()=>{Linking.openURL(`tel:${item.phone}`);}}>{item.phone}</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{marginBottom:10, color:"#5CC5BA", fontWeight:"bold"}}>Emergencia</Text>
                    <Text onPress={()=>{Linking.openURL(`tel:${item.emergency}`);}}>{item.emergency}</Text>
                  </View>
                </View>
                <Button
                  containerStyle={styles.button}
                  titleStyle={{ lineHeight: 30, fontSize: 18 }}
                  color="#5CC5BA"
                  title="Mirar Paciente"
                  onPress={() =>navigation.navigate('Navbar')}
                />
              </Card>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Patients;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: 300,
   
  },
  button: {
    width: 250,
    borderRadius: 20,
    marginTop: 40,
    marginBottom: 10,
  },
  card: {
    marginTop: -200,
  },
});

