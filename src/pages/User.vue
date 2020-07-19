<template>
  <div id="person">
    <h1>Mon profil</h1>
    <Person :person="user" :button="true" :buttontest="true" />
  </div>
</template>

<script>
import Person from "@/components/Person";
export default {
  name: "Profile",
  components: { Person },
  data: function() {
    return {
      user: {}
    };
  },
  mounted() {
    this.$store.dispatch("getUserProfile").then(resp => {
      this.user = resp;
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