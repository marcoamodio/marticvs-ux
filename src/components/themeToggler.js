import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import iconSun from "../images/svg/icon-sun.svg"
import iconMoon from "../images/svg/icon-moon.svg"

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label htmlFor="themeToggle">
        <input
          type="checkbox"
          id="themeToggle"
          className="theme-changer toggle-checkbox"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className='toggle-slot'>
          <div className='sun-icon-wrapper'>
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false">
              <img src={iconSun} alt="" />
            </div>
          </div>
          <div className='toggle-button'></div>
          <div className='moon-icon-wrapper'>
              <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false">
                <img src={iconMoon} alt="" />
              </div>
          </div>
      </div>
      </label>

    // <label>
    // <input className='toggle-checkbox' type='checkbox'></input>
    // <div className='toggle-slot'>
    //   <div className='sun-icon-wrapper'>
    //     <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
    //   </div>
    //   <div className='toggle-button'></div>
    //   <div className='moon-icon-wrapper'>
    //     <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
    //   </div>
    // </div>
    // </label>
    )}
  </ThemeToggler>
)