import React, { useContext } from 'react'
import { ThemeContext } from './MainContext'

const Layout = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', textAlign: 'center'}}>
        <h2>Layout</h2>
        <button onClick={toggleTheme}>Click</button>
    </div>
  )
}

export default Layout
