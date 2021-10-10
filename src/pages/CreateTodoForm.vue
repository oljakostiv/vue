<template>
  <div>
    <h3>Let into:</h3>
    <form @submit.prevent="setTodo">
      <input
        class="inputCreate"
        type="text"
        name="title"
        placeholder="some title.."
        v-model.trim="title"
        required
      />
      <br />
      <input
        class="inputCreate"
        type="text"
        name="body"
        placeholder="some body.."
        v-model.trim="body"
        required
      />
      <br />
      <button class="btn" type="submit">ADD TODO</button>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "CreateTodoForm",
  data() {
    return {
      title: "",
      body: ""
    };
  },
  methods: {
    onSubmitSuccess() {
      this.title = "";
      this.body = "";

      this.$router.push("/todos");
    },
    setTodo() {
      this.$store.dispatch("setTodo", {
        title: this.title,
        body: this.body
      });
      this.onSubmitSuccess();
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
