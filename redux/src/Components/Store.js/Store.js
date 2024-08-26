import { configureStore } from "@reduxjs/toolkit";

// import CounterSlice from "../Counter/Counter Slice/CounterSlice";


import ThemeSlice from "../Theme Switcher/Theme Slice/ThemeSlice";

// import { counter } from "@fortawesome/fontawesome-svg-core";



// Counter-----------------------------

// const store=configureStore({
// reducer:{
//     counter:CounterSlice
// }
// })




// Theme Switcher--------------------------------

const store=configureStore({
    reducer:{
        theme: ThemeSlice
    }
})

export default store