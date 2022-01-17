<template>
  <div><input type="text" v-model="name_" /></div>
  <div><input type="number" v-model="age_" /></div>
</template>

<script>
import { toRefs, computed } from "vue";
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:name", "update:age"],
  setup(props, { emit }) {
    const { name, age } = toRefs(props);

    const name_ = computed({
      get: () => name.value,
      set: (val) => emit("update:name", val),
    });
    const age_ = computed({
      get: () => age.value,
      set: (val) => emit("update:age", parseInt(val)),
    });

    return {
      name_,
      age_,
    };
  },
};
</script>
