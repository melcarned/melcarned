import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import DigitalResume from './views/DigitalResume/DigitalResume'
import { makeStyles } from '@material-ui/styles'
import { Footer } from './views/DigitalResume/components'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#107896',
    },
  },
  typography: {
    fontSize: 16,
  },
})

const useStyles = makeStyles({
  root: {
    //  maxWidth: '792px',
    padding: 0,
    border: '8px solid rgba(0, 0, 0, 0.54);',
  },
})

function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <DigitalResume />
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default App
