import { Link } from "react-router-dom"

import styles from "./linkButton.module.css"

export default function LinkButton({ to, text }) {
  return (
    <Link to={to} className={styles.linkButton}>
      {text}
    </Link>
  )
}
