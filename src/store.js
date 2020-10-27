import { configureStore, createSlice } from '@reduxjs/toolkit';

/* const reducer = createReducer([], {
  // push, slice와 같은 새로운 return을 안하고 mutate하는 함수들은 return을 포함하지 않음
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // filter, concat과 같은 새로운 return을 하는 함수들은 return을 포함
  [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload),
}); */

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
