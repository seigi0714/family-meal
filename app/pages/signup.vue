<template>
    <client-only>
    <div  class="signup">
        <h1 class="signup__title">アカウント作成</h1>
        <p class="error" v-if="error">{{ error }}</p>
        <div　class="link" @click="googleAuth">
            <img src="~/assets/Logo/googleicon.png" alt="グーグルアイコン" class="link__icon">
            <span class="link__span">googleアカウントを使用</span>
        </div>
    </div>    
    </client-only>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
    data() {
        return {
            error: null,
        }
    },
    mounted: function(){
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                this.$router.push("/users/add")
            }
        })
    },
    methods: {
       googleAuth() {
           return this.$store.dispatch("users/googleAuth")     
       }
    }   
}
</script>
<style lang="scss" scoped>
.signup{
    position: absolute;
    left: 50%;
    top:40%;
    transform:translate(-50%, -50%);
    &__title{
        font-family: sans-serif;
        text-align: center;
        font-weight: normal;
    }
    .link{
        display: block;
        text-decoration: none;
        width: 280px;
        text-align: center;
        padding: 10px 15px;
        border: solid 1px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-color: #E4E7ED;
        cursor: pointer;
        &__icon{
            height: 20px;
            width: 20px;
            display: inline-block;
            vertical-align: baseline;
        }
        &__span{
            display: inline-block;
            text-justify: center;
            vertical-align: top;
        }
    }
}
</style>