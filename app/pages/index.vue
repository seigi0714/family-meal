<template>
  <section class="index">
    <el-button type="warning" class="index__groupAdd">グループ作成</el-button>
    <client-only>
      <PostCard />
    </client-only>
  </section>
</template>
<script>
import PostCard from "~/components/organisms/PostCard.vue";
export default {
  components: {
    PostCard
  }
};
</script>
<style lang="scss" scoped>
.index {
  &__groupAdd {
    margin-top: 15px;
    left: 50%;
  }
}
</style>
