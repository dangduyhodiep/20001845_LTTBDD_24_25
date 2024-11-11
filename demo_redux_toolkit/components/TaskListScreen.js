import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

const TaskListScreen = ({ navigation, tasks }) => {
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
      <TextInput style={styles.searchInput} placeholder="Search" />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Feather name="check-square" size={24} color="green" />
            <Text style={styles.taskText}>{item.title}</Text>
            <Feather name="edit" size={24} color="red" />
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddJob')}>
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default TaskListScreen;
