<template>
  <div class="container">

    <form>
      <div class="form-group">
        <label for="name">Nome do produto</label>
        <input
          type="name"
          name="name"
          v-model="name"
          class="form-control"
          id="name"
          placeholder="Enter Nome"
        />
        <label for="name">Quantidade</label>
        <input
          type="quantidade"
          name="quantidade"
          v-model="quantidade"
          class="form-control"
          id="quantidade"
          placeholder="Quantidade"
        />
        <label for="name">Valor</label>
        <input
          type="valor"
          name="valor"
          v-model="valor"
          class="form-control"
          id="valor"
          placeholder="Valor"
        />                      
      </div>
    </form>       
    <button @click="nomesubmit" class="btn btn-primary">Submit</button> 
      <!-- <button @click="deslogar" class="btn btn-danger">Deslogar</button> -->
    <ul id="produtos">
      <li v-for="produto in produtos">
         {{ produto.name }} - {{ produto.quantidade }} - {{ produto.valor }}
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import http from '@/http/axios'

export default {
  data: () => ({
      name: '',
      quantidade: '',
      valor: '',

  }),

  beforeCreate() {},

  created() {
    // console.log('created http', http)
      // this.$http.post('produtos.json', {
      //   name: 'CREATED',
      //   quantidade: '1',
      //   valor: '2',
      // })      
  },

  mounted() {},

  watch: {},

  computed: {
    ... mapGetters('produtos', {
      produtos: 'produtos'
    })
  },

  methods: {

    nomesubmit() {
      //  console.log('name produto: ', this.name) 
      //  console.log('name produto: ', this.quantidade) 
      //  console.log('name produto: ', this.valor) 

      // this.$http.post('produtos.json', {
      //   name: this.name,
      //   quantidade: this.quantidade,
      //   valor: this.valor,
      // })
      // .then(res => {
      try{
        this.ADD_PRODUTO_ACT({
          name: this.name,
          quantidade: this.quantidade,
          valor: this.valor
        })
        //alert('PRODUTO INSERIDO COM SUCESSO')
      } catch(error) {
        console.log('ERROR:', error)
        //alert('ERROR: PRODUTO NÃO INSERIDO')
      }
      //   alert('PRODUTO INSERIDO COM SUCESSO')
      // })
      // .catch(error => {
      //   alert('ERROR: PRODUTO NÃO INSERIDO')
      // })  

      // this.$http.post('produtos.json', {
      //   name: this.name,
      //   quantidade: this.quantidade,
      //   valor: this.valor,
      // })      
      //localStorage.setItem('name', this.name)
    },

    ... mapActions('produtos', ['ADD_PRODUTO_ACT']),

    // deslogar() {
      
    //   this.setDeslogarAct
    //   this.$router.push('/login')
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
