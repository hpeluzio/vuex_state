<template>
  <div class="container">

    <form>
      <div class="form-group">

        <input
          v-model="produto.name"
          class="form-control"
          placeholder="Enter Nome"
        />

        <input
          v-model="produto.quantidade"
          class="form-control"
          placeholder="Quantidade"
        />

        <input
          v-model="produto.valor"
          class="form-control"
          placeholder="Valor"
        />                      
      </div>
    </form>       
    
    <button @click="add_produto" class="btn btn-primary">Add Produto</button> 
    <button @click="apicall" class="btn btn-success ml-2">API CALL</button> 
    <button @click="limpar" class="btn btn-danger ml-2">Limpar</button> 

    <ul id="produtos">
      <li v-for="(produto, id) in produtos" :key="id">
         <br> <b>{{ produto.id }}</b> <br>
         {{ produto.name }} - {{ produto.quantidade }} - {{ produto.valor }} <br> 
         <button @click="carregar_produto(produto.id)" class="btn btn-primary ml-2">Carregar</button> 
         <button @click="delete_produto(produto.id)" class="btn btn-danger ml-2">Excluir</button> 

      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import http from '@/http/axios'

export default {
  data() {
    return {
      showLoad: false,
      id: null,
      produto: {
        name: '',
        quantidade: '',
        valor: ''
      }
    }
  },

  beforeCreate() {},

  created() {},

  mounted() {},

  watch: {},

  computed: {
    ... mapGetters('produtos', {
      produtos: 'produtos'
    }),

    // ...mapGetters({
    //   SET_LOADER: 'SET_LOADER'
    // })
  },

  methods: {
    ... mapActions('produtos', ['ADD_PRODUTO_ACT', 'DELETE_PRODUTO_ACT','API_CALL_ACT']),

    limpar() {
      this.id = null
      this.produto.name = ''
      this.produto.quantidade = ''
      this.produto.valor = ''
    }, 

    carregar_produto(id) {
      // console.log('id: ', id)
      this.produto = this.produtos.find( produto => { 
        if(produto.id == id)
          return produto 
      })
    }, 

    delete_produto(id) {
      // console.log('id: ', id)
      this.DELETE_PRODUTO_ACT(id).then( _ => { this.limpar })
    },  

    apicall() {
      this.API_CALL_ACT()
    },

    add_produto() {
      this.showLoad = true
      console.log('EU HEIIN')
      // setTimeout(() => {
      //   console.log('EU HEIIN')
      //   this.showLoad = false
      // }, 2000);
      // setTimeout(() => {
        
      // }, 2000);

      try {
        this.ADD_PRODUTO_ACT(this.produto)
      } catch (error) {
        console.log(error)
      } finally {
        this.showLoad = false
        this.limpar()
      }
      // new Promise( (resolve, reject) => {
      //   //Resolve isso aqui priimeiro, depois limpe o form
      //   resolve(this.ADD_PRODUTO_ACT(this.produto))
      // })
      // .then( res => { 
      //   this.limpar()
      // })
      // .catch( error => { console.log('Error: ', error) })
      // .finally( _ => {
      //   this.limpar()
      //   this.showLoad = false
      // })
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
