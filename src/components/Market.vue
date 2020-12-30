<template>
  <div id="Bot">
    <div class="p3">--猜你喜欢--</div>
    <div class="like">
      <div class="mart" v-for="(item, index) in getGoodsList" :key="index">
        <a @click=" goGoods(item['goods_id'])"><img :src="item['pic1']" alt="" /></a><br />
        <a class="title" @click=" goGoods(item['goods_id'])">{{ item["title"] }}</a
        ><br />
        <a @click=" goGoods(item['goods_id'])">￥{{ item["price"] }}</a>
      </div>
    </div>
  </div>
</template>>
<script>
export default {
  props: ["goods_id"],
  data() {
    return {
      goodsList: [],
    };
  },
  methods: {
    goGoods(id){
      this.$router.push("/Goods/"+id);
    }
  },
  computed: {
    getGoodsList() {
      return this.goodsList;
    },
  },
  beforeCreate() {
    this.$axios({
      url: "/static/goodlist.json",
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("goods",JSON.stringify(res.data.goods));
        this.goodsList = res.data.goods;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
#Bot {
  width: 1215px;
  margin: 0 auto;
  padding: 0;
}
.p3 {
  line-height: 60px;
  width: 1215px;
  text-align: left;
  font-weight: bold;
  size: 14px;
}
.p3 {
  color: red;
  text-align: center;
  line-height: 60px;
}
.like {
  width: 1215px;
}
.like img {
  width: 220px;
  height: 220px;
  float: left;
  border: 1px solid #ccc;
}
.like .mart {
  width: 225px;
  height: 300px;
  float: left;
  margin: 0 8px;
  text-align: center;
}
.mart a.title {
  vertical-align: top;
  display: inline-block;
  width: 220px;
 overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
a:hover{
  color:darkorange;
}
</style>