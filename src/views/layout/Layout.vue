<!--
 *@Description: layout页面布局
 *@author: Wangsenyang
 *@Date: 2020/2/28
-->

<!--仅做示例-->
<template>
    <el-container class="page-module-root">
        <el-header>
            <Header />
        </el-header>
        <el-main style="position: relative;background-color: #fff;overflow-y: hidden">
            <Menu />
        </el-main>
        <el-footer>
            <Footer />
        </el-footer>
    </el-container>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default {
    components: {
        Footer,
        Header,
        Menu,
    },
    name: 'Layout',
    data() {
        return {};
    },
    computed: {},
    methods: {},
    mounted() {
    },
};
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/themes";

    .page-module-root {
        height: 100%;
        .el-divider--horizontal {
            margin: 10px 0;
        }
        .el-header {
            padding: 0;
        }
        .el-main {
            margin: 0 50px;
        }
        .el-footer {
            padding: 0;
            height: 48px !important;
        }
    }
</style>
