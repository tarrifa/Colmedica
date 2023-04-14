import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Agenda } from 'react-native-calendars';

const pill = {key: 'pill', color: 'red', selectedDotColor: '#5CC5BA'};
const appointment = {key: 'appointment', color: 'blue', selectedDotColor: 'blue'};
const therapy = {key: 'therapy', color: 'green'};

const Schedule = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={{height:15}}></View>
    <Agenda
      items={{
        '2023-01-21': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-01-20': [{name: 'Cia otorrino'}],
        '2023-01-23': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-01-24': [{name: 'Cia otorrino'}],
        '2023-01-25': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-01-26': [{name: 'Cia otorrino'}],
        '2023-01-27': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-01-28': [{name: 'Cia otorrino'}]
      }}
      theme={{
        agendaDayTextColor: '#5CC5BA',
        agendaDayNumColor: '#5CC5BA',
        agendaTodayColor: '#5CC5BA',
        agendaKnobColor: '#5CC5BA',
        dotColor:'#5CC5BA',
        todayDotColor:'#5CC5BA',
        indicatorColor:'#5CC5BA',
        monthTextColor:'#5CC5BA',
        selectedDayBackgroundColor:'#5CC5BA',
        
      }}
      style={{height:1000}}
      renderItem={(item, isFirst) => (
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      renderEmptyDate={() => {
        return <View><Text>Ingrese eventos</Text></View>;
      }}
      renderEmptyData={() => {
        return <View><Text>Ingrese eventos</Text></View>;
      }}
      />
  </SafeAreaView>
  );

}

export default Schedule

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});