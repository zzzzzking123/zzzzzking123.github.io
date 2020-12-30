<template>
<div>

   <div id="nav1">
      <a @click="goLoading" class="nav1L" >游客，请登录</a>
      <a @click="goRegister" class="nav1L">注册新用户</a>
      <a href="#" class="nav1R">商城首页</a>
      <a href="#" class="nav1R">个人中心</a>
      <a @click="goShopCar" class="nav1R">购物车</a>
      <a href="#" class="nav1R">收藏夹</a>
    </div>
  <div id="top">
    <!-- 顶部 -->
    
      <div id="Search">
        <img class="manba" src="../assets/top.gif" width="80px" alt="" />
        
        <div class="ip">
          <input type="text" class="form-control" placeholder="请输入关键字">
          <span class="input-group-addon"><button>搜索</button></span>
        </div>
      </div>
      <div id="nav2">
        <ul class="menu">
          <li>
            <a href="#" class="all">全部分类</a>
            <div class="Child">
                <ul>
                <li><a>家用电器</a>
                <div class="second">
                  <ul>
                    <li>冰箱</li>
                    <li>洗衣机</li>
                    <li>电视机</li>
                    <li>微波炉</li>
                    <li>空调</li>
                    <li>抽油烟机</li>
                    <li>冰柜</li>
                    <li>电火炉</li>
                    <li>饮水机</li>
                    <li>热水壶</li>
                    <li>饮水机</li>
                    <li>热水壶</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 手机/数码</a>
                  <div class="second">
                  <ul>
                    <li>手机</li>
                    <li>摄像机</li>
                    <li>照相机</li>
                    <li>华为</li>
                    <li>索尼</li>
                    <li>三星</li>
                    <li>苹果</li>
                    <li>拍立得</li>
                    <li>中兴</li>
                    <li>OPPO</li>
                    <li>联想</li>
                    <li>小米</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 服装/饰品</a>
                  <div class="second">
                  <ul>
                    <li>衣服</li>
                    <li>裤子</li>
                    <li>鞋子</li>
                    <li>夹克</li>
                    <li>牛仔裤</li>
                    <li>运动鞋</li>
                    <li>衬衫</li>
                    <li>休闲裤</li>
                    <li>篮球鞋</li>
                    <li>羽绒服</li>
                    <li>紧身裤</li>
                    <li>帆布鞋</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 母婴玩具</a>
                  <div class="second">
                  <ul>
                    <li>奶粉</li>
                    <li>尿不湿</li>
                    <li>玩具</li>
                    <li>积木</li>
                    <li>奶嘴</li>
                    <li>金领冠</li>
                    <li>雀巢</li>
                    <li>孕妇装</li>
                    <li>磨牙棒</li>
                    <li>水壶</li>
                    <li>水杯</li>
                    
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 美妆/保养</a>
                  <div class="second">
                  <ul>
                    <li>口红</li>
                    <li>眉笔</li>
                    <li>面膜</li>
                    <li>卸妆油</li>
                    <li>粉底</li>
                    <li>睫毛膏</li>
                    <li>面霜</li>
                    <li>彩妆</li>
                    <li>眼影</li>
                    <li>彩妆球</li>
                    <li>卸妆棉</li>
                    <li>洗面奶</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 医药/保健</a>
                  <div class="second">
                    <ul>
                      <li>消毒水</li>
                      <li>口罩</li>
                      <li>防暑</li>
                      <li>创口贴</li>
                      <li>感冒灵</li>
                      <li>布洛芬</li>
                      <li>散列通</li>
                      <li>纱布</li>
                      <li>碘酒</li>
                      <li>葡萄糖</li>
                      <li>镊子</li>
                      <li>感冒药</li>
                    </ul>
                  </div>  
                </li>
                <li>
                  <a> 新鲜果蔬</a>
                  <div class="second">
                  <ul>
                    <li>苹果</li>
                    <li>橘子</li>
                    <li>梨</li>
                    <li>香蕉</li>
                    <li>葡萄</li>
                    <li>提子</li>
                    <li>西红柿</li>
                    <li>卷心菜</li>
                    <li>土豆</li>
                    <li>花菜</li>
                    <li>包菜</li>
                    <li>白菜</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a> 户外/运动</a>
                  <div class="second">
                  <ul>
                    <li>登山包</li>
                    <li>自行车</li>
                    <li>紧身衣</li>
                    <li>紧身裤</li>
                    <li>急救箱</li>
                    <li>登山鞋</li>
                    <li>水壶</li>
                    <li>保温杯</li>
                    <li>帐篷</li>
                    <li>烧烤架</li>
                    <li>桌布</li>
                    <li>盘子</li>
                  </ul>
                </div>  
                </li>
                <li>
                  <a>食品/零食</a>
                  <div class="second">
                  <ul>
                    <li>冰箱</li>
                    <li>洗衣机</li>
                    <li>电视机</li>
                    <li>微波炉</li>
                    <li>空调</li>
                    <li>抽油烟机</li>
                    <li>冰柜</li>
                    <li>电火炉</li>
                    <li>饮水机</li>
                    <li>热水壶</li>
                    <li>饮水机</li>
                    <li>热水壶</li>
                  </ul>
                </div>  
                </li>
              </ul>
            </div>
            
          </li>
          <li><a href="#">首页</a></li>
          <li><a href="#">闪购</a></li>
          <li><a href="#">数码</a></li>
          <li><a href="#">服装</a></li>
          <li><a href="#">全球购</a></li>
        </ul>
      </div>
  </div>
</div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    goLoading() {
      this.$router.push("/Loading");
    },
    goShopCar() {
      this.$router.push("/ShopCar");
    },
    goRegister() {
      this.$router.push("/Register");
    },
    
  },
};
</script>
<style scoped>
*{
  padding: 0;
}
#top {
  width: 1215px;
  margin: 0 auto;
  padding: 0;
}
a {
  text-decoration: none;
}
.Child ul li:hover {
  color: crimson;
}
#nav1 {
  font-size: 12px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  background-color: rgb(122, 4, 4);
}
a .nav1L:hover{
  background-color: orange;
}
.nav1L {
  float: left;
  position: relative;
  margin-left: 20px;
  color: white;
}
.nav1R {
  position: relative;
  float: right;
  color: white;
  margin-right: 10px;
}
#Search {
  margin-top: 15px;
  position: relative;
  height: 100px;
  margin-left: 0px;
  display: block;
}
.ip{
  height: 40px;

  position: relative;
  text-align: center;
  top: 15px;
  left: -100px;
  
}
.form-control{
  width: 350px;
  line-height: 30px;
}
button{
  width: 60px;
  height: 35px;
}
.sousuo {
  width: 80px;
  text-align: center;
}

.kuang {
  width: 240px;
  line-height: 26px;
}

.manba {
  float: left;
  width: 200px;
  height: 100px;
}
#nav2 {
  height: 40px;
}

ul {
  list-style: none;
  padding: 0;
}
.menu li {
  position: relative;
  width: 90px;
  float: left;
}
.menu li a {
  display: block;
  line-height: 40px;
  text-align: center;
  padding: 0;
  color: black;
  transition: all 0.3s ease-in-out;
}
.menu li:hover  {
  background-color:#FF0036;
}


.Child {
  position: absolute;
  background-color: grey;
  text-align: center;
  z-index: 999;
}
.Child li {
  font-size: 16px;
  line-height: 40px;
}
/*鼠标先悬浮，然后子层出现*/

.Child li {
  float: none;
}
.Child li a{
  color: white;
}
.Child li a:hover {
  background-color: black;
}
.second{
  position:absolute;
  top:0;
  left: 90px;
  width: 360px;
  height: 130px;
  display: none;

  background-color: rgb(213, 214, 214);

}
.second ul li{
  color: black;
  float: left;
}
.second ul li:hover{
  background-color: darkgrey;

}
.Child ul li:hover .second{
  display: block;
} 
</style>>