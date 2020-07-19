<template>
  <div id="freinds">
    <h1>Mes amis</h1>
    <Person
      v-for="friend in friends"
      :key="friend.id"
      :person="friend"
      :button="true"
      :buttontest="false"
    />
  </div>
</template>

<script>
import Person from "@/components/Person";

export default {
  name: "Friends",
  components: { Person },
  data: function() {
    return {
      friends: []
    };
  },
  mounted() {
    this.$store.dispatch("getFriends").then(resp => {
      this.friends = resp.data;
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