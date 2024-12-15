import { ThemeContext } from '../../providers/ThemeProviders'
import './ChangeTheme.css'
import React, { useContext, useEffect } from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import LightModeIcon from '@mui/icons-material/LightMode'

const ChangeTheme = () => {
  const { light, setLight } = useContext(ThemeContext)
  useEffect(() => {
    localStorage.setItem('light', light)
  }, [light])

  return (
    <>
      {light ? (
        <LightModeIcon
          style={{
            fontSize: '40px',
            paddingLeft: '0.5rem',
            color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
          }}
          onClick={() => setLight(!light)}
        />
      ) : (
        <ModeNightIcon
          style={{
            fontSize: '30px',
            color: `var(--ihc-${light ? 'light' : 'dark'}-mode-text)`
          }}
          onClick={() => setLight(!light)}
        />
      )}
    </>
  )
}

export default ChangeTheme
