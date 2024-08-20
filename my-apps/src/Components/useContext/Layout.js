import React, { useContext } from 'react'
import { ThemeContext } from './MainContext'

const Layout = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor:theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', textAlign: 'center'}}>
        <h2>Layout</h2>
        <button onClick={toggleTheme} style={{
                    padding: '10px 20px',
                    backgroundColor: theme === 'light' ? '#333' : '#fff',
                    color: theme === 'light' ? '#fff' : '#333',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '20px',
                    fontSize: '16px',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    marginBottom: '10px'
                }}>Change Theme</button>
    </div>
  )
}

export default Layout
