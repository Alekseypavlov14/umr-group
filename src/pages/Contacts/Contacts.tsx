import { FC } from 'react'
import { Contact } from '../../components/Contact/Contact'
import { Container } from '../../components/Container/Container'
import styles from './Contacts.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = () => {
  return (
    <div className={styles.Contacts}>
      <Container>
        <Contact
          socialMedia='Telegram'
          link='https://t.me/aleshapavlov14'
          label='@aleshapavlov14'
        />
      </Container>
    </div>
  )
}

export { Contacts }