<template>
  <nav>
    <router-link active-class="active" to="/">Home</router-link>
    <router-link active-class="active" to="/todos">Todos</router-link>
    <router-link exact-active-class="active" to="/create"
      >Create Todo</router-link
    >
    <router-link active-class="active" to="/create/about">About</router-link>
  </nav>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
  watch: {
    "$store.state.todos": {
      deep: true,
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
      }
    },
    $route: {
      deep: true,
      handler(to, from) {
        console.log("To:", to.path);
        console.log("From:", from.path);
      }
    }
  }
};
</script>

<style scoped>
@import "assets/index.css";

nav {
  display: flex;
  background: #2c3e50;
  font-weight: initial;

  padding: 10px 20px;
}

nav a {
  color: #fff;
  text-decoration: none;

  margin-right: 20px;
}

.active {
  color: #42b983;
}
</style>
