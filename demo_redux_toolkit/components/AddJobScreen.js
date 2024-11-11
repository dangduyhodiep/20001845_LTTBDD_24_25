import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux_toolkit/counterSlice';

const AddJobScreen = ({ navigation }) => {
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
        <View style={styles.profileSection}>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
        <AntDesign name="user" size={40} color="purple" />
      </View>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={job}
        onChangeText={setJob}
      />
      <TouchableOpacity 
        style={styles.finishButton} 
        onPress={() => {
          dispatch(addTask(job));
          navigation.goBack();
        }}
      >
        <Text style={styles.finishButtonText}>FINISH ➔</Text>
      </TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.decorativeImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default AddJobScreen;
