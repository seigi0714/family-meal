<template>
  <el-card class="post" :body-style="{ padding: '0px' }">
    <header class="post__header">
      <a class="post__header--icon"><img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        alt="posts" class="icon-img"/></a>
      <a href class="post__header--group">グループ名</a>
    </header>
    <div class="post__image">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        alt="posts"
        class="post__image" />
    </div>
    <section class="post__user-actions" >
       <button class="btn-canvas"><i class="btn el-icon-star-off"></i></button>
       <button class="btn-canvas"><i class="btn el-icon-position"></i></button>
    </section>    
    <div class="post__text-contents">
        <a class="post-title">料理名</a><span>今日のご飯はハンバーガー</span>
    </div>
  </el-card>
</template>
<script>
import ShereButtons from "~/components/atoms/ShereButtons";
export default {
  components: {
    ShereButtons
  }
};
</script>
<style lang="scss" scoped>

.post {
  margin: 30px auto 0 auto;
  padding: 0;
  width: 456px;
  &__header {
    padding: 15px;
    height: 30px;
    &--icon {
      display: inline-block;
      vertical-align: baseline;
      height: 42px;
      width: 42px;
      .icon-img{
          height: 100%;
          border-radius: 50%;
      }
    }
    &--group{
       position: relative;
       text-decoration: none;
       margin-left: 15px;
       text-justify: center;
    }
  }
  &__image {
    width: 100%;
  }
  &__user-actions{
      height: 42px;
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      margin: 5px 0;
      .btn-canvas{
          padding: 1px;
          border: none;
          height: 42px;
          width: 42px;
          background: none;
          cursor: pointer;
        .btn{
            font-size: 35px;
            border: 1px;
        }
      }
  }
  &__text-contents{
      width: 100%;
      box-sizing: border-box;
      padding: 0 15px;
      .post-title{
            margin-right: 15px;
      }
  }
}
</style>
＾