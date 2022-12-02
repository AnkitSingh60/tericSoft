import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "profile",
  initialState: {
    data: [
      {
        id:1,
        image:
          "https://c1.wallpaperflare.com/preview/90/647/634/stunt-bike-action-extreme.jpg",
        title: "Day 1 of BMX",
        time: "5:12",
      },
      {
        id:2,
        image:
          "https://c1.wallpaperflare.com/preview/539/737/158/bicycle-bmx-sports-spectacular.jpg",
        title: "Day 2 of BMX",
        time: "5:12",
      },
      {
        id:3,
        image:
          "https://cdn.wallpapersafari.com/41/20/Ba4yL5.jpg",
        title: "Day 3 of BMX",
        time: "5:12",
      }
    ],
  }
});

export default counterSlice.reducer;
