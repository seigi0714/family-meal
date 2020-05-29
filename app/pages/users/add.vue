<template>
  <main>
    <el-card  class="user-profile" :body-style="{ padding: '0px'}">
      <p class="error" v-if="error">{{ error }}</p>
      <div class="user-profile__header">
        <div class="user-profile__header user-profile__header--title">マイプロフィール</div>
      </div>
      <div class="user-profile__icon">
        <el-avatar :src="iconUrl" class="user-profile__icon user-profile__icon--img"></el-avatar>
        <label for="changeIcon" class="user-profile__icon user-profile__icon--label">
          <i class="el-icon-camera"></i>プロフィール画像の追加
          <input type="file" id="changeIcon" accept=".jpeg, .png" />
        </label>
      </div>
      <el-input placeholder="ニックネーム" v-model="name" class="user-profile__input"></el-input>
      <el-input
        type="textarea"
        class="user-profile__input"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="Please input"
        maxlength="200"
        v-model="text"
        show-word-limit
      ></el-input>
      <div class="user-profile__add">
        <div class="user-profile__add__btn" @click="addUser">登録</div>
      </div>
    </el-card>
  </main>
</template>
<script>
export default {
  data: function() {
    return {
      error: null,
      name: "",
      text: "",
      iconUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    };
  },
  created: function(){
    this.$store.dispatch("users/init")
  },
  methods: {
    async addUser() {
      try {
        await this.$store.dispatch("users/addUser", {
          name: this.name,
          text: this.text
        });
        this.router.push("/");
      } catch (e) {
        this.error = e.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  display: none;
}
main {
  position: absolute;
  height: 100vh;
  width: 100%;
  margin-top: 48px;
  .user-profile {
    width: 350px;
    margin: 0 auto;
    margin-top: 50px;
    top: 50%;
    border: 1px solid #e6a23c;
    @media screen and (max-width: 456px) {
      width: 100vw;
    }
    &__header {
      width: 100%;
      height: 53px;
      background-color: #e6a23c;
      text-align: center;
      padding-left: 15px;
      box-sizing: border-box;
      &--title {
        display: table-cell;
        height: 53px;
        vertical-align: middle;
        text-align: center;
        color: white;
        font-size: 20px;
      }
    }
    &__icon {
      width: 100%;
      margin: 0;
      left: 50%;
      top: 0;
      box-sizing: border-box;
      &--img {
        display: block;
        height: 150px;
        width: 150px;
        margin: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
      }
      &--label {
        display: block;
        height: 30px;
        text-align: center;
        border-bottom: 1px solid #e6a23c;
      }
    }
    &__input {
      width: 93%;
      margin-top: 15px;
      margin: 15px 10px;
      box-sizing: border-box;
    }
    &__add {
      display: block;
      box-sizing: border-box;
      margin: 10px;
      padding: 15px auto;
      &__btn {
        display: table-cell;
        height: 38px;
        width: 68px;
        background-color: #e6a23c;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        text-justify: center;
        border-radius: 4px;
        margin: 15px 50%;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>