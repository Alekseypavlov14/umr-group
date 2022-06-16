class Mailer {
  private subject = 'Замовлення'
  private target = 'umr.translate.group@gmail.com'

  send(text: string) {
    window.location.href = `mailto:${this.target}
      ?subject=${this.subject}
      &body=${text.trim().replace(/\s/, '%20')}`
  }
}

export const mailer = new Mailer()