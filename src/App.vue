<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Hello everyone from {{ name }}!</h1>
    <button class="btn" @click="changeName">Change name</button>

    <div>
      <button class="btn" @click="isVisible = !isVisible">Toggle</button>
      <Button v-if="isVisible" text="Awesome" @button-click="changeName" />
    </div>

    <button class="btn" @click="counter += 1">Counter inc</button>
    <button class="btn" @click="counter -= 1">Counter dec</button>
    <div v-if="counter === 0">It's zero!</div>
    <div v-else-if="counter === 1">It's one!</div>
    <div v-else-if="counter === 2">It's two!</div>
    <div v-else-if="counter < 0">It's bad value!</div>
    <div v-else>It's a lot!</div>
    <div class="counter">
      <h2>{{ counter }}</h2>
    </div>
    <br />
    <img :src="img" :alt="`Alt is ${alt}`" />

    <!--    <h2 v-for="{ name, email, id } of users" :key="id">-->
    <!--      {{ name }} - {{ email }}-->
    <!--    </h2>-->
    <!--    if new file:-->
    <div v-if="!usersLoading">
      <User class="user" v-for="user of users" :key="user.id" :user="user" />
    </div>
    <h2 v-else>LOADING...</h2>
  </div>
</template>

<script>
import Button from "@/components/Button";
import User from "@/components/User";
export default {
  name: "App",
  components: { User, Button },
  data() {
    return {
      usersLoading: false,
      counter: 0,
      isVisible: true,
      name: "Olha",
      img: "https://memegenerator.net/img/instances/65894975.jpg",
      alt: "meme",
      users: []
    };
  },
  beforeUpdate() {
    console.log("click", this.counter);
  },
  methods: {
    changeName() {
      this.name = Math.floor(Math.random() * 1000);
    },
    click() {
      this.counter++;
    },
    setUsers(users) {
      this.users = users;
    },
    async fetchUsers() {
      this.usersLoading = true;
      const payload = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await payload.json();

      this.usersLoading = false;

      return users;
    }
  },
  async created() {
    const users = await this.fetchUsers();
    this.setUsers(users);
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

.counter {
  display: flex;
  justify-content: center;
  text-align: center;
}
.counter h2 {
  background: #2c3e50;
  color: #fff;
  border: 1px solid currentColor;
  border-radius: 30px;

  padding: 10px 15px;
  margin: 10px;
}
</style>
