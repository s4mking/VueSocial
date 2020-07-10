<template>
  <div id="person">
    <h1>Mon profil</h1>
    <Person :person="me" />
  </div>
</template>

<script>
import Person from "@/components/Person";
export default {
  name: "Profile",
  components: { Person },
  data: function() {
    return {
      me: {}
    };
  },
  mounted() {
    this.$store.dispatch("getMe").then(resp => {
      console.log(resp);
      this.me = this.$store.state.me;
      console.log(this.me);
    });
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