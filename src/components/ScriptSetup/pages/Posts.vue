<template>
  <Suspense>
    <template #default>
      <PostList text="test defineProps" @submit="handleSubmit" />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import { useRoute } from "vue-router";
import PostList from "../PostList.vue";


const handleSubmit = value =>{
  console.log(value)
}
</script>
