import { Button, StyleSheet, Text, View } from 'react-native'
import * as React from "react";
import { LinearProgress } from "@rneui/base";

const Resultados = ({navigation}) => {
  return (
    <View>
      <Text>Veracidad de respuesta para cada pregunta</Text>

      <Text>Pregunta 1</Text>

      <LinearProgress
      value={0.22}
      variant="determinate"
      style={{ width: "90%", height:"10%" }}
      color="green"
    />

      <Text>Pregunta 2</Text>


    <LinearProgress
      value={0.93}
      variant="determinate"
      style={{ width: "90%", height: "50%" }}
      color="green"
    />
 <Button
        raised
        color="#135B5C"
        containerStyle={styles.button}
        title="No"
        onPress={() =>navigation.navigate('Home')}
      />
    </View>
  )
}

export default Resultados

const styles = StyleSheet.create({})