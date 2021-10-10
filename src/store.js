import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) ?? []
    };
  },
  mutations: {
    setTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    deleteTodo(state, todoDeleteId) {
      state.todos = state.todos.filter(el => el.id !== todoDeleteId);
    },
    toggleCompleted(state, todoToggleId) {
      const toggleTodo = state.todos.find(el => el.id === todoToggleId);

      toggleTodo.completed = !toggleTodo.completed;
    }
    //  job: update(change) state
  },
  actions: {
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
    deleteTodo(context, payload) {
      context.commit("deleteTodo", payload);
    },
    toggleCompleted(context, payload) {
      context.commit("toggleCompleted", payload);
    }
    //  job: receiving input data, calling mutations
  }
});
