<template>
  <div id="login">
    <Register />
    <Login />
  </div>
</template>

<script>
import Register from "@/components/Register";
import Login from "@/components/Login";
export default {
  name: "Connection",
  components: { Login, Register },
  data() {
    return {};
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