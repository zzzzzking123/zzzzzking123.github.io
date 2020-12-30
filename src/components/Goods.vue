<template>
  <div>
    <div class="top">
      {{getGood().store}}
      <a @click="goFirst" class="nav1R">商城首页</a>
      <a href="#" class="nav1R">个人中心</a>
      <a @click="goShopCar" class="nav1R">购物车</a>
    </div>
    <div class="picture">
      <!-- <h2>
      {{ getGood().title }}
    </h2> -->

        <div class="bigImg">
          <img :src=" getGood().pic1 " alt="" class="small">
        </div>

        <div class="smallImg">
            <div class="s1">
              <img :src=" getGood().pic1 " alt="" class="small1">
              <div class="img2">
                <img :src=" getGood().pic1 " alt="" >
              </div>
            </div>   
            
            <div class="s2">
              <img :src=" getGood().pic2 " alt="" class="small2">
              <div class="img2">
                <img :src=" getGood().pic2 " alt="" >
              </div>
            </div>
            
            <div class="s3">
              <img :src=" getGood().pic3 " alt="" class="small3">
              <div class="img2">
                <img :src=" getGood().pic3 " alt="" >
              </div>
            </div>
            <div class="s4">
              <img :src=" getGood().pic4 " alt="" class="small4">
              <div class="img2">
                <img :src=" getGood().pic4 " alt="" >
              </div>
            </div>
            <div class="s5">
              <img :src=" getGood().pic5 " alt="" class="small5">
              <div class="img2">
                <img :src=" getGood().pic5 " alt="" >
              </div>
            </div>
          
        </div>
        <div class="Title">
          <a >{{ getGood().title}}</a>
          <p class="kuaidi">秒杀价：￥<a class="Price">{{getGood().price}}</a></p>
          <p class="kuaidi">快递配送：<a class="Kd">{{getGood().kuaidi}}</a></p>
          选择规格：<p class="Style">{{getGood().style}}</p>
          <div class="Count">
            <button @click="reduce()">-</button>
            {{count}}
            <button @click="add()">+</button>
            <button @click="goShopCar" class="Car">加入购物车</button>
          </div>
        </div>
        <span class="thing">商品详情<hr/> </span>
        <span class="thing2">用户评价</span>
        
        <div class="bot">
          <img :src=" getGood().pic1 " alt="" class="xx">
            <img :src=" getGood().pic2 " alt="" class="xx">
            <img :src=" getGood().pic3 " alt="" class="xx">
            <img :src=" getGood().pic4 " alt="" class="xx">
            <img :src=" getGood().pic5 " alt="" class="xx">
        </div>
        
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      count: 1

    };
  },
  methods: {
    getGood() {
      let goods = JSON.parse(localStorage.getItem("goods"));
      let good;
      goods.forEach((item) => {
        // console.log(item["goods_id"]);
        // console.log(this.$route.params.id);
        if (item["goods_id"] == this.$route.params.id) {
          // console.log(item);
          good = item;
          localStorage.setItem("shoppingcar",JSON.stringify(item["goods_id"]));
        }
      });
      // console.log(good);
      return good;

    },
    
    goFirst(){
      this.$router.push('/First')
    },
    goShopCar(){

      // 加入购物车
      if(localStorage.getItem("carts") === null){
        this.$axios({
          url:'/static/default-cart.json'
        }).then(res=>{
          localStorage.setItem("carts",JSON.stringify(res.data));
        })
      }else{
        let carts = JSON.parse(localStorage.getItem("carts"));
        let goods = this.getGood();
        
        

        goods['count'] =1;
       
        carts.push(goods);
        localStorage.setItem("carts",JSON.stringify(carts));
      }

      this.$router.push('/ShopCar')
    },
    add(){
      this.count++;
    },
    reduce() {
      if (this.count === 1) return;
      this.count--;
    }
  },
};
</script>
<style  scoped>
.top{
  line-height: 40px;
  background-color: black;
  color: white;
  font-weight: 500;
  
}
.top a{
  float: right;
  color: white;
  margin: 0 5px;
  text-decoration: none;
}
.picture{
  width: 1000px;
  margin: 0 auto;
}

.bigImg img{
  width: 300px;
  height: 300px;
}
.img2{
  display: none;
  top: 40px;
  position: absolute;
}
.img2 img{
  width: 300px;
  height: 300px;
}
.smallImg{
  width: 300px;
  
}
.small2{
  position: absolute;
  margin-left: 55px;
  margin-top: -53px;
}
.small3{
  position: absolute;
  margin-left: 110px;
  margin-top: -53px;
}
.small4{
  position: absolute;
  margin-left: 165px;
  margin-top: -53px;
}
.small5{
  position: absolute;
  margin-left: 220px;
  margin-top: -53px;
}
.s1:hover .img2{
  display: block;
}
.s2:hover .img2{
  display: block;
}
.s3:hover .img2{
  display: block;
}
.s4:hover .img2{
  display: block;
}
.s5:hover .img2{
  display: block;
}
.small1,.small2,.small3,.small4,.small5 {
  width: 50px;
  height: 50px;
}
.contain{
  width: 500px;
  float: left;
}

.Title{
  width: 500px;
  position: relative;
  left: 350px;
  top: -320px;
}
.Title a{
  font-weight: 700;
  size: 14px;
}
.Style{
  border: 1px solid #ccc;
  background-color: gainsboro;
  width: 150px;
  line-height: 40px;
  text-align: center;
  margin-top: -30px;
  margin-left: 100px;
}
.Title p{
  line-height: 40px;
}
.Car{
  background-color: red;
  width: 140px;
  line-height: 40px;
  font-weight: 700;
  color: white;
  font-size: 17px;
  margin-left: 80px;

}
.kd{
  font-size: 16px;
}
.Price{
  color: red;
  font-size: 25px;
  
}
.Count{
  margin-top: 60px;
}
.thing,.thing2{
  position: relative;
  float: left;
  margin-top: -200px;
  width: 100%;
  font-size: 17px;
  color: brown;
}
.thing2{
  left: 80px;
}
.bot{
  position: absolute;
  margin-top: -100px;
}
.xx{
  width: 800px;
  margin: 0 auto;
  margin-left: 80px;
}
</style>