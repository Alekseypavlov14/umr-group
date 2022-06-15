import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import image from './../../assets/images/translator.png'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.Home}>
      <Container>

        <section className={styles.Section}>
          <div className={styles.Content}>
            <TextBlock
              title={<>Ми - <span>UMR&nbsp;Group</span></>}
              content="Ми допомагаємо Вам знаходити перекладачів з російської на 
              румунську мову. Наші спеціалісти вирішують проблеми, з якими зустрічаються 
              громадяни України.
              "
            />
            <Button 
              href='/order'
              children='Order'
              onClick={(e) => {
                e.preventDefault()
                navigate('/order')
              }}
            />
          </div>
          <img 
            className={styles.Image} 
            src={image} 
            alt='translator' 
          />
        </section>

      </Container>
    </div>
  )
}

export { Home }