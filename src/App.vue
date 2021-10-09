<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Todos</router-link>
    <router-link to="/create">Create Todo</router-link>
  </nav>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view
    :todos="todos"
    @delete-todo="deleteTodo"
    @toggle-completed="toggleCompleted"
    @create-todo="setTodo"
  ></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) ?? []
    };
  },
  watch: {
    todos: {
      deep: true,
      handler() {
        console.log(JSON.stringify(this.todos));
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  },
  methods: {
    setTodo(title, body, onSubmitSuccess) {
      const newTodo = {
        title,
        body,
        id: Date.now() + Math.random(),
        createdAt: new Date(),
        completed: true
      };

      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));

      onSubmitSuccess();
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(el => el.id !== todoId);
      //      by index:
      // this.todos.splice(index, 1)
    },
    toggleCompleted(todoId) {
      const toggleTodo = this.todos.find(el => el.id === todoId);

      toggleTodo.completed = !toggleTodo.completed;
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

nav > a.router-link-active {
  color: #42b983;
}
</style>
