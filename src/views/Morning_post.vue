/* eslint-disable no-unused-vars */
<template>
    <div class="page_dly">
        <h2 class="bor flexR">
            新能凤凰（滕州）能源有限公司
        </h2>
        <h2 class="bor bor2 flexR">
            生 产 早 报
        </h2>
        <div class="thd_h bor flx">
            <div class="tDate">
                <datepicker @getDate="datepick" />
            </div>
            <div class="week">
                {{ week }}
            </div>
        </div>
        <h4 class="phead flx">
            一、 月度生产计划：
        </h4>
        <el-table
            :data="monthPplan"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="cntent"
                label="内容"
                width="100px"
            />
            <el-table-column
                prop="a"
                label="精甲醇(t)"
            />
            <el-table-column
                prop="b"
                label="液氧 (t)"
            />
            <el-table-column
                prop="c"
                label="液氮 (t)"
            />
            <el-table-column
                prop="d"
                label="液氩 (t)"
            />
            <el-table-column
                prop="e"
                label="发电 (kwh)"
            />
            <el-table-column
                prop="a9101"
                label="备注"
            />
        </el-table>
        <h4 class="phead flx">
            二、 生产负荷：
        </h4>
        <div class="load flx">
            <div
                style="width: 50%"
                class="uls"
            >
                <div class="rol">
                    <div style="width=33.3%">
                        内容
                    </div>
                    <div style="width=33.3%">
                        一期负荷
                    </div>
                    <div style="width=33.3%">
                        二期负荷
                    </div>
                </div>
                <div class="rol">
                    <div style="width=33.3%">
                        气化
                    </div>
                    <div style="width=33.3%">
                        {{ F }}
                    </div>
                    <div style="width=33.3%">
                        {{ G }}
                    </div>
                </div>
                <div class="rol last">
                    <div style="width=33.3%">
                        合成
                    </div>
                    <div style="width=33.3%">
                        {{ H }}
                    </div>
                    <div style="width=33.3%">
                        {{ I }}
                    </div>
                </div>
            </div>
            <div
                class="descRun"
            >
                <p class="load_p1">
                    生产运行情况
                </p>
                <p class="load_p2">
                    {{ b9101 }}
                </p>
            </div>
        </div>
        <h4 class="phead flx">
            三、 关键设备运行情况：
        </h4>
        <el-table
            :data="keyDevice"
            :span-method="noteRow"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="id"
                label="序号/内容"
                width="120"
            />
            <el-table-column
                prop="gl"
                label="锅炉"
            />
            <el-table-column
                prop="shyjz"
                label="三合一机组"
            />
            <el-table-column
                prop="qhl"
                label="气化炉"
            />
            <el-table-column
                prop="pjcb"
                label="贫甲醇泵"
            />
            <el-table-column
                prop="syj"
                label="闪压机"
            />
            <el-table-column
                prop="bj"
                label="冰机"
            />
            <el-table-column
                prop="hcxhb"
                label="合成循环泵"
            />
            <el-table-column
                prop="mmj"
                label="磨煤机"
            />
            <el-table-column
                prop="bz"
                label="备注"
            />
        </el-table>
        <h4 class="phead flx">
            四、 产量及消耗：
        </h4>
        <el-table
            :data="proAndCons"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
            />
            <el-table-column
                prop="qishu"
                label=""
            />
            <el-table-column
                prop="class1"
                label="一班"
            />
            <el-table-column
                prop="class2"
                label="二班"
            />
            <el-table-column
                prop="class3"
                label="三班"
            />
            <el-table-column
                prop="class4"
                label="四班"
            />
            <el-table-column
                label="合计"
            >
                <el-table-column
                    prop="cjc_hj"
                    label=""
                />
                <el-table-column
                    prop="zryl"
                    label=""
                />
                <el-table-column
                    prop="zrnl"
                    label=""
                />
                <el-table-column
                    prop="jryl"
                    label=""
                />
                <el-table-column
                    prop="jrnl"
                    label=""
                />
            </el-table-column>
        </el-table>
        <!------ 精甲醇------>
        <el-table
            :show-header="false"
            :data="proAndCons2"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
            />
            <el-table-column
                prop="qishu"
                label=""
            />
            <el-table-column
                prop="class1"
                label="一班"
            />
            <el-table-column
                prop="class2"
                label="二班"
            />
            <el-table-column
                prop="class3"
                label="三班"
            />
            <el-table-column
                prop="class4"
                label="四班"
            />
            <el-table-column
                label="合计"
            >
                <el-table-column
                    prop="jjc_hj"
                    label=""
                />
                <el-table-column
                    prop="zryl"
                    label=""
                />
                <el-table-column
                    prop="zrnl"
                    label=""
                />
                <el-table-column
                    prop="jryl"
                    label=""
                />
                <el-table-column
                    prop="jrnl"
                    label=""
                />
            </el-table-column>
        </el-table>
        <!---------- MTO --->
        <el-table
            :show-header="false"
            :data="proAndCons3"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
            />
            <el-table-column
                prop="qishu"
                label=""
            />
            <el-table-column
                prop="class1"
                label="一班"
            />
            <el-table-column
                prop="class2"
                label="二班"
            />
            <el-table-column
                prop="class3"
                label="三班"
            />
            <el-table-column
                prop="class4"
                label="四班"
            />
            <el-table-column
                label="合计"
            >
                <el-table-column
                    prop="mtojc_hj"
                    label=""
                />
                <el-table-column
                    prop="zryl"
                    label=""
                />
                <el-table-column
                    prop="zrnl"
                    label=""
                />
                <el-table-column
                    prop="jryl"
                    label=""
                />
                <el-table-column
                    prop="jrnl"
                    label=""
                />
            </el-table-column>
        </el-table>
        <!------产量  ----->
        <el-table
            :show-header="false"
            :data="product"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
            />
            <el-table-column
                prop="qishu"
                label=""
            />
            <el-table-column
                prop="class1"
                label="一班"
            />
            <el-table-column
                prop="class2"
                label="二班"
            />
            <el-table-column
                prop="class3"
                label="三班"
            />
            <el-table-column
                prop="class4"
                label="四班"
            />
            <el-table-column
                label="合计"
            >
                <el-table-column
                    prop="mtojc_hj"
                    label=""
                />
                <el-table-column
                    prop="zryl"
                    label=""
                />
                <el-table-column
                    prop="zrnl"
                    label=""
                />
                <el-table-column
                    prop="jryl"
                    label=""
                />
                <el-table-column
                    prop="jrnl"
                    label=""
                />
            </el-table-column>
        </el-table>
        <!------ consumption--->
        <el-table
            :show-header="false"
            :data="consumption"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
            />
            <el-table-column
                prop="qishu"
                label=""
            />
            <el-table-column
                prop="class1"
                label="一班"
            />
            <el-table-column
                prop="class2"
                label="二班"
            />
            <el-table-column
                prop="class3"
                label="三班"
            />
            <el-table-column
                prop="class4"
                label="四班"
            />
            <el-table-column
                label="合计"
            >
                <el-table-column
                    prop="mtojc_hj"
                    label=""
                />
                <el-table-column
                    prop="zryl"
                    label=""
                />
                <el-table-column
                    prop="zrnl"
                    label=""
                />
                <el-table-column
                    prop="jryl"
                    label=""
                />
                <el-table-column
                    prop="jrnl"
                    label=""
                />
            </el-table-column>
        </el-table>
        <!---- 五、产品库存及销售：--->
        <h4 class="phead flx">
            五、产品库存及销售：
        </h4>
        <el-table
            :data="proSale"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="pro"
                label="产品"
            />
            <el-table-column
                prop="cc_sale"
                label="粗醇"
            />
            <el-table-column
                prop="jc_sale"
                label="精醇"
            />
            <el-table-column
                prop="mto_sale"
                label="MTO级甲醇"
            />
            <el-table-column
                prop="o2_sale"
                label="液氧"
            />
            <el-table-column
                prop="n2_sale"
                label="液氮"
            />
            <el-table-column
                prop="ar_sale"
                label="液氩"
            />
            <el-table-column
                prop="note_sale"
                label="备注"
            />
        </el-table>
        <!----当日进煤--->
        <el-table
            :data="incoal"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label="名称"
            />
            <el-table-column
                prop=""
                label="筒仓储煤"
            >
                <el-table-column
                    label="动力煤"
                >
                    <el-table-column
                        prop="stor1"
                        label="1#仓"
                    />
                    <el-table-column
                        prop="stor2"
                        label="2#仓"
                    />
                </el-table-column>
                <el-table-column
                    label="原料煤"
                >
                    <el-table-column
                        prop="stor3"
                        label="3#仓"
                    />
                    <el-table-column
                        prop="stor4"
                        label="4#仓"
                    />
                </el-table-column>
            </el-table-column>
            <el-table-column
                prop=""
                label="日单耗"
            >
                <el-table-column
                    prop="orign"
                    label="原料煤"
                />
                <el-table-column
                    prop="power"
                    label="动力煤"
                />
                <el-table-column
                    prop="water"
                    label="水"
                />
                <el-table-column
                    prop="elec"
                    label="电"
                />
            </el-table-column>
            <el-table-column
                prop="coal_note"
                label="备注"
            />
        </el-table>
        <!------附表----->
        <h4 class="phead flx">
            六、附表：
        </h4>
        <el-table
            :data="schedule"
            :span-method="setTb4"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="zs"
                label="高压煤浆泵转速"
            />
            <el-table-column
                prop="cccl"
                label="粗醇产量 (t)"
            />
            <el-table-column
                prop="jccl"
                label="精醇产量 (t)"
            />
            <el-table-column
                prop="fdl"
                label="发电量 (kwh)"
            />
            <el-table-column
                prop="ndpjz"
                label="煤浆浓度平均值 (%)"
            />
            <el-table-column
                prop="hf"
                label="灰分 (%)"
            />
            <el-table-column
                prop="ylmrz"
                label="原料煤热值 (cal/g)"
            />
            <el-table-column
                prop="mjhrd"
                label="煤浆灰熔点 (℃)"
            />
            <el-table-column
                prop="jccl"
                label="有效气 (%)"
            />
            <el-table-column
                prop="bz"
                label="备注"
            />
        </el-table>
        <el-table
            :show-header="false"
            :data="outAnalysis"
            :span-method="setClom"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="name"
                label=""
                style="width: 122px"
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
            <el-table-column
                prop="vals"
                label=""
            />
        </el-table>
    </div>
</template>

<script>
import datepicker from '../components/datepicker'

export default {
    name: 'MorningPost',
    components: {
        datepicker,
    },
    data() {
        return {
            w: '日一二三四五六',
            F: '',
            G: '',
            H: '',
            I: '',
            week: '',
            outAnalysis: [],
            outAnalysisPre: [
                {
                    name: '产量分析',
                    vals: 'g9101',
                },
                {
                    name: '备注',
                    vals: 'h9101',
                },
            ],
            // 附表
            schedulePre: [
                {
                    zs: 'g99',
                    cccl: 'd17',
                    jccl: 'e17',
                    fdl: 'f17',
                    ndpjz: 'a910',
                    hf: 'b910',
                    ylmrl: 'c910',
                    mjhrd: 'd910',
                    yxq: 'e910',
                    bz: 'f910',
                },
            ],
            schedule: [],
            incoal: [],
            incoalPre: [
                {
                    name: '',
                    stor1: 'a98',
                    stor2: 'b98',
                    stor3: 'c98',
                    stor4: 'd98',
                    orign: 'j16',
                    power: 'a17',
                    water: 'b17',
                    elec: 'c17',
                    note_sale: '',
                },
                {
                    name: '当日进煤',
                    stor1: 'i98',
                    stor2: 'j98',
                    stor3: 'a99',
                    stor4: 'b99',
                    orign: 'c99',
                    power: 'd99',
                    water: 'e99',
                    elec: 'f99',
                    note_sale: '',
                },
            ],
            proSale: [],
            proSalePre: [
                {
                    pro: '库存 (t)',
                    cc_sale: 'i96',
                    jc_sale: 'j96',
                    mto_sale: 'a97',
                    o2_sale: 'b97',
                    n2_sale: 'c97',
                    ar_sale: 'd97',
                    note_sale: 'd9101',
                },
                {
                    pro: '销售 (t)',
                    cc_sale: 'e97',
                    jc_sale: 'f97',
                    mto_sale: 'g97',
                    o2_sale: 'h97',
                    n2_sale: 'i97',
                    ar_sale: 'j97',
                    note_sale: 'd9101',
                },
            ],
            monthPplan: [],
            b9101: '',
            proLoad: [],
            proAndCons: [],
            proAndCons2: [],
            proAndCons3: [],
            proAndCons4: [
                {
                    name: '',
                    qishu: '',
                    class1: '',
                    class2: '',
                    class3: '',
                    class4: '',
                    mtojc_hj: '合计',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
            ],
            consumption: [],
            product: [],
            keyDevice: [],
            proLoadPre: [
                {
                    cntent: '气化',
                    load1: 'f',
                    load2: 'g',
                },
                {
                    cntent: '合成',
                    load1: 'h',
                    load2: 'i',
                },
            ],
            monthPplanPre: [
                {
                    cntent: '计划产量',
                    a: '',
                    b: '',
                    c: '',
                    d: '',
                    e: '',
                    a9101: '',
                },
            ],
            keyDevicePre: [
                {
                    id: 1,
                    gl: 'a1',
                    shyjz: 'b1',
                    qhl: 'c1',
                    pjcb: 'd1',
                    syj: 'e1',
                    bj: 'f1',
                    hcxhb: 'g1',
                    mmj: 'h1',
                    bz: 'c9101',
                },
                {
                    id: 2,
                    gl: 'i1',
                    shyjz: 'j1',
                    qhl: 'a2',
                    pjcb: 'b2',
                    syj: 'c2',
                    bj: 'd2',
                    hcxhb: 'e2',
                    mmj: 'f2',
                    bz: 'c9101',
                },
                {
                    id: 3,
                    gl: 'g2',
                    shyjz: 'h2',
                    qhl: 'i2',
                    pjcb: 'j2',
                    syj: 'a3',
                    bj: 'b3',
                    hcxhb: 'c3',
                    mmj: 'd3',
                    bz: 'c9101',
                },
                {
                    id: 4,
                    gl: 'e3',
                    shyjz: 'f3',
                    qhl: 'g3',
                    pjcb: 'h3',
                    syj: 'i3',
                    bj: 'j3',
                    hcxhb: 'a4',
                    mmj: 'b4',
                    bz: 'c9101',
                },
            ],
            proAndConsPre: [
                {
                    name: '粗甲醇 (t)',
                    qishu: '一期',
                    class1: 'e4',
                    class2: 'f4',
                    class3: 'g4',
                    class4: 'h4',
                    cjc_hj: '粗甲醇 (t)',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
                {
                    name: '粗甲醇 (t)',
                    qishu: '二期',
                    class1: 'i4',
                    class2: 'j4',
                    class3: 'a5',
                    class4: 'b5',
                    cjc_hj: '粗甲醇 (t)',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
                {
                    name: '粗甲醇 (t)',
                    qishu: '合计',
                    class1: 'a10',
                    class2: 'b10',
                    class3: 'c10',
                    class4: 'd10',
                    cjc_hj: 'e10',
                    zryl: 'c5',
                    zrnl: 'd5',
                    jryl: 'f10',
                    jrnl: 'g10',
                },
            ],
            proAndCons2Pre: [
                {
                    name: '精甲醇 (t)',
                    qishu: '一期',
                    class1: 'e5',
                    class2: 'f5',
                    class3: 'g5',
                    class4: 'h5',
                    jjc_hj: '精甲醇 (t)',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
                {
                    name: '精甲醇 (t)',
                    qishu: '二期',
                    class1: 'i5',
                    class2: 'j5',
                    class3: 'a6',
                    class4: 'b6',
                    jjc_hj: '精甲醇 (t)',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
                {
                    name: '精甲醇 (t)',
                    qishu: '合计',
                    class1: 'h10',
                    class2: 'i10',
                    class3: 'j10',
                    class4: 'a11',
                    jjc_hj: 'b11',
                    zryl: 'c6',
                    zrnl: 'd6',
                    jryl: 'c11',
                    jrnl: 'd11',
                },
            ],
            proAndCons3Pre: [
                {
                    name: 'MTO级甲醇 (t)',
                    qishu: '一期',
                    class1: 'e6',
                    class2: 'f6',
                    class3: 'g6',
                    class4: 'h6',
                    mtojc_hj: 'MTO级甲醇 (t)',
                    zryl: '昨日月累',
                    zrnl: '昨日年累',
                    jryl: '今日月累',
                    jrnl: '今日年累',
                },
                {
                    name: 'MTO级甲醇 (t)',
                    qishu: '二期',
                    class1: 'i6',
                    class2: 'j6',
                    class3: 'a6',
                    class4: 'b7',
                    mtojc_hj: '',
                    zryl: '',
                    zrnl: '',
                    jryl: '',
                    jrnl: '',
                },
                {
                    name: 'MTO级甲醇 (t)',
                    qishu: '合计',
                    class1: 'e11',
                    class2: 'f11',
                    class3: 'g11',
                    class4: 'h11',
                    mtojc_hj: 'i11',
                    zryl: 'c7',
                    zrnl: 'd7',
                    jryl: 'j11',
                    jrnl: 'a12',
                },
                {
                    name: 'MTO级甲醇 (t)',
                    qishu: '折精醇',
                    class1: 'e7',
                    class2: 'f7',
                    class3: 'g7',
                    class4: 'h7',
                    mtojc_hj: 'g17',
                    zryl: 'i7',
                    zrnl: 'j7',
                    jryl: 'h17',
                    jrnl: 'i17',
                },
                {
                    name: '精醇合计',
                    qishu: '',
                    class1: 'b12',
                    class2: 'c12',
                    class3: 'd12',
                    class4: 'e12',
                    mtojc_hj: 'f12',
                    zryl: 'g12',
                    zrnl: 'h12',
                    jryl: 'i12',
                    jrnl: 'j12',
                },
            ],
            productPre: [
                {
                    name: '产量',
                    qishu: '液氧 (t)',
                    class1: 'a8',
                    class2: 'd9',
                    class3: 'g91',
                    class4: 'j92',
                    hj: 'a13',
                    zryl: 'c94',
                    zrnl: 'f95',
                    jryl: 'd14',
                    jrnl: 'g15',
                },
                {
                    name: '产量',
                    qishu: '液氮 (t)',
                    class1: 'b8',
                    class2: 'e9',
                    class3: 'h91',
                    class4: 'a93',
                    hj: 'b13',
                    zryl: 'd94',
                    zrnl: 'g95',
                    jryl: 'e14',
                    jrnl: 'h15',
                },
                {
                    name: '产量',
                    qishu: '液氩 (t)',
                    class1: 'c8',
                    class2: 'f9',
                    class3: 'i91',
                    class4: 'b93',
                    hj: 'c13',
                    zryl: 'e94',
                    zrnl: 'h95',
                    jryl: 'f14',
                    jrnl: 'i15',
                },
                {
                    name: '产量',
                    qishu: '硫磺',
                    class1: 'd8',
                    class2: 'g9',
                    class3: 'j91',
                    class4: 'c93',
                    hj: 'd13',
                    zryl: 'f94',
                    zrnl: 'i95',
                    jryl: 'g14',
                    jrnl: 'j15',
                },
                {
                    name: '产量',
                    qishu: '发电 (kwh)',
                    class1: 'e8',
                    class2: 'h9',
                    class3: 'a92',
                    class4: 'd93',
                    hj: 'e13',
                    zryl: 'g94',
                    zrnl: 'j95',
                    jryl: 'h14',
                    jrnl: 'a16',
                },
                {
                    name: '产量',
                    qishu: '蒸汽 (t)',
                    class1: 'f8',
                    class2: 'i9',
                    class3: 'b92',
                    class4: 'e93',
                    hj: 'f13',
                    zryl: 'h94',
                    zrnl: 'a96',
                    jryl: 'i14',
                    jrnl: 'b16',
                },
            ],
            consumptionPre: [
                {
                    name: '消耗 ',
                    qishu: '原料煤 (t)',
                    class1: 'g8',
                    class2: 'j9',
                    class3: 'c92',
                    class4: 'f93',
                    hj: 'g13',
                    zryl: 'i94',
                    zrnl: 'b96',
                    jryl: 'j14',
                    jrnl: 'c16',
                },
                {
                    name: '消耗 ',
                    qishu: '动力煤 (t)',
                    class1: 'h8',
                    class2: 'a91',
                    class3: 'd92',
                    class4: 'g93',
                    hj: 'h13',
                    zryl: 'j94',
                    zrnl: 'c96',
                    jryl: 'a15',
                    jrnl: 'd16',
                },
                {
                    name: '消耗 ',
                    qishu: '电 (kwh)',
                    class1: 'i8',
                    class2: 'b91',
                    class3: 'e92',
                    class4: 'h93',
                    hj: 'i13',
                    zryl: 'a95',
                    zrnl: 'd96',
                    jryl: 'b15',
                    jrnl: 'e16',
                },
                {
                    name: '消耗 ',
                    qishu: '脱水盐 (t)',
                    class1: 'j8',
                    class2: 'c91',
                    class3: 'f92',
                    class4: 'i93',
                    hj: 'j13',
                    zryl: 'b95',
                    zrnl: 'e96',
                    jryl: 'c15',
                    jrnl: 'f16',
                },
                {
                    name: '消耗 ',
                    qishu: '羊庄水 (t)',
                    class1: 'a9',
                    class2: 'd91',
                    class3: 'g92',
                    class4: 'j93',
                    hj: 'a14',
                    zryl: 'c95',
                    zrnl: 'f96',
                    jryl: 'd15',
                    jrnl: 'g16',
                },
                {
                    name: '消耗 ',
                    qishu: '岩马水 (t)',
                    class1: 'b9',
                    class2: 'e91',
                    class3: 'h92',
                    class4: 'a94',
                    hj: 'b14',
                    zryl: 'd95',
                    zrnl: 'g96',
                    jryl: 'e15',
                    jrnl: 'h16',
                },
                {
                    name: '消耗 ',
                    qishu: '南水北调 (t)',
                    class1: 'c9',
                    class2: 'f91',
                    class3: 'i92',
                    class4: 'b94',
                    hj: 'c14',
                    zryl: 'e95',
                    zrnl: 'h96',
                    jryl: 'f15',
                    jrnl: 'i16',
                },
            ],
        }
    },
    methods: {
        datepick(data) {
            this.morningPostData(data)
        },
        // eslint-disable-next-line consistent-return
        setClom({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 1) {
                return {
                    rowspan: 1,
                    colspan: 9,
                }
            }
            console.log(row, column, rowIndex)
        },
        // 附表
        initSchedule(datas) {
            this.schedule = []
            if (!datas.data) return
            const tempArr = []
            this.schedulePre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].zs = datas.data[item.zs]
                tempArr[i].cccl = datas.data[item.cccl]
                tempArr[i].jccl = datas.data[item.jccl]
                tempArr[i].fdl = datas.data[item.fdl]
                tempArr[i].ndpjz = datas.data[item.ndpjz]
                tempArr[i].hf = datas.data[item.hf]
                tempArr[i].ylmrz = datas.data[item.ylmrz]
                tempArr[i].mjhrd = datas.data[item.mjhrd]
                tempArr[i].yxq = datas.data[item.yxq]
                tempArr[i].bz = datas.data[item.bz]
            })
            this.schedule.push(...tempArr)
        },
        // 产量分析
        initoutAnalysis(datas) {
            this.outAnalysis = []
            if (!datas.data) return
            const tempArr = []
            this.outAnalysisPre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].vals = datas.data[item.vals]
            })
            this.outAnalysis.push(...tempArr)
        },
        // 当日进煤
        initIncoal(datas) {
            this.incoal = []
            if (!datas.data) return
            const tempArr = []
            this.incoalPre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].stor1 = datas.data[item.stor1]
                tempArr[i].stor2 = datas.data[item.stor2]
                tempArr[i].stor3 = datas.data[item.stor3]
                tempArr[i].stor4 = datas.data[item.stor4]
                tempArr[i].orign = datas.data[item.orign]
                tempArr[i].power = datas.data[item.power]
                tempArr[i].water = datas.data[item.water]
                tempArr[i].elec = datas.data[item.elec]
                tempArr[i].note_sale = datas.data[item.note_sale]
            })
            this.incoal.push(...tempArr)
        },
        // 库存及销售
        initSale(datas) {
            this.proSale = []
            if (!datas.data) return
            const tempArr = []
            this.proSalePre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].pro = item.pro
                tempArr[i].cc_sale = datas.data[item.cc_sale]
                tempArr[i].jc_sale = datas.data[item.jc_sale]
                tempArr[i].mto_sale = datas.data[item.mto_sale]
                tempArr[i].o2_sale = datas.data[item.o2_sale]
                tempArr[i].n2_sale = datas.data[item.n2_sale]
                tempArr[i].ar_sale = datas.data[item.ar_sale]
                tempArr[i].note_sale = datas.data[item.note_sale]
            })
            this.proSale.push(...tempArr)
        },
        // 月度生产计划数据设置
        monthProlan(datas) {
            this.monthPplan = []
            if (!datas.data) return
            const tempArr = []
            this.monthPplanPre.forEach((item, index) => {
                tempArr[index] = {}
                tempArr[index].cntent = item.cntent
                tempArr[index].a = datas.data.a
                tempArr[index].b = datas.data.b
                tempArr[index].c = datas.data.c
                tempArr[index].d = datas.data.d
                tempArr[index].e = datas.data.e
                tempArr[index].f = datas.data.f
                tempArr[index].a9101 = datas.data.a9101
            })
            this.monthPplan.push(...tempArr)
        },
        // 生产负荷数据设置
        proLoads(datas) {
            this.proLoad = []
            if (!datas.data) return
            const tempArr = []
            this.b9101 = datas.data.b9101
            this.proLoadPre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].cntent = item.cntent
                tempArr[i].load1 = datas.data[`${item.load1}`]
                tempArr[i].load2 = datas.data[`${item.load2}`]
            })
            this.proLoad.push(...tempArr)
            this.F = this.proLoad[0].load1
            this.G = this.proLoad[0].load2
            this.H = this.proLoad[1].load1
            this.I = this.proLoad[1].load2
        },
        // 关键设备运行数据设置
        initKeyDevice(datas) {
            this.keyDevice = []
            if (!datas.data) return
            const tempArr = []
            this.keyDevicePre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].id = item.id
                tempArr[i].gl = datas.data[item.gl]
                tempArr[i].shyjz = datas.data[item.shyjz]
                tempArr[i].qhl = datas.data[item.qhl]
                tempArr[i].pjcb = datas.data[item.pjcb]
                tempArr[i].syj = datas.data[item.syj]
                tempArr[i].bj = datas.data[item.bj]
                tempArr[i].hcxhb = datas.data[item.hcxhb]
                tempArr[i].mmj = datas.data[item.mmj]
                tempArr[i].bz = datas.data[item.bz]
            })
            this.keyDevice.push(...tempArr)
        },
        // 产量及消耗P
        initProAndCons(datas) {
            this.proAndCons = []
            if (!datas.data) return
            const tempArr = []
            this.proAndConsPre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].qishu = item.qishu
                tempArr[i].class1 = datas.data[item.class1]
                tempArr[i].class2 = datas.data[item.class2]
                tempArr[i].class3 = datas.data[item.class3]
                tempArr[i].class4 = datas.data[item.class4]
                tempArr[i].cjc_hj = datas.data[item.cjc_hj] || item.cjc_hj
                tempArr[i].zryl = datas.data[item.zryl] || item.zryl
                tempArr[i].zrnl = datas.data[item.zrnl] || item.zrnl
                tempArr[i].jryl = datas.data[item.jryl] || item.jryl
                tempArr[i].jrnl = datas.data[item.jrnl] || item.jrnl
            })
            this.proAndCons.push(...tempArr)
        },
        initProAndCons2(datas) {
            this.proAndCons2 = []
            if (!datas.data) return
            const tempArr = []
            this.proAndCons2Pre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].qishu = item.qishu
                tempArr[i].class1 = datas.data[item.class1]
                tempArr[i].class2 = datas.data[item.class2]
                tempArr[i].class3 = datas.data[item.class3]
                tempArr[i].class4 = datas.data[item.class4]
                tempArr[i].jjc_hj = datas.data[item.jjc_hj] || item.jjc_hj
                tempArr[i].zryl = datas.data[item.zryl] || item.zryl
                tempArr[i].zrnl = datas.data[item.zrnl] || item.zrnl
                tempArr[i].jryl = datas.data[item.jryl] || item.jryl
                tempArr[i].jrnl = datas.data[item.jrnl] || item.jrnl
            })
            this.proAndCons2.push(...tempArr)
        },
        initProduct(datas, key) {
            this[key] = []
            if (!datas.data) return
            const keys = `${key}Pre`
            const tempArr = []
            this[keys].forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].qishu = item.qishu
                tempArr[i].class1 = datas.data[item.class1]
                tempArr[i].class2 = datas.data[item.class2]
                tempArr[i].class3 = datas.data[item.class3]
                tempArr[i].class4 = datas.data[item.class4]
                tempArr[i].hj = datas.data[item.hj]
                tempArr[i].zryl = datas.data[item.zryl]
                tempArr[i].zrnl = datas.data[item.zrnl]
                tempArr[i].jryl = datas.data[item.jryl]
                tempArr[i].jrnl = datas.data[item.jrnl]
            })
            this[key].push(...tempArr)
        },
        initProAndCons3(datas) {
            this.proAndCons3 = []
            if (!datas.data) return
            const tempArr = []
            this.proAndCons3Pre.forEach((item, i) => {
                tempArr[i] = {}
                tempArr[i].name = item.name
                tempArr[i].qishu = item.qishu
                tempArr[i].class1 = datas.data[item.class1]
                tempArr[i].class2 = datas.data[item.class2]
                tempArr[i].class3 = datas.data[item.class3]
                tempArr[i].class4 = datas.data[item.class4]
                if (i > 1) {
                    tempArr[i].mtojc_hj = datas.data[item.mtojc_hj]
                    tempArr[i].zryl = datas.data[item.zryl]
                    tempArr[i].zrnl = datas.data[item.zrnl]
                    tempArr[i].jryl = datas.data[item.jryl]
                    tempArr[i].jrnl = datas.data[item.jrnl]
                } else {
                    tempArr[i].mtojc_hj = datas.data[item.mtojc_hj] || item.mtojc_hj
                    tempArr[i].zryl = datas.data[item.zryl] || item.zryl
                    tempArr[i].zrnl = datas.data[item.zrnl] || item.zrnl
                    tempArr[i].jryl = datas.data[item.jryl] || item.jryl
                    tempArr[i].jrnl = datas.data[item.jrnl] || item.jrnl
                }
            })
            this.proAndCons3.push(...tempArr)
        },
        // 合并 关键设备运行情况备注
        // eslint-disable-next-line consistent-return
        noteRow({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 9) {
                if (rowIndex === 1) {
                    return {
                        rowspan: 3,
                        colspan: 1,
                    };
                }
                return {
                    rowspan: 0,
                    colspan: 0,
                };
            }
            console.log(row, column)
        },
        // 合并 产量及消耗
        // eslint-disable-next-line consistent-return
        setTb4({ row, column }) {
            const span = `${column.property}-span`
            if (row[span]) {
                return row[span]
            }
        },
        morningPostData(date) {
            this.week = `星期${this.w.charAt(new Date(date).getDay())}`
            this.$api.morningPost({ auth: '', date }).then((res) => {
                this.getDailyData(res.data)
                // 给table赋值，重新遍历新增rowSpan属性，checkRoom，appointmentTime为table里面需要合并的属性名称
                this.proAndCons = this.mergeTableRow(this.proAndCons, ['checkRoom', 'name', 'cjc_hj', 'zryl', 'zrnl', 'jryl', 'jrnl'])
                this.proAndCons2 = this.mergeTableRow(this.proAndCons2, ['checkRoom', 'name', 'jjc_hj', 'zryl', 'zrnl', 'jryl', 'jrnl'])
                this.proAndCons3 = this.mergeTableRow(this.proAndCons3, ['checkRoom', 'name'])
                this.product = this.mergeTableRow(this.product, ['checkRoom', 'name'])
                this.consumption = this.mergeTableRow(this.consumption, ['checkRoom', 'name'])
                this.proSale = this.mergeTableRow(this.proSale, ['checkRoom', 'note_sale'])
                this.incoal = this.mergeTableRow(this.incoal, ['checkRoom', 'note_sale'])
            }).catch((err) => {
                console.log(err)
            })
        },
        getDailyData(datas) {
            this.monthProlan(datas)
            this.proLoads(datas)
            // 关键设备运行情况设置
            this.initKeyDevice(datas)
            // 产量及消耗
            this.initProAndCons(datas)
            this.initProAndCons2(datas)
            this.initProAndCons3(datas)
            this.initSale(datas)
            this.initIncoal(datas)
            this.initSchedule(datas)
            this.initoutAnalysis(datas)
            this.initProduct(datas, 'product')
            this.initProduct(datas, 'consumption')
        },
        // 合并行通用方法
        mergeTableRow(data, merge) {
            if (!merge || merge.length === 0) {
                return data
            }
            merge.forEach((m) => {
                const mList = {}
                data = data.map((v, index) => {
                    const rowVal = v[m]
                    if (mList[rowVal]) {
                        // eslint-disable-next-line no-plusplus
                        mList[rowVal]++
                        // eslint-disable-next-line no-plusplus
                        data[index - (mList[rowVal] - 1)][`${m}-span`].rowspan++
                        v[`${m}-span`] = {
                            rowspan: 0,
                            colspan: 0,
                        }
                    } else {
                        mList[rowVal] = 1
                        v[`${m}-span`] = {
                            rowspan: 1,
                            colspan: 1,
                        }
                    }
                    return v
                })
            })
            return data
        },

    },
    created() {
        const date = this.$dateform(new Date().toLocaleDateString('cn', { hour12: false }))
        this.morningPostData(date)
    },
};
</script>
<style lang="scss" scoped>
    $border:1px solid #EBEEF5;
    .flexR{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flx{
        display: flex;
        align-items: center;
    }
    .page_dly{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        padding: 60px;
        box-sizing: border-box;
        .el-table {
            margin-top: -1px !important;
        }
        .thd_h {
            width: 100%;
            height: 50px;
            align-items: center;
        }

        .tDate {
            width: 90%;
            text-align: right;
            text-align: right;
            box-sizing: border-box;
            padding-right: 10px;
        }
    .load{
        width: 100%;
    }
        .week {
            width: 9%;
            text-align: center;
            border-left: $border;
            color: #606266;
            font-size: 14px;
        }
        h2{
            width: 100%;
            height: 46px;
        }
        .bor{
            border: $border;
            box-sizing: border-box;
        }
        .bor2{
            border-top:none;
            border-bottom:none;
        }
        h4 {
            width: 100%;
            text-indent: 20px;
            height: 36px;
            border: $border;
            border-top: none;
            border-bottom: none;
            box-sizing: border-box;
        }
        .rol {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
        }

        .rol div {
            width: 33.33%;
            height: 100%;
            display: flex;
            align-items: center;
            color: #606266;
            font-size: 14px;
            text-indent: 10px;
            box-sizing: border-box;
            border-top: 1px solid #EBEEF5;
            border-left: #EBEEF5 1px solid;
        }
        .last.rol div{
            border-bottom: #EBEEF5 1px solid;
        }
        .descRun {
            width: 50%;
            height: 142px;
            border: $border;
            display: flex;
            align-items: center;
            font-size: 14px;
            color:#606266;
            margin-left: -2px;
        }

        p.load_p1 {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: $border;
        }
        p.load_p2{
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding:0 20px;
        }
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
