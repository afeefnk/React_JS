import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../Counter/Counter Slice/CounterSlice";

// import { counter } from "@fortawesome/fontawesome-svg-core";

const store=configureStore({
reducer:{
    counter:CounterSlice
}
})

export default store