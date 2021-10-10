<!--not used-->
<template>
  <div>
    <button :class="[text.length > 5 && 'btn', 'green']" @click="onClick">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  emits: ["button-click"],
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("button-click");
    }
  }
};
</script>

<style scoped>
.btn {
  border: 2px solid #2c3e50;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s;
  cursor: pointer;

  padding: 5px 8px;
  margin: 5px;
}

.btn:hover {
  transform: scale(1.03, 1.03);
}

.green {
  background: #42b983;
}
</style>
