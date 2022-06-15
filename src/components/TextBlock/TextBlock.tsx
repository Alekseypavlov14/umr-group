import { FC, ReactNode } from 'react'
import styles from './TextBlock.module.css'

interface TextBlockProps {
  title: ReactNode,
  content: ReactNode
}

const TextBlock: FC<TextBlockProps> = ({
  title,
  content
}) => {
  return (
    <div className={styles.TextBlock}>
      <h2 className={styles.TextBlock__title}>{title}</h2>
      <div className={styles.TextBlock__content}>{content}</div>
    </div>
  )
}

export { TextBlock }