<template>
  <pre>{{ name }}</pre>
  <pre>{{ age }}</pre>

  <User v-model:name="name" v-model:age="age"></User>
</template>

<script>
import { ref } from "vue";
import User from "./components/MultiVModel/user.vue";
export default {
  components: { User },
  setup() {
      
    const name = ref("");
    const age = ref(0);

    return {
      name,
      age,
    };
  },
};
</script>
