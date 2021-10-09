<template>
  <div
    v-for="({ title, body, id, createdAt, completed }, index) of todos"
    :key="id"
    :style="{ textDecoration: completed ? 'none' : 'line-through' }"
  >
    <h4>{{ index + 1 }}</h4>
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
    <span>Created at: {{ new Date(createdAt) }}</span>
    <br />
    <span>{{ completed }}</span>
    <br />
    <button class="btn" @click="deleteTodo(id, index)">Delete</button>
    <br />
    <button class="btn" @click="toggleCompleted(id)">
      Mark as {{ completed ? "completed" : "in-progress" }}
    </button>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  emits: ["delete-todo", "toggle-completed"],
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    toggleCompleted(id) {
      this.$emit("toggle-completed", id);
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
