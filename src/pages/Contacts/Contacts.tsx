import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import styles from './Contacts.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={styles.Contacts}>
      <Container>
        Contacts
      </Container>
    </div>
  )
}

export { Contacts }