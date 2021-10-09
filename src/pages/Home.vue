<template>
  <h1>Hello everyone from {{ name }}!</h1>
  <button class="btn" @click="changeName">Change name</button>
  <div>
    <input type="radio" name="1" value="one" v-model="radio" />
    <input type="radio" name="1" value="two" v-model="radio" />
    <input type="radio" name="1" value="three" v-model="radio" />
    <br />
    <h3 style="font-style: oblique">
      Value: {{ inpValue }} {{ checkbox }} {{ select }} {{ radio }}
    </h3>
    <input class="inputCreate" type="text" v-model.trim="inpValue" />
    <input type="checkbox" v-model="checkbox" />
    <br />
    <select class="btn" id="select" v-model="select">
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
    </select>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Olha",
      inpValue: "",
      checkbox: false,
      select: null,
      radio: null
    };
  },
  watch: {
    inpValue() {
      console.log("watch", this.inpValue);
    }
  },
  methods: {
    changeName() {
      this.name = Math.floor(Math.random() * 1000);
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
