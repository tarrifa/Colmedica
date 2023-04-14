import { Button, Icon } from '@rneui/base';
import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Agenda } from 'react-native-calendars';

const pill = {key: 'pill', color: 'red', selectedDotColor: '#5CC5BA'};
const appointment = {key: 'appointment', color: 'blue', selectedDotColor: 'blue'};
const therapy = {key: 'therapy', color: 'green'};

const Schedule = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log(name);
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
  
    <Agenda
      items={{
        '2023-04-21': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-04-20': [{name: 'Cia otorrino'}],
        '2023-04-23': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-04-24': [{name: 'Cia otorrino'}],
        '2023-04-25': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-04-26': [{name: 'Cia otorrino'}],
        '2023-04-27': [{name: 'Pastilla Tiroides'}, {name: 'Cita 1 pm cardiologia'}, {name: 'Pastilla 7pm'}],
        '2023-04-28': [{name: 'Cia otorrino'}]
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
        return <View><Text>No hay evento para este día</Text></View>;
      }}
      renderEmptyData={() => {
        return <View><Text style={{textAlign: 'center', fontSize:32, marginTop:16, alignItems:'center', justifyContent:'center', marginTop:'50%'}}>No hay eventos{'\n'} para este día</Text></View>;
      }}
      />
      
       <View style={styles.button}>
      <Button
        icon={
          <Icon name="add" size={20} color="white" />}
          buttonStyle={{
            height: 40,
            width: 40,
            borderRadius: 50,
            backgroundColor: "#5CC5BA",
            marginRight: 40,
            marginTop: 5,
            
          }}
          onPress={() => setModalVisible(true)}
          />
          </View>
          <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  </SafeAreaView>
  );

}

export default Schedule

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  },
  button:{
    marginLeft:"auto",
    marginBottom:8
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});