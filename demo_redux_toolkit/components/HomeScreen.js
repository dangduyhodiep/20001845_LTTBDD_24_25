import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar} />
      <Image source={require('../assets/snack-icon.png')} style={styles.decorativeImage} />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="GET STARTED" onPress={() => navigation.navigate('TaskList')} color="#00BFFF" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default HomeScreen;
