<template>
  <div>
    <!--    <h3 class="info">{{ buildInfo }}</h3>-->
    <!--    or:-->
    <h4>Title: {{ post.title }}</h4>
    <p style="font-style: oblique">Body: {{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    buildInfo() {
      return `Title:${this.post.title}. Body: ${this.post.body}`;
    }
  }
};
</script>

<style scoped>
.info {
  font-weight: inherit;
}
</style>
