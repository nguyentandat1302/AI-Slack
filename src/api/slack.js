import axios from 'axios'

export async function sendSlackMessage(text) {
  return axios.post('https://slack.com/api/chat.postMessage', {
    channel: 'your-channel-id',
    text: text
  }, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
}
