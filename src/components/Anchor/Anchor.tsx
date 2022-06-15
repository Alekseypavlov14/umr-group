import { FC } from 'react'
import styles from './Anchor.module.css'

interface AnchorProps {
  href: string
  children: string

}

const Anchor: FC<AnchorProps> = ({
  href,
  children
}) => {
  return (
    <a
      href={href}
      className={styles.Anchor}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

export { Anchor }