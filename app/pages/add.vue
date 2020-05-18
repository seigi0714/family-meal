<template>
<main> 
    <el-card class="add-form" :body-style="{ padding:'0px' }">
        <file-uploader />
        <el-input class="add-form__title" placeholder="料理名" v-model="title"></el-input>
        <el-input
            class="add-form__text"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 20}"
            placeholder="キャプションを入力"
            v-model="text">
        </el-input>
    </el-card>
    <el-button class="shere" type="warning" icon="el-icon-plus" @click="add" circle></el-button>
</main>
</template>
<script>
import FileUploader from '~/components/atoms/FileUploader.vue'
export default {
    data() {
        return {
            title: '',
            text: ''
        }
    },
    components: {
        FileUploader
    }
}
</script>
<style lang="scss" scoped>
main{
    height: 100vh;
    width: 100%;
    margin-top: 48px;
    position: absolute;
    .shere{
        position: fixed;
        display: block;
        right: 20px;
        bottom: 20px;
        padding: 30px;
        font-size: 20px;
    }
    .add-form{
        position: relative;
        max-width:456px;
        margin: 0 auto;
        margin-top: 15px;
    }
}
</style>