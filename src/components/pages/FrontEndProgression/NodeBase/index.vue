<script setup>
import Building from '@/components/basic/Building/index'

import { Configuration, OpenAIApi } from "openai"
 
const configuration = new Configuration({
  organization: '',
  apiKey: '',
})
const openai = new OpenAIApi(configuration)

</script>

<template>
  <div>
    23
  </div>
</template>