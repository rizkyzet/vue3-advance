<template>
  Homepage

  <p>Selamat Datang {{ username }}</p>
  <button @click="increment">Add Like</button>
  <button @click="setUsername('Rizkyzet')">Change Username</button>
  <button @click="getCredential">Get Profile</button>

  <pre>{{ credential }}</pre>

  <p>Total like : {{ totalLikes }}</p>
  <p>Total fake like : {{ fakeLikes }}</p>

  <button @click="tambah">Tambah</button>
</template>

<script>
import { useStore, mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { computed, ref, onMounted } from "vue";
export default {
  computed: {
    ...mapState(["username", "credential", "totalLikes"]),
    ...mapGetters(["fakeTotalLikes"]),
    // ...mapState({
    //   likes:'totalLikes'
    // })
  },
  methods: {
    ...mapMutations(["increment", "setUsername", "setCredential"]),
    ...mapActions(["getCredential"]),
  },
};
</script>
