import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      name: "Olha",
      names: [
        "Bogdan",
        "Nikolay",
        "Stepan",
        "Sergiy",
        "Igor",
        "Vladislav",
        "Miroslav",
        "Nikita",
        "Taras",
        "Maria",
        "Victoria",
        "Iryna",
        "Dasha",
        "Natalia"
      ],
      todos: JSON.parse(localStorage.getItem("todos")) ?? [],
      posts: []
    };
  },
  mutations: {
    changeName(state) {
      state.name = state.names[Math.floor(Math.random() * state.names.length)];
    },
    deleteTodo(state, todoDeleteId) {
      state.todos = state.todos.filter(el => el.id !== todoDeleteId);
    },
    setTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    setPosts(state, posts) {
      state.posts = posts;
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
    async getPosts(context) {
      const payload = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await payload.json();

      await new Promise(res => setTimeout(res, 3000));

      context.commit("setPosts", posts);
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
  },
  getters: {
    sortedPosts(state) {
      const postCopy = [...state.posts];
      postCopy.sort((a, b) => {
        return b.title.length < a.title.length ? -1 : 1;
      });
      return postCopy;
    }
  }
});
