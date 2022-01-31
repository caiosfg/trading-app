<template>
    <v-toolbar dark prominent src="../assets/graphic.jpg" app>
        <v-toolbar-title class="headline text-uppercase mr-4">       
            <span>Trading</span>
            <span class="font-weight-light">App</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn flat to="/">Home</v-btn>
            <v-btn flat to="/stocks">Stocks</v-btn>
            <v-btn flat to="/stock">Stock</v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toollbar-items>
            <v-btn @click="endDay" flat>Finalizar Dia</v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">Salvar & Carregar</v-btn>
                </template>
                <v-list>
                    <v-list-item @click="saveData">
                        <v-list-item-title>Salvar Dados</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Carregar Dados</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-layout align-center>
                <span class="text-uppercase">
                    Saldo : {{ funds | currency}}
                </span>
            </v-layout>
        </v-toollbar-items>
    </v-toolbar>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    computed:{
        funds(){
            return this.$store.getters.funds
        }
    },
    methods:{
        ...mapActions(['randomizeStocks']),
        endDay(){
            this.randomizeStocks()
        },
        saveData(){
            const { funds, stockPortfolio, stocks } = this.$store.getters

            this.$http.put('data.json', { funds, stockPortfolio, stocks })
        }
    }
}
</script>