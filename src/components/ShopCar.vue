<template>
  <div>
    
    <table>
      <tr>
        <td>序号 </td>
        <td>名称</td>
        <td>单价</td>
        <td>数量</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item, index) in getcarts" :key="index">
        <td>{{index+1}}</td>
        <td>{{ item["title"] }}</td>
        <td>{{ item["price"] }}</td>
        <td>
          <button @click="reduce(index)" :disabled="item.count == 1">-</button>
          {{ item["count"] }}
          <button @click="add(index)">+</button>
        </td>
        <td><button @click="Delete(index)">删除</button></td>
      </tr>
    </table>
    <div class="Sum">
      <p>共{{getcarts.length}}件，合计:￥{{Total}}</p>
      <button class="btn" @click="gosub">提交购买</button>
    </div>
    
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    reduce: function (index) {
      this.getcarts[index].count--;
    },
    add: function (index) {
      this.getcarts[index].count++;
    },
    Delete(index) {
      this.getcarts.splice(index, 1);
    },
    gosub(){
      this.$router.push('/Submit');
    }
    // chkAll: function () {   
    //         let isAll = this.getcarts.check;
    //         if (isAll.checked == false) {
    //             this.getcarts.forEach(function(item, index) {
    //                 item.check = true;
    //             })
    //         } else {
    //             this.getcarts.forEach(function(item, index) {
    //                 item.check = false;
    //             })
    //         }
    //     }

  },
  mounted() {
    this.carts = JSON.parse(localStorage.getItem("carts"));
  },
  computed: {
    getcarts() {
      return this.carts;
      return (this.count = 1);
    },
    Total: function () {  
            let all = 0;
            this.getcarts.forEach(function (thing, index) {
                    all += parseFloat(thing.price * thing.count);
            })
            return all.toString();
        },
  },
};
</script>
<style >

table {
  width: 1000px;
  text-align: center;
  border: 1px solid #ccc;
  background-color: seashell;
}
td {
  width: 250px;
  height: 70px;
  text-align: center;
  
}
.Sum{

  padding: 0 20px;

  width: 100%;
  line-height: 20px;
  position:fixed;
  
  bottom:0;
  margin:0 auto;
  background-color:#F8F8F8;
}
.btn{
  position: relative;
  left: 150px;
  bottom: 35px;
}
</style>