import messages from '~/locales/messages'
import numberFormats from '~/locales/numberFormats'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages,
  numberFormats
}))
