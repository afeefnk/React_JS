import { createSlice } from "@reduxjs/toolkit";
import userList from "./Data";


const UserSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const user = state.find(user => user.id == id)
            if(user) {
                return state.filter(us => us.id !== id)
            }
        }
    }
})

export default UserSlice.reducer
export const {addUser, deleteUser} = UserSlice.actions;
