import { FC, MouseEvent } from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

interface ButtonProps {
  href: string
  children: string
  outlined?: boolean
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

const Button: FC<ButtonProps> = ({
  href,
  children,
  outlined,
  onClick
}) => {
  return (
    <a 
      className={cn(styles.Button, outlined && styles.Outlined)}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export { Button }