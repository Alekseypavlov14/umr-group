import { FC } from 'react'
import cn from 'classnames'
import styles from './Anchor.module.css'

interface AnchorProps {
  href: string
  children: string
  className?: string
}

const Anchor: FC<AnchorProps> = ({
  href,
  children,
  className
}) => {
  return (
    <a
      className={cn(styles.Anchor, className)}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

export { Anchor }