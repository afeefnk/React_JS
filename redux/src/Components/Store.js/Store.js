import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "../Add User Task/usersSlice";

// import CounterSlice from "../Counter/Counter Slice/CounterSlice";

// import ThemeSlice from "../Theme Switcher/Theme Slice/ThemeSlice";

// import FormSlice from "../Form/Form Slice/FormSlice";

// import { counter } from "@fortawesome/fontawesome-svg-core";



// Counter-----------------------------

// const store=configureStore({
// reducer:{
//     counter:CounterSlice
// }
// })




// Theme Switcher--------------------------------

// const store=configureStore({
//     reducer:{
//         theme: ThemeSlice
//     }
// })



// Form--------------------------------------------

// const store=configureStore({
//     reducer:{
//         form:FormSlice
//     }
// })


export const store = configureStore({
    reducer: {
        users: useReducer,
      },
})

export default store