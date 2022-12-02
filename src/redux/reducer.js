import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "profile",
  initialState: {
    data: [
      {
        image:
          "https://c1.wallpaperflare.com/preview/90/647/634/stunt-bike-action-extreme.jpg",
        title: "Day 1 of BMX",
        time: "5:12",
      },
      {
        image:
          "https://c1.wallpaperflare.com/preview/539/737/158/bicycle-bmx-sports-spectacular.jpg",
        title: "Day 2 of BMX",
        time: "5:12",
      },
      {
        image:
          "https://cdn.wallpapersafari.com/41/20/Ba4yL5.jpg",
        title: "Day 3 of BMX",
        time: "5:12",
      }
    ],
  },
  //   reducers: {
  //     increment: (state) => {
  //       // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //       // doesn't actually mutate the state because it uses the Immer library,
  //       // which detects changes to a "draft state" and produces a brand new
  //       // immutable state based off those changes
  //       state.value += 1
  //     },
  //     decrement: (state) => {
  //       state.value -= 1
  //     },
  //     incrementByAmount: (state, action) => {
  //       state.value += action.payload
  //     },
  //   },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
