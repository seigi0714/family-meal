<template>
    <header class="header">
        <el-button class="header-tittle" type="warning" icon="el-icon-knife-fork">familymeal</el-button>
        <HeaderMenu />
    </header>
</template>

<script>
import HeaderMenu from '~/components/atoms/HeaderMenu.vue'
export default {
    components:{
        HeaderMenu
    }
}
</script>