import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://github.com/thesparrow?tab=repositories",
    target: '_blank',
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://www.linkedin.com/in/anna-shilova-43442357",
    target: '_blank',
    image: <FaLinkedin className="linkedin-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://codepen.io/anya007",
    target: '_blank',
    image: <FaCodepen className="codepen-icon" />,
  },
]
