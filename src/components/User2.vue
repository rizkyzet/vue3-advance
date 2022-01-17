<template>
  <div>Ini adalah Component User 2</div>
  <div>{{ data }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const data = ref(null);

    const getData = () =>
      new Promise((resolve) => {
        return setTimeout(() => resolve((data.value = "Nusendra")), 5000);
      });

    await getData();

    console.log(data.value);

    return { data };
  },
};
</script>
