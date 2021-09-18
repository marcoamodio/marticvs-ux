import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import iconSun from "../images/svg/icon-sun.svg"
import iconMoon from "../images/svg/icon-moon.svg"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div>
        <input 
          type="checkbox"
          id="themeToggle"
          className="theme-changer toggle-checkbox ms-auto"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />
        <label htmlFor="themeToggle"></label>
      </div>
    )}
  </ThemeToggler>
)