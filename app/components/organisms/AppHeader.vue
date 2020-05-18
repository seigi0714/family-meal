<template>
  <header class="header">
    <el-button class="header__tittle" type="warning" icon="el-icon-knife-fork">familymeal</el-button>
    <div class="header__menu">
      <a class="user-icon" href="/add"><el-button  type="warning" icon="el-icon-edit-outline" circle></el-button></a>
      <a class="user-icon" href="/"><el-button  type="warning" icon="el-icon-search" circle></el-button></a>
      <a class="user-icon"><img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        alt="posts" class="icon-img"/></a>
    </div>
  </header>
</template>

<script>
import HeaderMenu from "~/components/atoms/HeaderMenu.vue";
export default {
  components: {
    HeaderMenu
  }
};
</script>
<style lang="scss" scoped>
.header {
  border: 1px solid #EBEEF5;
  margin-bottom: 15px;
  text-align: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  top: 0;
  height: 48px;
  &__tittle {
    display: inline-block;
    justify-items: top;
    margin: 10px;
  }
  &__menu {
    display: inline-block;
    height: 100%;
    }
    .user-icon{
          display: inline-block;
          height: 42px;
          width: 42px;
          top: 0;
        .icon-img{
            height: 100%;
            border-radius: 50%;
        }
    }
}
</style>