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
    
    <button @click="salvar_produto" class="btn btn-primary">Salvar</button> 
    <button @click="apicall" class="btn btn-success ml-2">Obter Produtos</button> 
    <button @click="limpar" class="btn btn-danger ml-2">Limpar</button> 

    <ul id="produtos">
      <li v-for="(produto, key) in produtos" :key="key">
         <br> <b>{{ produto.id }}</b> <br>
         {{ produto.name }} - {{ produto.quantidade }} - {{ produto.valor }} <br> 
         <button @click="carregar_produto(key)" class="btn btn-warning ml-2">Carregar</button> 
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
    ... mapActions('produtos', ['ADD_PRODUTO_ACT', 'DELETE_PRODUTO_ACT','API_CALL_ACT', 'UPDATE_PRODUTO_ACT']),

    limpar() {
      this.id = null
      this.produto.name = ''
      this.produto.quantidade = ''
      this.produto.valor = ''
    }, 

    carregar_produto(id) {
      console.log('id: ', id)
      this.id = id
      console.log(this.produtos)
      this.produto = { ... this.produtos[id] }
      // this.produto = this.produtos.find( produto => { 
      //   if(produto.id == id)
      //     return produto 
      // })
    }, 

    delete_produto(id) {
      // console.log('id: ', id)
      this.DELETE_PRODUTO_ACT(id).then( _ => { this.limpar })
    },  

    apicall() {
      this.API_CALL_ACT()
    },

    salvar_produto() {
      console.log(this.id)

      // const metodo = this.id ? 'patch' : 'post'
      if (this.id !== null){
        new Promise( (resolve, reject) => {
          //Resolve isso aqui priimeiro, depois limpe o form
          resolve(this.UPDATE_PRODUTO_ACT(this.produto))
        })
        .then( res => { 
          this.limpar()
        })
        .catch( error => { console.log('Error: ', error) })
        .finally( _ => {
          this.limpar()
        })
      } else {
        new Promise( (resolve, reject) => {
          //Resolve isso aqui priimeiro, depois limpe o form
          resolve(this.ADD_PRODUTO_ACT(this.produto))
        })
        .then( res => { 
          this.limpar()
        })
        .catch( error => { console.log('Error: ', error) })
        .finally( _ => {
          this.limpar()
        })
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
