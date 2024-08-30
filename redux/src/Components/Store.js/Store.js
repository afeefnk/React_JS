

// import CounterSlice from "../Counter/Counter Slice/CounterSlice";
// import { counter } from "@fortawesome/fontawesome-svg-core";



// import { configureStore } from "@reduxjs/toolkit";
// import usersSlice from '../Add User/usersSlice'


// import ThemeSlice from "../Theme Switcher/Theme Slice/ThemeSlice";


// import FormSlice from "../Form/Form Slice/FormSlice";


// import { configureStore } from "@reduxjs/toolkit";
// import UserSlice from "../CRUD/UserSlice";


import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../CRUD Task/UserSlice";





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




// Add User------------------------------------------

// const store = configureStore({
//   reducer: {
//     users: usersSlice,
//   }
// })
// export default store



// CRUD------------------------------------------
//  const store =  configureStore({
//   reducer: {
//     users: UserSlice,
//   }
//  })
//  export default store 



//  CRUD App by own task----------------------------------

const store = configureStore({
  reducer: {
    users: UserSlice
  }
})
export default store