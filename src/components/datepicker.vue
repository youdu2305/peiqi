<template>
    <div class="block">
        <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            format="yyyy-MM-dd"
            placeholder="选择日期"
            :picker-options="pickerOptions"
            @change="sendDate"
        />
    </div>
</template>

<script>
export default {
    name: 'Datepicker',
    data() {
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    },
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    },
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    },
                }],
            },
            value2: this.$dateform(new Date().toLocaleDateString('cn', { hour12: false })),
        };
    },
    methods: {
        sendDate() {
            this.$emit('getDate', this.$dateform(new Date(this.value2).toLocaleDateString('cn', { hour12: false })))
        },
    },
};
</script>
