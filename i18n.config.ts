import messages from '~/locales/messages'

export default defineI18nConfig(() => ({
  locale: 'en-US',
  messages,
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency', currency: 'USD', notation: 'standard'
      },
      decimal: {
        style: 'decimal', maximumFractionDigits: 2
      },
      percent: {
        style: 'percent', useGrouping: false
      }
    }
  }
}))
