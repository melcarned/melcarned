/* ----- data ------ */

import { compass, pencil, tree, users } from 'react-icons-kit/icomoon/';
import { linkedin, code, documentInverted, mail } from "react-icons-kit/entypo/";

const toolkitPath = "./assets/toolkit_icons/";

export default {
  approachContent: {
    image: require("./assets/flowchart_diagram.svg"),
    subHeader: "User-centered",
    header: "APPROACH",
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
    image: require("./assets/component_diagram.svg"),
    subHeader: "Front-end",
    header: "TOOLKIT",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    display: [
      {
        name: "React",
        icon: require(`${toolkitPath}React.png`),
      },
      {
        name: "Redux",
        icon: require(`${toolkitPath}Redux.png`),
      },
      {
        name: "ES6",
        icon: require(`${toolkitPath}ES6.svg`),
      },
      {
        name: "HTML5",
        icon: require(`${toolkitPath}HTML5.png`),
      },
      {
        name: "CSS3",
        icon: require(`${toolkitPath}CSS3.png`),
      },
      {
        name: "Firebase",
        icon: require(`${toolkitPath}Firebase.png`),
      },
      {
        name: "GitHub",
        icon: require(`${toolkitPath}GitHub.png`),
      },
      {
        name: "Trello",
        icon: require(`${toolkitPath}Trello.png`),
      },
      {
        name: "Photoshop",
        icon: require(`${toolkitPath}Photoshop.png`),
      },
    ]
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
      link: require("./assets/Damiano_Melcarne_Resume.pdf")
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


