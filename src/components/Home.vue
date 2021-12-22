<template>
  <h1>Home</h1>
  <div>
    <p>{{ text }}</p>
    <img :src="img.response" :alt="img.text">
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Olá seja bem vindo",
      img:{ response: './assets/graphic.jpg', text: 'graphic trade'}
    };
  },
};
</script>