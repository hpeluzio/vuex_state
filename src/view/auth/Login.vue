<template>
  <div>
    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            v-model="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" @click="login" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    msg: "Login",
    email: "",
    password: ""
  }),

  created() {},

  methods: {
    login() {
      var URL = "http://127.0.0.1";
      var PORT = "3333";

      let axios_instance;

      if (localStorage.getItem("user")) {
        var userSession = JSON.parse(localStorage.getItem("user"));

        axios_instance = axios.create({
          baseURL: URL + ":" + PORT,
          headers: {
            Authorization: "Bearer " + userSession.token.token
          }
        });
      } else {
        var userSession = JSON.parse(localStorage.getItem("user"));

        axios_instance = axios.create({
          baseURL: URL + ":" + PORT
        });
      }

      axios_instance({
        method: "post",
        url: "/login",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          if (response.data.token) {
            // Se entrar aqui autenticou com sucesso
            console.log('login!')
            alert('Logou!')
            this.$router.push('/')
            localStorage.setItem("user", JSON.stringify(response.data));
          }
        })
        .catch(error => {
          console.log("Erro!");
          //this.errors.add({ field: 'auth', msg: 'E-mail ou senha inválidos' })
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
