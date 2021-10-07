<template>
  <div>
    <h3>{{ buildInfo }}</h3>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    buildInfo() {
      return `${this.user.name} - ${this.user.email}`;
    }
  }
};
</script>

<style scoped></style>
