import React from 'react'
import './themeswitcher.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './Theme Slice/ThemeSlice'

const ThemeSwitcher = () => {
    const {theme} = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    const styles = {
        backgroundColor: theme === 'Light' ? 'White' : 'black',
        color: theme === 'Light' ? '#000' : '#fff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <h2>Theme: {theme}</h2>   
      <button onClick={() => {dispatch(toggleTheme())}}>Change Theme</button>
    </div>
  )
}

export default ThemeSwitcher
