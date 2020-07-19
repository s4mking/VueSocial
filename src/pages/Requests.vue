<template>
  <div id="request">
    <h1>Mes requetes</h1>
    <Request v-for="request in requests" :key="request.id" :request="request" />
  </div>
</template>

<script>
import Request from "@/components/Request";
export default {
  name: "Profile",
  components: { Request },
  data: function() {
    return {
      requests: []
    };
  },
  mounted() {
    this.$store.dispatch("getFriendshipRequest").then(resp => {
      this.requests = resp;
      console.log(resp);
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