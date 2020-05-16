<template>
    <div　class="login-form" >
        <nuxt-link to="/" style="text-decoration: none;">
         <el-button class="login-form__title" type="warning" icon="el-icon-knife-fork">familymeal</el-button>
        </nuxt-link>
        <a href="/" class="login-form__google">
        <img class="login-form__google login-form__google--btn" src="~/assets/Logo/google.png" alt="グーグルログイン">
        </a>
        <a href="/signup" class="login-form__new-account">新規登録はこちら</a>
    </div>
</template>
<style lang="scss" scoped>
nuxt-link{
    text-decoration: none;
}
.login-form{
    position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
    padding: 15px;

    &__title{
        display: block;
        height: 50px;
        width: 100%;
        left: 50%;
        font-size: 30px;
        margin-bottom: 15px;
    }
    &__span{
        text-align: center;
        display: block;
        margin-top: 30px;
        font-size: 34px;
    }
    &__google{
        margin: 30px auto;
        display: block;
        &--btn{
            height: 100%;
            width: 100%;
        }
    }
    &__new-account{
        font-size: 14px;
    }
}
</style>