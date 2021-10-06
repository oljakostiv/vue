<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <h1>Hello everyone from {{ name }}!</h1>

    <button class="btnApp" @click="changeName">Change name</button>
    <Button :text="`Awesome`" @button-click="changeName" />
    <br />
    <img :src="img" :alt="`Alt is ${alt}`" />
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "App",
  components: { Button },
  data() {
    return {
      name: "Olha",
      img: "https://memegenerator.net/img/instances/65894975.jpg",
      alt: "meme"
    };
  },
  methods: {
    changeName() {
      this.name = Math.floor(Math.random() * 1000);
    }
  }
};
</script>

<style>
#app {
  background: #e9eaeb;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 60px;
}

.btnApp {
  background: #97781c;
  border: 2px solid #2c3e50;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  transition: 0.2s;
  cursor: pointer;

  padding: 5px 8px;
  margin: 5px;
}

.btnApp:hover {
  transform: scale(1.03, 1.03);
}
</style>
