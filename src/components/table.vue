<!--
 * @Date: 2020-02-28
 * @Description: Description
 * @Author: wangsenyang
 -->

<!--公用组件封装，仅做示例-->
<template>
    <div class="table-content">
        <slot name="physicalDeviceMonitor" />
        <div
            v-if="showTitle"
            class="table-title"
        >
            <el-breadcrumb separator="/">
                <el-breadcrumb-item
                    v-for="(item, index) in title"
                    :key="index"
                >
                    {{ item }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="search-content">
            <slot name="search" />
        </div>
        <!-- 物联监控页面的操作行插槽 -->
        <div class="operations-content">
            <slot name="operationRow" />
        </div>
        <div class="table-container">
            <el-table
                ref="refTable"
                v-loading="loading"
                :data="tableData"
                :cell-style="{ 'text-align': 'center' }"
                :header-cell-style="{ 'text-align': 'center' }"
                height="100%"
                @sort-change="sortChange"
                @row-click="openDetail"
                @select-all="selectAllHandle"
                @select="handleSelect"
                @selection-change="handleSelectionChange"
            >
                <el-table-column
                    v-if="showCheckbox"
                    type="selection"
                    width="55"
                />
                <el-table-column
                    prop="date"
                    label="序号"
                    width="100"
                >
                    <template slot-scope="scope">
                        <p>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</p>
                    </template>
                </el-table-column>
                <el-table-column
                    v-for="(item, index) in conf"
                    :key="index"
                    :prop="item.prop"
                    :label="item.label"
                    :sortable="item.isSort?item.isSort:false"
                />
                <slot name="operate" />
                <el-table-column
                    v-if="operate.length !== 0"
                    prop="operation"
                    label="操作"
                    align="center"
                    width="180"
                >
                    <template slot-scope="scope">
                        <el-tooltip
                            v-if="operate.includes(1)"
                            class="item"
                            effect="dark"
                            content="查看"
                            placement="top-start"
                        >
                            <i
                                class="el-icon-notebook-2"
                                @click.stop
                                @click="viewOnClick(scope.row)"
                            />
                        </el-tooltip>
                        <el-tooltip
                            v-if="operate.includes(2)"
                            class="item"
                            effect="dark"
                            content="修改"
                            placement="top-start"
                        >
                            <i
                                class="el-icon-edit"
                                @click.stop
                                @click="updateOnClick(scope.row)"
                            />
                        </el-tooltip>
                        <el-tooltip
                            v-if="operate.includes(3)"
                            class="item"
                            effect="dark"
                            content="删除"
                            placement="top-start"
                        >
                            <i
                                class="el-icon-delete"
                                @click.stop
                                @click="deleteOnClick(scope.row)"
                            />
                        </el-tooltip>
                        <div v-if="operate.includes(4)">
                            <el-button
                                v-for="(item,index) in buttonContent"
                                :key="index"
                                size="small"
                                @click.stop
                                @click="buttonOnClick(scope.row,index)"
                            >
                                {{ item }}
                            </el-button>
                        </div>

                        <el-tooltip
                            v-if="operate.includes(5)"
                            class="item"
                            effect="dark"
                            content="配置"
                            placement="top-start"
                        >
                            <i
                                class="el-icon-s-tools"
                                @click.stop="settingsOnClick(scope.row)"
                            />
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div
            v-if="isShowPagination"
            class="pagination-content"
        >
            <el-pagination
                :current-page="currentPage"
                :page-size="pageSize"
                :total="total"
                :layout="layout"
                :background="true"
                @current-change="currentChange"
            />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Table',
    data() {
        return {};
    },
    props: {
        title: {
            type: Array,
            default: () => [],
        },
        loading: {
            type: Boolean,
            default: false,
        },
        tableData: {
            type: Array,
            default: () => [],
        },
        conf: {
            type: Array,
            default: () => [],
        },
        operate: {
            type: Array,
            default: () => [],
        },
        isShowPagination: {
            type: Boolean,
            default: true,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
        layout: {
            type: String,
            default: 'total, prev, pager, next, jumper',
        },
        showTitle: {
            type: Boolean,
            default: true,
        },
        showCheckbox: {
            type: Boolean,
            default: false,
        },
        buttonContent: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        openDetail(row, event, column) {
            this.$emit('rowClick', { row, event, column });
        },
        handleSelect(select, row) {
            this.$emit('handleSelect', { select, row });
        },
        selectAllHandle(select) {
            this.$emit('selectAllHandle', select);
        },
        handleSelectionChange(val) {
            this.$emit('handleSelectionChange', val);
        },
        currentChange(currentPage) {
            this.$emit('currentChange', currentPage);
        },
        viewOnClick(data) {
            this.$emit('viewOnClick', data);
        },
        updateOnClick(data) {
            this.$emit('updateOnClick', data);
        },
        deleteOnClick(data) {
            this.$emit('deleteOnClick', data);
        },
        // 配置
        settingsOnClick(data) {
            this.$emit('settingsOnClick', data);
        },
        buttonOnClick(data, index) {
            this.$emit('buttonOnClick', { data, index });
        },
        sortChange(column) {
            this.$emit('sortChange', column);
        },
        tableOriginMethod() {
            return this.$refs.refTable;
        },
    },
    mounted() {
    },
};
</script>
<style lang="scss">
    @import "../assets/styles/themes";

    .table-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        .table-title {
            margin: 10px 0;
        }
        .search-content {
            margin: 10px 0;
            .el-input, .el-select {
                display: block;
            }
        }
        .table-container {
            flex: 1;
            overflow-y: auto;
            i {
                font-size: 25px;
                cursor: pointer;
                ~ i {
                    margin-left: 10px;
                }

            }
            .el-table {
                font-size: $font-content;
                tr {
                    height: 53px;
                }
                tr:nth-of-type(even) {
                    background: #f7fafc;
                }
                tr:nth-of-type(odd) {
                    background: #fff;
                }
            }
            .el-table--enable-row-hover .el-table__body tr:hover > td {
                background: #dbefff;
            }
        }
        .pagination-content {
            padding: 10px 0;
            height: 30px;
            display: flex;
            justify-content: flex-end;
        }
    }
</style>
