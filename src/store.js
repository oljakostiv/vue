import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      name: "Olha",
      todos: JSON.parse(localStorage.getItem("todos")) ?? []
    };
  },
  mutations: {
    changeName(state) {
      state.name = Math.floor(Math.random() * 1000);
    },
    deleteTodo(state, todoDeleteId) {
      state.todos = state.todos.filter(el => el.id !== todoDeleteId);
    },
    setTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    toggleCompleted(state, todoToggleId) {
      const toggleTodo = state.todos.find(el => el.id === todoToggleId);

      toggleTodo.completed = !toggleTodo.completed;
    }
    //  job: update(change) state
  },
  actions: {
    changeName(context, payload) {
      context.commit("changeName", payload);
    },
    deleteTodo(context, payload) {
      context.commit("deleteTodo", payload);
    },
    setTodo(context, payload) {
      const { title, body } = payload;
      const newTodo = {
        title,
        body,
        id: Date.now() + Math.random(),
        createdAt: new Date(),
        completed: true
      };
      //  for mutations:
      context.commit("setTodo", newTodo);
    },
    toggleCompleted(context, payload) {
      context.commit("toggleCompleted", payload);
    }
    //  job: receiving input data, calling mutations
  }
});
