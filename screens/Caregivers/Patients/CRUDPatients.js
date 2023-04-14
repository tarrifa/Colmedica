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
import { Input } from "@rneui/themed";
  

  const CRUDPatients = ({navigation}) => {
    return (
        <>
        <>
        <Text>Asignar Paciente</Text>
        <Input placeholder="Ingrese ID Paciente"/>
        <Button/>
        </>
        <>
        <Text>Eliminar Paciente</Text>
        <Input placeholder="Ingrese ID Paciente"/>
        <Button/>
        </>
        </>
        
    )
  };
  
  export default CRUDPatients;
  
  const styles = StyleSheet.create({
   
  });
  
  