import styles from "./select.module.css"

export default function Input({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  )
}
