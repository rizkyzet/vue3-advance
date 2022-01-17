<template>
  <div class="alert" v-if="isOpenAlert">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis facere
    provident, porro pariatur debitis in!
   
  </div>

  <button v-if="!isOpenAlert" @click="showAlert">Show alert</button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpenAlert = ref(false);
    console.log(isOpenAlert.value);

    const showAlert = () => {
      isOpenAlert.value = true;
      
      setTimeout(()=>{
          isOpenAlert.value = false;
      },2000)
    };

    return {
        isOpenAlert,
        showAlert,
    }
  },
};
</script>

<style scoped>
.alert {
  background: green;
  opacity: 0.5;
  padding: 15px 20px;
  color: white;
}


</style>
