<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="Card image cap" :src="picture" />
    <div class="card-body">
      <h5 class="card-title">{{person.name}}</h5>
      <p class="card-text">{{person.username}}</p>
      <router-link :to="'/user/'+person.id">{{person.id}}</router-link>
      <div v-if="button" class="button">
        <button v-if="buttontest" type="button" v-on:click="request()">Ajouter</button>
        <button type="button" v-on:click="block()">Bloquer</button>
        <button type="button" v-on:click="unblock()">Debloquer</button>
      </div>

      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Person",
  data: function() {
    return {
      picture: ""
    };
  },
  props: {
    person: {
      type: Object
    },
    button: Boolean,
    buttontest: Boolean
  },
  methods: {
    request() {
      this.$store
        .dispatch("sendFriendRequest", this.person.id)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    block() {
      this.$store
        .dispatch("blockUser", this.person.id)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    unblock() {
      this.$store
        .dispatch("deleteBlockUser", this.person.id)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  },
  mounted() {
    axios
      .get(`https://randomuser.me/api/`, {
        headers: {}
      })
      .then(response => {
        this.picture = response.data.results[0].picture.medium;
      });
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
