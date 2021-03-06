import { FC } from 'react'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import { Section } from '../../components/Section/Section'
import { Link } from 'react-router-dom'
import image from './../../assets/images/translator.png'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Section>
        <TextBlock
          title={<>Ми - <span>UMR&nbsp;Group</span></>}
          content="Ми допомагаємо Вам знаходити перекладачів з російської на 
          румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
          громадяни України."
        />
        <img 
          className={styles.Image} 
          src={image} 
          alt='translator' 
        />
      </Section>

      <Section withoutImage>
        <div className={styles.OrderLinkContent}>
          <TextBlock
            title='Які питання ми можемо допомогти вирішити?'
            content="Наша команда пропонує два вида послуг перекладача: 
            по телефону та на місці."
          />
          <Link
            to='/order' 
            children='Замовити'
            className={styles.OrderLink}
          />
        </div>
      </Section>
    </div>
  )
}

export { Home }