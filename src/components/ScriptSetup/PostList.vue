<template>
  <pre>{{ props }}</pre>
  <button @click="emit('submit','testing emit defineEmit')">Klik Emit</button>
  <ul v-for="(item, index) in list" :key="index">
    <li>
      <router-link :to="`/posts/${item.id}`">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script setup>
import { reactive, toRefs } from "vue";

const data = reactive({
  list: [],
});

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  nomor:{
    type:Number,
    default:0
  }
});

const emit = defineEmits(['submit'])

const result = await fetch("https://jsonplaceholder.typicode.com/posts");

data.list = await result.json();
const list = data.list;
</script>
