<template>
  <div>
    <h1 class="display-2 font-weight-thin ma-4">Negocie e consulte suas ações</h1>
    <v-sheet :elevation="24" class="pa-2 white--text primary font-weight-light">
        <v-icon class="ma-4" dark>
          mdi-cloud-upload
        </v-icon>
      <span>Você pode Salvar & Carregar os dados</span>
    </v-sheet>
    <v-divider class="my-4" />
    <p v-text="text" />
    <p><strong>Seu Saldo : R$</strong> {{ funds }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Olá seja bem vindo"
    };
  },
  computed:{
    funds(){
      return this.$store.getters.funds
    }
  }
};
</script>