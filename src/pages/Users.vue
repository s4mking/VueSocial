<template>
  <div id="person">
    <h1>Utilisateurs</h1>
    <div class="subcontent">
      <Person
        v-for="person in users"
        :key="person.id"
        :person="person"
        :button="true"
        :buttontest="true"
      />
    </div>
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
.subcontent {
  display: flex;
  flex-wrap: wrap;
}
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>