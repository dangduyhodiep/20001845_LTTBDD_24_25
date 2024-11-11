// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux_toolkit/counterSlice'; // Ensure correct path
import HomeScreen from './components/HomeScreen'; // Ensure correct paths
import TaskListScreen from './components/TaskListScreen';
import AddJobScreen from './components/AddJobScreen';

const Stack = createStackNavigator();

const App = () => {
  const tasks = useSelector((state) => state.counter.tasks);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TaskList">
          {(props) => <TaskListScreen {...props} tasks={tasks} />}
        </Stack.Screen>
        <Stack.Screen name="AddJob">
          {(props) => <AddJobScreen {...props} addTask={(job) => dispatch(addTask(job))} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
