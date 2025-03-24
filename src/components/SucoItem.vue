<script>
import {mapActions,mapGetters} from "vuex";
  export default{
    props:["nome"],
    data(){
      return { contador:0,
        quantidade:1
       };
    },
    computed:{
      ...mapGetters(["contadorGlobal"]),
    },
    methods:{
      ...mapActions(["comprar"]),
      comprarSuco(){
        this.comprar(parseInt(this.quantidade, 10));
      },
    },
  };
</script>

<template>
  <h3>{{ nome }}</h3>
<input 
  type="number"
  v-model="quantidade"
  min="1"
  placeholder="Quantidade"
  />
  <button @click = "comprarSuco">Comprar</button>
  <p>Contador Global:{{ contadorGlobal }}</p>
</template>