<template>
  <div id="person">
    <h1>Mon profil</h1>
    <Person v-for="person in users" :key="person.id" :person="person" />
  </div>
</template>

<script>
import Person from "@/components/Person";
export default {
  name: "Profile",
  components: { Person },
  data: function() {
    return {
      users: []
    };
  },
  mounted() {
    this.$store.dispatch("getUsers").then(resp => {
      this.users = resp;
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