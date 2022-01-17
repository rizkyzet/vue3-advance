<template>
  <div>
    Username
    <input type="text" v-model="username" />
  </div>
  <div>
    Password
    <input type="password" />
  </div>

  <button @click="login">Login</button>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref("");

    const login = () => {
      localStorage.setItem("auth", true);
      store.commit("user/setUsername", username.value);
      store.dispatch('user/getCredential');
      router.push({ name: "Home" });
    };

    return {
      login,
      username
    };
  },
};
</script>
