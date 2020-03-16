import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "#",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "#",
    image: <FaLinkedin className="linkedin-icon icon" />,
  },
  {
    id: Math.random(),
    url: "#",
    image: <FaCodepen className="codepen-icon" />,
  },
]
