import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla (older) redux - DO NOT MUTATE STATE and returning was mandatory
      //   const newState = { ...state };
      //   newState.items.push(action.payload);
      //   return newState;

      //Redux Toolkit - We have to mutate the state. But behind the scenes, Redux will make it immutable for us. This is done using library called Immer, which will take the current state and the mutated state and finds the difference between the two, so that Redux can use that and create a new object from it and return it by making it immutable behind the scenes for us.
      //Mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;

      //To see the current state use 'current(state)', which (current) comes from @reduxjs/toolkit. You can't directly do console.log(state); because redux hides the state behind a proxy
      console.log(current(state));

      //This dosen't work, because IMMER works in a certain way. This is just changing the reference of the state and not changing the current state, so IMMER won't be able to find the differece as there is no state change and Redux won't be able to get that change. In deeper sense, state will become a local variable with lets say ["pizza"] coming from Redux. Now if we assign it to {} the we are not actually changing the ["pizza"] array but changing the reference of the local variable to {}. So technically there is no change in the state and Immer will understand that nothing changed
      //state={items: ["Saketh"]}
      //state={}

      //You can also do this. Redux Toolkit says, either Mutate the existing state or return a new state
      //return {items: []};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
