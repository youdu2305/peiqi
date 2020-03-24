<template>
    <div class="page_dly">
        <p class="dailyTitle">
            销售日报表
        </p>
        <div
            class="dates"
        >
            <datepicker @getDate="datepick" />
        </div>
        <el-table
            :data="tableData1"
            border
            style="width: 72%"
        >
            <el-table-column
                prop="name"
                label="名称"
            />
            <el-table-column
                prop="Cl"
                label="今日产量"
            />
            <el-table-column
                prop="Xl"
                label="今日销量"
            />
            <el-table-column
                prop="Ht"
                label="今日签订合同数量"
            />
            <el-table-column
                prop="Dj"
                label="今日合同单价"
            />
        </el-table>
        <div class="kc3">
            <div class="tbbox">
                <el-table
                    :data="tableData11"
                    border
                    style="width: 100%"
                >
                    <el-table-column
                        prop="name"
                        label=""
                        style="width: 100px"
                    />
                    <el-table-column
                        prop="jjckc"
                        label="精甲醇库存"
                        style="width: 100px"
                    />
                </el-table>
            </div>
            <div class="tbbox">
                <el-table
                    :data="tableData12"
                    border
                    style="width: 100%"
                >
                    <el-table-column
                        prop="name"
                        label=""
                        style="width: 100px"
                    />
                    <el-table-column
                        prop="fcpkc"
                        label="副产品库存"
                        style="width: 100px"
                    />
                </el-table>
            </div>
            <div class="tbbox">
                <el-table
                    :data="tableData13"
                    border
                    style="width: 100%"
                >
                    <el-table-column
                        prop="name"
                        label=""
                        style="width: 100px"
                    />
                    <el-table-column
                        prop="syhtl"
                        label="剩余合同量"
                        style="width: 100px"
                    />
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import datepicker from '../components/datepicker'

export default {
    name: 'Daily',
    components: {
        datepicker,
    },
    data() {
        return {
            tableData1: [],
            tableData11: [],
            tableData12: [],
            tableData13: [],
            jjcSum: 0,
            tableData11Pre: [
                {
                    name: 'a-罐',
                    jjckc: '',
                },
                {
                    name: 'b-罐',
                    jjckc: '',
                },
                {
                    name: 'c-罐',
                    jjckc: '',
                },
                {
                    name: 'd-罐',
                    jjckc: '',
                },
                {
                    name: 'hj-罐',
                    jjckc: '',
                },
            ],
            tableData13Pre: [
                {
                    name: 'xhzl-现货总量',
                    syhtl: '',
                },
                {
                    name: 'xntj-新能天津',
                    syhtl: '',
                },
                {
                    name: 'ymhg-阳煤化工',
                    syhtl: '',
                },
                {
                    name: 'qt-其他',
                    syhtl: '',
                },
                {
                    name: 'cygdys-长约管道运输',
                    syhtl: '',
                },
                {
                    name: 'gdzrss-管道昨日输送',
                    syhtl: '',
                },
                {
                    name: 'gdsysl-管道剩余数量',
                    syhtl: '',
                },
            ],
            tableData12Pre: [
                {
                    name: 'o2-液氧',
                    fcpkc: '',
                },
                {
                    name: 'n2-液氮',
                    fcpkc: '',
                },
                {
                    name: 'ar-液氩',
                    fcpkc: '',
                },
                {
                    name: 'cjc-粗甲醇3',
                    fcpkc: '',
                },
                {
                    name: 's-硫磺',
                    fcpkc: '',
                },
            ],
            tableDataPre: [
                {
                    name: '精甲醇-jjc',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
                {
                    name: '液氧-o2',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
                {
                    name: '液氮-n2',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
                {
                    name: '液氩-ar',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
                {
                    name: '粗甲醇3-cjc',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
                {
                    name: '硫磺-s',
                    Cl: '',
                    Xl: '',
                    Ht: '',
                    Dj: '',
                },
            ],
        };
    },
    methods: {
        datepick(data) {
            this.dailyDataForm(data)
        },
        // 销售日报表数据设置
        initTbData(datas) {
            this.tableData1 = []
            if (!datas.data) return
            const tempArr = []
            this.tableDataPre.forEach((item, index) => {
                const name1 = item.name.split('-')[0]
                const name2 = item.name.split('-')[1]
                tempArr[index] = {}
                tempArr[index].name = name1
                tempArr[index].Xl = datas.data[`${name2}Xl`]
                tempArr[index].Cl = datas.data[`${name2}Cl`]
                tempArr[index].Ht = datas.data[`${name2}Ht`]
            })
            this.tableData1.push(...tempArr)
        },
        // 精甲醇库存数据设置
        initT11bData(datas) {
            this.tableData11 = []
            this.jjcSum = 0
            if (!datas.data) return
            const tempArr = []
            this.tableData11Pre.forEach((item, i) => {
                const name11 = item.name
                tempArr[i] = {}
                tempArr[i].name = name11.indexOf('h') > -1 ? '合计' : `${name11.split('-')[0].toUpperCase()} 罐`
                if (name11.indexOf('h') < 0) {
                    tempArr[i].jjckc = datas.data[`${name11.split('-')[0]}`]
                    this.jjcSum += Number(datas.data[`${name11.split('-')[0]}`])
                }
                if (item.name.indexOf('hj') > -1) {
                    tempArr[i].jjckc = this.jjcSum
                }
            })
            this.tableData11.push(...tempArr)
        },
        // 副产品库存数据设置
        initTb12Data(datas) {
            this.tableData12 = []
            if (!datas.data) return
            const tempArr = []
            this.tableData12Pre.forEach((item, i) => {
                const name11 = item.name
                tempArr[i] = {}
                tempArr[i].name = `${name11.split('-')[1]}`
                tempArr[i].fcpkc = datas.data[`${name11.split('-')[0]}Kc`] || datas.data[`${name11.split('-')[0]}kc`]
            })
            this.tableData12.push(...tempArr)
        },
        // 剩余合同量数据设置
        initTb13Data(datas) {
            this.tableData13 = []
            if (!datas.data) return
            const tempArr = []
            this.tableData13Pre.forEach((item, i) => {
                const name11 = item.name
                tempArr[i] = {}
                tempArr[i].name = `${name11.split('-')[1]}`
                tempArr[i].syhtl = datas.data[`${name11.split('-')[0]}`]
            })
            this.tableData13.push(...tempArr)
        },
        dailyDataForm(date) {
            this.$api.selectSalesDaily({ auth: '', date }).then((res) => {
                this.getDailyData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        },
        getDailyData(datas) {
            this.initTbData(datas)
            this.initT11bData(datas)
            // 副产品库存数据设置
            this.initTb12Data(datas)
            // 剩余合同量数据设置
            this.initTb13Data(datas)
        },
    },
    created() {
        const date = this.$dateform(new Date().toLocaleDateString('cn', { hour12: false }))
        this.dailyDataForm(date)
    },
};
</script>
<style lang="scss" scoped>
    .page_dly{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        padding: 60px;
        box-sizing: border-box;
    }
    .dailyTitle{
        height:40px;
        text-align: center;
        line-height: 40px;
        margin-bottom: 20px;
    }
    .el-table td, .el-table th {
        padding: 4px 0 !important;
    }
    .kc3 {
        display: flex;
        padding: 20px;
        width: 72%;
    }
    .bor{
        border-bottom: 1px solid #EBEEF5;
    }
    .tbbox {
        width: 33.2%;
        margin-right: -1px;
    }
    .dates {
        width: 140px;
        position: absolute;
        right: 17.5%;
    }
    .page_dly /deep/ .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date {
        width: 140px !important;
    }

    .page_dly /deep/ .el-icon-date:before,.page_dly /deep/ .el-input__icon {
        color: #666 !important;
    }

    .page_dly /deep/ .el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date input.el-input__inner {
        border-color: transparent !important;
        outline: none !important;
        color:#606266 !important;
        opacity:1 !important;
    }

    .page_dly /deep/  input span.el-input__prefix {
        top: -7px !important;
        left: 0 !important;
    }
</style>
