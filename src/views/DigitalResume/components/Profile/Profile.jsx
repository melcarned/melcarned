import React from 'react'
import { Avatar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SaveAlt from '@material-ui/icons/SaveAlt'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: '0.5em',
  },
  button: {
    // width: '15em',
    margin: '1em auto',
  },
})

function Profile() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Avatar size="lg">MB</Avatar>
      <Typography gutterBottom align="center" variant="h4">
        Damiano Melcarne
      </Typography>
      <Typography color="secondary" align="center" variant="body1">
        Software Engineer
      </Typography>
      <Typography
        gutterBottom
        color="textSecondary"
        align="center"
        variant="subtitle1"
      >
        New York, NY
      </Typography>
      {/* <div className={classes.button}>
        <Button color="secondary">
          <Typography
            gutterBottom
            color="secondary"
            align="center"
            variant="subtitle1"
          >
            <b>
              <SaveAlt size="large" className={classes.leftIcon} />
              Download
            </b>
          </Typography>
        </Button>
      </div> */}
    </div>
  )
}

export default Profile

const PROFILE_DATA = {
  image: '',
  subHeader: 'Front-end',
  header: 'Toolkit',
  paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  display: [
    {
      name: 'React',
      // icon: require(`${toolkitPath}React.svg`),
      link: 'https://reactjs.org/',
    },
    {
      name: 'Redux',
      // icon: require(`${toolkitPath}Redux.svg`),
      link: 'https://redux.js.org/',
    },
    {
      name: 'ES6',
      // icon: require(`${toolkitPath}ES6.svg`),
      link: 'http://es6-features.org/',
    },
    {
      name: 'HTML5',
      //  icon: require(`${toolkitPath}HTML5.svg`),
      link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    },
    {
      name: 'CSS3',
      //     icon: require(`${toolkitPath}CSS3.svg`),
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
    },
    {
      name: 'UI Libraries',
      //    icon: require(`${toolkitPath}Bootstrap.svg`),
      link: 'https://getbootstrap.com/',
    },
    {
      name: 'Firebase',
      //    icon: require(`${toolkitPath}Firebase.svg`),
      link: 'https://firebase.google.com/',
    },
    {
      name: 'GitHub',
      //    icon: require(`${toolkitPath}GitHub.svg`),
      link: 'https://github.com/',
    },
    {
      name: 'Trello',
      //    icon: require(`${toolkitPath}Trello.svg`),
      link: 'https://trello.com/home',
    },
    {
      name: 'Photoshop',
      //     icon: require(`${toolkitPath}Photoshop.svg`),
      link: 'https://www.adobe.com/products/photoshop.html',
    },
    {
      name: 'Visual Code Studio',
      //     icon: require(`${toolkitPath}Visual_Code_Studio.svg`),
      link: 'https://code.visualstudio.com/',
    },
    {
      name: 'Paper Prototyping',
      //      icon: require(`${toolkitPath}Pen_And_Paper.svg`),
      link:
        'https://uxplanet.org/the-art-of-ux-sketching-and-paper-prototyping-5dae5a1efc7d',
    },
  ],
}
