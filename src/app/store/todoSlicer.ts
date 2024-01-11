import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// models
import toDo from "../models/todo";

interface MainState {
  todos: toDo[],
  loading: Boolean,
}

const initialState: MainState = {
  todos: [],
  loading: false,
};

export const fetchTodos = createAsyncThunk('fetch/todos', async () => {
  return [];
});

export const addTodo = createAsyncThunk('add/todo', async (todo: toDo) => {
  return todo;
});

export const updateTodo = createAsyncThunk('update/todo', async (todo: toDo) => {
  return todo;
});

export const removeTodo = createAsyncThunk('remove/todo', async (todo: toDo) => {
  return todo;
});


const todoSlicer = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const updatedTodo = state.todos.find((el) => el.id === action.payload.id)

      if (updatedTodo) {
        updatedTodo.checked = action.payload.checked;
        updatedTodo.name = action.payload.name;
        updatedTodo.description = action.payload.description;
        updatedTodo.date = new Date();
      }

      state.loading = false;
    });
    builder.addCase(removeTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      const newTodos = state.todos.filter((el) => el.id !== action.payload.id);
      state.todos = newTodos;
      state.loading = false;
    });
  },
})

export default todoSlicer.reducer;
