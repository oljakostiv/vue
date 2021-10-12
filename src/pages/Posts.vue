<template>
  <h3>POSTS:</h3>
  <div v-if="!isPostsLoading">
    <Post v-for="post of posts" :key="post.id" :post="post" />
  </div>
  <h2 v-else>Loading..</h2>
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
      return this.$store.getters.sortedPosts;
    }
  }
};
</script>

<style scoped>
@import "../assets/index.css";
</style>
