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
    $route: {
      deep: true,
      handler(to, from) {
        console.log("To:", to.path);
        console.log("From:", from.path);
      }
    },
    "$store.state.todos": {
      deep: true,
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
      }
    }
  }
};
</script>

<style scoped>
@import "assets/index.css";
</style>
