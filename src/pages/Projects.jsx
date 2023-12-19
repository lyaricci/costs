import { useLocation } from "react-router-dom"

import styles from "./projects.module.css"

import Message from "../components/Message"

export default function Projects() {
  const location = useLocation()

  let message = ""

  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>Meus projetos</h1>
      {message && <Message msg={message} type="success" />}
    </div>
  )
}
