import { FC, ReactNode } from 'react'
import { Container } from '../Container/Container'
import cn from 'classnames'
import styles from './Section.module.css'

interface SectionProps {
  children: ReactNode
  withoutImage?: boolean
}

const Section: FC<SectionProps> = ({ 
  children, 
  withoutImage 
}) => {
  return (
    <div className={cn(styles.Section, withoutImage && styles.WithoutImage)}>
      <Container>
        <div className={styles.Section__Content}>
          {children}
        </div>
      </Container>
    </div>
  )
}

export { Section }