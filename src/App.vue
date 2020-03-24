
<!--主题功能根据实际需求增删，仅做示例 样式参数需要变量化（theme.scss），预留之后可能会有换肤功能-->


<template>
    <div
        id="app"
        :data-theme="currentThemeInfo"
        class="flex-center"
    >
        <div style="width:100%;height: 100%;">
            <p class="navStrip">
                <router-link
                    to="/daily"
                    tag="div"
                >
                    销售日报表
                </router-link>
                <router-link
                    to="/morningpost"
                    tag="div"
                >
                    生产早报
                </router-link>
            </p>
            <router-view />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import axios from 'axios';
// import daily from './views/Daily_sales_report'
// import mpost from './views/Morning_post'
// import logindata from './api/modules/login'
// import createAPI from './api/axios'


export default {
    name: 'App',
    computed: {
        ...mapGetters('theme', {
            currentThemeInfo: 'getThemeInfo',
        }),
    },
};
</script>
<style lang="scss">
#app {
    width: 100%;
    height: 100%;
    .active{
        background:#409EFF;
        color: #fff;
        border-color: #409EFF;
    }
    p.navStrip {
    position: absolute;
    display: flex;
    width: 25%;
    justify-content: space-between;
    left: 60px;
    top: 20px;
}

p.navStrip div {
    width: 100px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 0 20px;
    font-size: 14px;
    border: 1px solid #ddd;
    color: #ccc;
    cursor: pointer;
    &.active{
        background:#409EFF;
        color: #fff;
        border-color: #409EFF;
    }
}
}
/* 解决element-ui的table表格控件表头与内容列不对齐问题 */
.el-table th.gutter{
    display: table-cell!important;
}
</style>
