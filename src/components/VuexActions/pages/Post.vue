<template>
  <Suspense>
    <template #default>
      <PostDetail />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<script>
import { useRoute } from "vue-router";
import PostDetail from "../PostDetail.vue";
export default {
  components: {
    PostDetail,
  },

  setup() {
    // const route = useRoute();
    // const id = route.params.id;
    // console.log(id)
  },
};
</script>
