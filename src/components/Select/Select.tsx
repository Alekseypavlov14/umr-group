import { FC } from 'react'
import ReactSelect from 'react-select'
import styles from './Select.module.css'

type Option = {
  label: string,
  value: string
}

interface SelectProps {
  options: Option[],
  onChange: (option: Option | null) => void
}

const Select: FC<SelectProps> = ({ 
  options,
  onChange
}) => {
  return (
    <ReactSelect
      className={styles.Select}
      defaultValue={options[0]}
      options={options}
      onChange={onChange}
    />
  )
}

export { Select }