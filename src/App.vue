<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Hello everyone from {{ name }}!</h1>
    <button class="btn" @click="changeName">Change name</button>

    <h2>{{ inpValue }} {{ checkbox }} {{ select }} {{ radio }}</h2>
    <!--    <input type="text" :value="inpValue" @input="inputChange" />-->
    <input type="text" v-model.trim="inpValue" />
    <input type="checkbox" v-model="checkbox" />
    <select id="select" v-model="select">
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
    </select>
    <input type="radio" name="1" value="one" v-model="radio" />
    <input type="radio" name="1" value="two" v-model="radio" />
    <input type="radio" name="1" value="three" v-model="radio" />
    <hr />

    <form @submit.prevent="setTodo">
      <input type="text" name="title" v-model.trim="title" />
      <br />
      <input type="text" name="body" v-model.trim="body" />
      <br />
      <button type="submit">ADD TODO</button>
    </form>
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
      <button @click="deleteTodo(id, index)">Delete</button>
      <button @click="markAsCompleted(id)">
        Mark as {{ completed ? "completed" : "in-progress" }}
      </button>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "Olha",
      inpValue: "",
      checkbox: false,
      select: null,
      radio: null,
      todos: [],
      title: "",
      body: ""
    };
  },
  watch: {
    inpValue() {
      console.log("watch", this.inpValue);
    },
    todos: {
      deep: true,
      handler() {
        console.log(JSON.stringify(this.todos));
        localStorage.setItem("todos", JSON.stringify(this.todos));
      }
    }
  },
  methods: {
    changeName() {
      this.name = Math.floor(Math.random() * 1000);
    },
    setTodo() {
      const newTodo = {
        title: this.title,
        body: this.body,
        id: Date.now() + Math.random(),
        createdAt: new Date(),
        completed: true
      };

      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));

      this.title = "";
      this.body = "";
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(el => el.id !== todoId);
      //      by index:
      // this.todos.splice(index, 1)
    },
    markAsCompleted(todoId) {
      const toggleTodo = this.todos.find(el => (el.id = todoId));

      toggleTodo.completed = !toggleTodo.completed;
    }
  }
};
</script>

<style scoped>
@import "assets/index.css";

.btn {
  background: #fff;
  border: 2px solid currentColor;
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: #2c3e50;
  transition: 0.2s;

  padding: 8px 12px;
  margin: 10px;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 6px 6px 0 0 currentColor;
}

.btn:active {
  background: #2c3e50;
}
</style>
