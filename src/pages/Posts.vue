<template>
  <h3>POSTS:</h3>
  <h2 v-if="isPostsLoading">Loading..</h2>
  <Post v-for="post of posts" :key="post.id" :post="post" />
</template>

<script>
import Post from "@/components/Post";
export default {
  name: "Posts",
  components: { Post },
  data() {
    return {
      isPostsLoading: false
    };
  },
  async created() {
    this.isPostsLoading = true;
    await this.$store.dispatch("getPosts");
    this.isPostsLoading = false;
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
