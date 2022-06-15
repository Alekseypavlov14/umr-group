import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import cn from 'classnames'
import image from './../../assets/images/translator.png'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <section className={styles.Section}>
        <Container>
          <div className={styles.Section__Content}>
            <div className={styles.Content}>
              <TextBlock
                title={<>Ми - <span>UMR&nbsp;Group</span></>}
                content="Ми допомагаємо Вам знаходити перекладачів з російської на 
                румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
                громадяни України."
              />
            </div>
            <img 
              className={styles.Image} 
              src={image} 
              alt='translator' 
            />
          </div>
        </Container>
      </section>

      <section className={cn(styles.Section, styles.Section_without_image)}>
        <Container>
          <div className={styles.Section__Content}>
            <div className={styles.Content}>
              <TextBlock
                title='Які питання ми можемо допомогти вирішити?'
                content="Наша команда пропонує два вида послуг перекладача: 
                по телефону та на місці."
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export { Home }