import { FC } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/Container/Container'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import styles from './Translators.module.css'

interface TranslatorsProps {}

const Translators: FC<TranslatorsProps> = () => {
  return (
    <div className={styles.Translators}>
      <Container>
        <div className={styles.TranslatorsContent}>
          <TextBlock
            title={<><span>Join</span> our team!</>}
            content='We are working with ukrainians and help them
            to find translators in Internet. To join our team, click the button below
            and write to our friend, Andrey'
          />

          <TextBlock
            title={<><span>Why</span> should you join us?</>}
            content='We are taking a lot of orders you will be able to get salary often.
            Also, it is nice way to help ukrainians in this difficult moment.'
          />

          <div className={styles.ButtonBlock}>
            <Button
              href='mailto:umr.translate.group@gmail.com?subject=Translator'
              children='Join'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Translators }