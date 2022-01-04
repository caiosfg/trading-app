<template>
  <div>
    <h1>Home</h1>
    <p v-text="text" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Olá seja bem vindo"
    };
  },
};
</script>