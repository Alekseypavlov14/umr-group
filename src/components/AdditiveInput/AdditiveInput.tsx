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
      htmlFor={additive.name} 
      className={styles.AdditiveLabel} 
    >
      <input 
        id={additive.name}
        className={styles.AdditiveCheckbox}
        type='checkbox'
        name={additive.name} 
        onChange={onChange}
      />
      <div className={styles.AdditiveText}>
        {additive.label}
      </div>
    </label>
  )
}

export { AdditiveInput }