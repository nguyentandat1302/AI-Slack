import axios from 'axios'

export async function translateToEnglish(text) {
  const response = await axios.post('https://libretranslate.de/translate', {
    q: text,
    source: 'auto',
    target: 'en',
    format: 'text'
  })

  return response.data.translatedText
}
