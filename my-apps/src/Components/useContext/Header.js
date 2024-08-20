import React, { useContext } from 'react'
import { ThemeContext } from './MainContext'

const Header = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', textAlign: 'center'}}>
      <h1>Header Component</h1>
    </div>
  )
}

export default Header
