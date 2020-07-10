<template>
  <div id="login">
    <h1>Register</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="text" name="name" v-model="input.name" placeholder="Name" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="register()">Register</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      input: {
        username: "",
        name: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("register", this.input)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>