<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{person.name}}</h5>
      <p class="card-text">{{person.username}}</p>
      <p class="card-text">{{person.id}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    person: {
      type: Object
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
