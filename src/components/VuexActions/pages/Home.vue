<template>
  Homepage

  <p>Selamat Datang {{ username }}</p>

  <pre>{{ credential }}</pre>

  <p>Total like : {{ likes }}</p>

  <button @click="tambah">Tambah</button>
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

    const credential = computed(() => {
      return store.state.credential;
    });

    // const likes = store.state.totalLikes;

    onMounted(() => {
      username.value = store.state.username;
    });

    const tambah = () => {
      // store.dispatch('incrementAction')
      store.dispatch("incrementActionAsync", { amount: 10 });
    };

    return {
      likes,
      username,
      tambah,
      credential
    };
  },
};
</script>
