<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="Card image cap" :src="picture" />
    <div class="card-body">
      <h5 class="card-title">{{request.id}}</h5>
      <h5 class="card-title">From {{request.name}}</h5>
      <button type="button" v-on:click="accept()">Accepter</button>
      <button type="button" v-on:click="decline()">Refuser</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Request",
  props: {
    request: {
      type: Object
    }
  },
  data: function() {
    return {
      picture: ""
    };
  },
  mounted() {
    axios
      .get(`https://randomuser.me/api/`, {
        headers: {}
      })
      .then(response => {
        this.picture = response.data.results[0].picture.medium;
      });
  },
  methods: {
    accept() {
      this.$store
        .dispatch("acceptRequest", this.request.id)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    decline() {
      this.$store
        .dispatch("rejectRequest", this.request.id)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
