<template>
    <el-tree
        ref="tree"
        :data="treeList"
        :props="defaultProps"
        :show-checkbox="checkboxFlag"
        :filter-node-method="filterNode"
        :default-checked-keys="defaultChecked"
        :check-on-click-node="true"
        :highlight-current="true"
        :node-key="nodeKey"
        class="filter-tree"
        @node-click="nodeClick"
        @check-change="checkChange"
    />
</template>
<script>
export default {
    name: 'Tree',
    data() {
        return {};
    },
    props: {
        filterText: {
            type: String,
            default: '',
        },
        treeList: {
            type: Array,
            default: () => [],
        },
        defaultProps: {
            type: Object,
            default: () => ({
                children: 'LIST',
                label: 'NAME',
                type: 'type',
            }),
        },
        checkboxFlag: {
            type: Boolean,
            default: true,
        },
        defaultChecked: {
            type: Array,
            default: () => [],
        },
        nodeKey: {
            type: String,
            default: 'id',
        },
    },
    updated() {
        // 在查看状态时，父节点拿到数据之后，会自动调取省市的接口数据，这样子组件也会获取到企业的树结构数据
        // 此时，父组件绑定的formdata.checked也需要同步获取到对应key的节点树，通过子组件的updated周期函数
        // 获取到数据之后，触发事件，在父组件拿到值
        this.nodeClick();
    },
    methods: {
        filterNode(value, data) {
            if (!value || value.length === 0) return true;
            // 根据名称过滤
            if (typeof (value) === 'string') {
                return data.NAME.indexOf(value) !== -1;
            }
            return true;
        },
        nodeClick() {
            const checked = this.$refs.tree.getCheckedNodes();
            this.$emit('checked', checked);
        },
        checkChange() {
            this.nodeClick();
        },
    },
    watch: {
        filterText(newval) {
            this.$refs.tree.filter(newval);
        },
    },
};
</script>
<style lang="scss" scoped>

</style>
