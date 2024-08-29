import {createSlice} from '@reduxjs/toolkit'
import userList from './Data'


const userSlice = createSlice({
    name: 'users',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            const user = state.find(user => user.id == id);
            if (user) {
                user.name = name;
                user.email = email;
            }
        },
        deleteUser: (state, action) => {
           const {id} = action.payload;
           const us = state.find(user => user.id == id);
           if(us){
            return state.filter(u=> u.id !== id);
           }
      
        },
    },
});

export default userSlice.reducer;
export const { addUser, editUser, deleteUser } = userSlice.actions;
