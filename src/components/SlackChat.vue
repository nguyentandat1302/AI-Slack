<template>
  <div class="chat-container">
    <textarea v-model="message" placeholder="Nhập tin nhắn..."></textarea>
    <button @click="sendMessage">Gửi</button>
    <div v-if="reply" class="reply">
      <strong>Phản hồi AI:</strong>
      <p>{{ reply }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { askOpenAI } from '../api/openai'
import { translateToEnglish } from '../utils/translate'
import { sendSlackMessage } from '../api/slack'

const message = ref('')
const reply = ref('')

async function sendMessage() {
  const translated = await translateToEnglish(message.value)
  const aiResponse = await askOpenAI(translated)
  reply.value = aiResponse
  await sendSlackMessage(aiResponse)
}
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
textarea {
  width: 100%;
  height: 100px;
}
button {
  margin-top: 10px;
}
.reply {
  margin-top: 20px;
  background: #f0f0f0;
  padding: 10px;
}
</style>
