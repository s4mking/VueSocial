<template>
  <div>
    <ul v-if="friends && friends.length">
      <!-- <li v-for="friend of friends">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      friends: {}
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch("getFriend");
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
