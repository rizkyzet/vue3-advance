<template>
  <h2>{{ data.itle }}</h2>
  <div>{{ data.body }}</div>

  <p><button @click="addLike">Like</button></p>
</template>

<script setup>
import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const data = reactive({
  title: "",
  body: "",
});

const route = useRoute();
const store = useStore();

const id = route.params.id;

const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

const { title, body } = await result.json();

data.title = title;
data.body = body;

const addLike = () => {
  store.commit("post/increment");
};
</script>
