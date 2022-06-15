import { FC } from 'react'
import { Section } from '../../components/Section/Section'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import styles from './About.module.css'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className={styles.About}>
      <Section withoutImage>
        <TextBlock
          title='Хто ми?'
          content='Ми – UMR group. Наша ідея полягає в тому, 
          щоб допомогти українцям, які покинули Україну після 24 лютого. 
          Ви можете звертатися до нас з питань перекладу. Ми живемо в Румунії 
          вже більше трьох місяців и точно знаємо всі нюанси и можливі проблеми, 
          з якими Ви можете зустрітися в цій країні.'
        />
      </Section>
    </div>
  )
}

export { About }