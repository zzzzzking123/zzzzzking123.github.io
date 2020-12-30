<template>
    <div>
        <table>
            <tr>
                <td>
                    选择支付方式：
                </td>
                <td><input type="checkbox">微信支付</td>
                <td><input type="checkbox">支付宝支付</td>
                <td><input type="checkbox">银行卡支付</td>
                <td><input type="checkbox">白条</td>
            </tr>
            <tr>
                <td>
                    选择快递公司：
                </td>
                <td><input type="checkbox">顺丰</td>
                <td><input type="checkbox">韵达</td>
                <td><input type="checkbox">申通</td>
                <td><input type="checkbox">中通</td>
            </tr>
        </table>
        <div>
            <button class="btn" @click="goSuccess"> 点击购买</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        goSuccess(){
            this.$router.push('/Success');
        }
    }
}
</script>
<style scoped>
table{
    border: 1px solid black;
}
tr,td{
    width: 160px;
    height: 40px;
    border: 1px solid black;
    padding: 0;
    text-align: center;
}
.btn{
    position: relative;
    top:0px;
    left: 728px;
}
</style>