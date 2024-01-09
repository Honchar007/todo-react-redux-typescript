import { createSlice } from "@reduxjs/toolkit";

// models
import toDo from "../models/todo";

const initialState: toDo[] = [];

const todoSlicer = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {},
})

export default todoSlicer.reducer;
