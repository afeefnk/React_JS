import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'Light'

}
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme:(state) => {
            state.theme = state.theme === 'Light' ? 'Dark' : 'Light';
        }
    }
})

export default themeSlice.reducer
export const {toggleTheme} = themeSlice.actions