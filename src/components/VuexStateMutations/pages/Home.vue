<template>
  Homepage

  <p>Selamat Datang {{ username }}</p>

  <p>Total like : {{ likes }}</p>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const store = useStore();
    const username = ref("");

    const likes = computed(() => {
      return store.state.totalLikes;
    });

    // const likes = store.state.totalLikes;

    onMounted(() => {
      username.value = store.state.username;
    });

    return {
      likes,
      username
    };
  },
};
</script>
