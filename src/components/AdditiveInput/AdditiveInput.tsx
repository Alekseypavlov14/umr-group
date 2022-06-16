import { FC, ChangeEvent } from 'react'
import styles from './AdditiveInput.module.css'

interface AdditiveInputProps {
  additive: {
    name: string,
    label: string,
    price: number
  }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AdditiveInput: FC<AdditiveInputProps> = ({
  additive,
  onChange
}) => {
  return (
    <label 
      className={styles.AdditiveContainer}
      htmlFor={additive.name}
    >
      <input 
        id={additive.name}
        className={styles.AdditiveCheckbox}
        type='checkbox'
        name={additive.name} 
        onChange={onChange}
      />

      <label 
        className={styles.AdditiveCheckboxVisible}
        htmlFor={additive.name} 
      >
        <div className={styles.AdditiveIndicator} />
      </label>

      <label 
        className={styles.AdditiveText}
        htmlFor={additive.name}
      >
        {additive.label}
      </label>
    </label>
  )
}

export { AdditiveInput }