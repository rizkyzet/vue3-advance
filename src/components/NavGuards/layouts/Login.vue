<template>
  <div>
    Username
    <input type="text" />
  </div>
  <div>
    Password
    <input type="password" />
  </div>

  <button @click="login">Login</button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const login = () => {
      localStorage.setItem("auth", true);
      router.push({ name: "Home" });
    };

    return {
      login,
    };
  },
};
</script>
