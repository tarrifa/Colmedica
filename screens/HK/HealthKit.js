import { StyleSheet, Text, View } from "react-native";
import React from "react";


const HealthKit = ({navigation}) => {
  return (
    <View>
    <View style={{height:100}}></View>
      <Text style={styles.title}></Text>
      <Text>HealthKit</Text>
    
    </View>
  );
};

export default HealthKit;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex:1,
        flexWrap:"wrap",
        justifyContent:"center",
    
  },
  title:{
    
  }
  
});
