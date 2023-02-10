import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = ({navigation}) => {
  return (
    <View>
      <Text>Pregunta 1</Text>
      <Text>¿Usted ha robado dinero de la caja registradora?</Text>

      <Button
        raised
        color="#135B5C"
        containerStyle={styles.button}
        title="Si"
        onPress={() =>navigation.navigate('Resultados')}
      />
      <Button
        raised
        color="#135B5C"
        containerStyle={styles.button}
        title="No"
        onPress={() =>navigation.navigate('Resultados')}
      />
     
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})