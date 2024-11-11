import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: (state.tasks.length + 1).toString(), title: action.payload };
      state.tasks.push(newTask);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, setTasks } = counterSlice.actions;
export default counterSlice.reducer;
