import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Feather } from '@expo/vector-icons';

// Create a Stack Navigator
const Stack = createStackNavigator();

// HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusBar} />
      <Image source={require('./assets/snack-icon.png')} style={styles.decorativeImage} />
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

// TaskListScreen component
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

// AddJobScreen component
const AddJobScreen = ({ navigation, addTask }) => {
  const [job, setJob] = useState('');

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
          addTask(job);
          navigation.goBack();
        }}
      >
        <Text style={styles.finishButtonText}>FINISH ➔</Text>
      </TouchableOpacity>
      <Image source={require('./assets/snack-icon.png')} style={styles.decorativeImage} />
    </SafeAreaView>
  );
};

// App component - combining navigation
const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'To check email' },
    { id: '2', title: 'UI task web page' },
    { id: '3', title: 'Learn JavaScript basics' },
    { id: '4', title: 'Learn HTML Advance' },
    { id: '5', title: 'Medical App UI' },
    { id: '6', title: 'Learn Java' },
  ]);

  const addTask = (job) => {
    const newTask = { id: (tasks.length + 1).toString(), title: job };
    setTasks([...tasks, newTask]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskList">
          {props => <TaskListScreen {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="AddJob">
          {props => <AddJobScreen {...props} addTask={addTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A020F0',
    marginVertical: 20,
  },
  inputContainer: {
    width: '80%',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    width: '90%',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: '90%',
  },
  taskText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00BFFF',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  finishButton: {
    backgroundColor: '#00BFFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    width: '80%',
  },
  finishButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  decorativeImage: {
    width: 180,
    height: 200,
    marginTop: 20,
  },
});

// Export the App component
export default App;
