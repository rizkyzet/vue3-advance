<template>
  <Suspense>
    <template #default>
      <PostDetail />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script setup>
import { useRoute } from "vue-router";
import PostDetail from "../PostDetail.vue";

</script>
