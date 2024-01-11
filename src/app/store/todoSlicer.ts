import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// models
import toDo from "../models/todo";

interface MainState {
  todos: toDo[],
  loading: Boolean,
  edit: {
    curr: toDo,
    editMode: Boolean,
  }
}

interface updatedTodo {
  name: String,
  description: String,
}

const initialState: MainState = {
  todos: [],
  loading: false,
  edit: {
    curr: {
      id: '',
      checked: false,
      name: '',
      description: '',
    },
    editMode: false,
  }
};

export const fetchTodos = createAsyncThunk('fetch/todos', async () => {
  return [];
});

export const addTodo = createAsyncThunk('add/todo', async (todo: toDo) => {
  return todo;
});

export const updateTodo = createAsyncThunk('update/todo', async (todo: updatedTodo) => {
  return todo;
});

export const removeTodo = createAsyncThunk('remove/todo', async (id: string) => {
  return id;
});

export const checkedTodo = createAsyncThunk('checked/todo', async (todo: toDo) => {
  return todo;
});

const todoSlicer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    editModeOn(state, action: PayloadAction<toDo>) {
      state.edit.editMode = true;
      state.edit.curr = action.payload;
      console.log(action.payload)
    },
    clearEdit(state) {
      state.edit.editMode = false;
      state.edit.curr = {
        id: '',
        checked: false,
        name: '',
        description: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
    builder.addCase(addTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      const newTodo = action.payload;
      newTodo.date = new Date().toISOString();
      state.todos = [...state.todos, newTodo];
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const updatedTodo = state.todos.find((el) => el.id === state.edit.curr.id)

      if (updatedTodo) {
        updatedTodo.name = action.payload.name;
        updatedTodo.description = action.payload.description;
        updatedTodo.date = new Date().toISOString();
      }

      state.edit.editMode = false;
      state.edit.curr = {
        id: '',
        checked: false,
        name: '',
        description: '',
      };
      state.loading = false;
    });
    builder.addCase(removeTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      const newTodos = state.todos.filter((el) => el.id !== action.payload);
      state.todos = [...newTodos];
      state.loading = false;
    });
    builder.addCase(checkedTodo.fulfilled, (state, action) =>
    {
      const updatedTodo = state.todos.find((el) => el.id === state.edit.curr.id)
      if (updatedTodo) updatedTodo.checked = action.payload.checked;
    });
  },
})

export const selectTodos = (state: MainState) => state.todos;
export const selectLoading = (state: MainState) => state.loading;
export const selectEditMode = (state: MainState) => state.edit.editMode;
export const selectCurrEdit = (state: MainState) => state.edit.curr;

export const { editModeOn, clearEdit } = todoSlicer.actions;

export default todoSlicer.reducer;
