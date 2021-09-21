import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
export default () => (
  <ThemeToggler>
    {({ toggleTheme, theme }) => (
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

