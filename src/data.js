/* ----- data ------ */

import { compass, pencil, tree, users } from 'react-icons-kit/icomoon/';
import { linkedin, code, documentInverted, mail } from "react-icons-kit/entypo/";

const toolkitPath = "./assets/toolkit_icons/";


export default {
  approachContent: {
    image: require("./assets/approach/Approach_Diagram.svg"),
    subHeader: "User-centered",
    header: "Approach",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    display: [
      {
        name: "Product Discovery",
        icon: compass,
      },
      {
        name: "UX Design",
        icon: pencil,
      },
      {
        name: "Front-end Development",
        icon: tree,
      },
      {
        name: "Usability Testing",
        icon: users,
      }
    ]
  },
  toolkitContent: {
    image: '',
    subHeader: "Front-end",
    header: "Toolkit",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    display: [
      {
        name: "React",
        icon: require(`${toolkitPath}React.svg`),
        link: 'https://reactjs.org/'
      },
      {
        name: "Redux",
        icon: require(`${toolkitPath}Redux.svg`),
        link: 'https://redux.js.org/'
      },
      {
        name: "ES6",
        icon: require(`${toolkitPath}ES6.svg`),
        link: 'http://es6-features.org/'
      },
      {
        name: "HTML5",
        icon: require(`${toolkitPath}HTML5.svg`),
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      },
      {
        name: "CSS3",
        icon: require(`${toolkitPath}CSS3.svg`),
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      },
      {
        name: "UI Libraries",
        icon: require(`${toolkitPath}Bootstrap.svg`),
        link: 'https://getbootstrap.com/'
      },
      {
        name: "Firebase",
        icon: require(`${toolkitPath}Firebase.svg`),
        link: 'https://firebase.google.com/'
      },
      {
        name: "GitHub",
        icon: require(`${toolkitPath}GitHub.svg`),
        link: 'https://github.com/'
      },
      {
        name: "Trello",
        icon: require(`${toolkitPath}Trello.svg`),
        link: 'https://trello.com/home'
      },
      {
        name: "Photoshop",
        icon: require(`${toolkitPath}Photoshop.svg`),
        link: 'https://www.adobe.com/products/photoshop.html'
      },
      {
        name: "Visual Code Studio",
        icon: require(`${toolkitPath}Visual_Code_Studio.svg`),
        link: 'https://code.visualstudio.com/'
      },
      {
        name: "Paper Prototyping",
        icon: require(`${toolkitPath}Pen_And_Paper.svg`),
        link: 'https://uxplanet.org/the-art-of-ux-sketching-and-paper-prototyping-5dae5a1efc7d'
      },
    ]
  },
  portfolioContent: {
    subHeader: "Product",
    header: "Portfolio",
    paragraph:
      "Coming Soon.",
    display: [
      {
        name: "melcarned",
      },
      {
        name: "Cardinali",
      },
      {
        name: "Soon",
      }
    ]
  },
  contactContent: {

  },
contact: {
  info: {
    header: "Located in the East Village, NYC",
    email: "melcarned@gmail.com",
    subtitle: "- Let's work together -"
  },
  icons: [
    {
      icon: linkedin,
      target: "LinkedIn",
      link: "https://www.linkedin.com/in/melcarned/"
    },
    {
      icon: documentInverted,
      target: "Resume",
      link: require("./assets/resume/Damiano_Melcarne_Resume.pdf")
    },
    {
      icon: code,
      target: "Source",
      link: "https://github.com/melcarned/melcarned"
    },
    {
      icon: mail,
      target: "Email",
      link: "mailto:melcarned@gmail.com"
    }
  ],
},
  footer: {
    copyright: "melcarned.com"
  }
};


