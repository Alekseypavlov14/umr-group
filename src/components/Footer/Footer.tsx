import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'
import styles from './Footer.module.css'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.Title}>
          UMR Group
        </div>
        <div className={styles.Footer__Columns}>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Навігація</div>
            <div className={styles.Footer__Row}>
              <Link 
                className={styles.Footer__Row__Link} 
                to='/'
              >
                Головна
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link 
                className={styles.Footer__Row__Link} 
                to='/order'
              >
                Замовити
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link 
                className={styles.Footer__Row__Link} 
                to='/about'
              >
                О нас
              </Link>
            </div>
            <div className={styles.Footer__Row}>
              <Link 
                className={styles.Footer__Row__Link} 
                to='/contacts'
              >
                Контакти
              </Link>
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Компанія</div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <a 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/+380508801537'
                children='Андрій'
                target='_blank'
                rel='noreferrer'
              />
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
              <a 
                className={styles.Footer__Row__Anchor}
                href='mailto:umrgroup93@gmail.com'
                children='umrgroup93@gmail.com'
                target='_blank'
                rel='noreferrer'
              />
            </div>
          </div>
          <div className={styles.Footer__Column}>
            <div className={styles.Footer__Column__Title}>Автор</div>
            <div className={styles.Footer__Row}>
              Telegram: &nbsp;
              <a 
                className={styles.Footer__Row__Anchor}
                href='https://telegram.me/aleshapavlov14'
                children='@aleshapavlov14'
                target='_blank'
                rel='noreferrer'
              />
            </div>
            <div className={styles.Footer__Row}>
              Google: &nbsp;
                <a 
                  className={styles.Footer__Row__Anchor}
                  href='mailto:aleshapavlov9@gmail.com'
                  children='aleshapavlov9@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                />
            </div>
            <div className={styles.Footer__Row}>
              GitHub: &nbsp;
                <a 
                  className={styles.Footer__Row__Anchor}
                  href='https://github.com/Alekseypavlov14'
                  children='Alekseypavlov14'
                  target='_blank'
                  rel='noreferrer'
                />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Footer }