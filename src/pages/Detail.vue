<template>
    <div class="detail-wrap" >
      <div class="card-head">
        <h1>{{product.name}} <span class="autosend">自动发货</span></h1>
        <h1>
          零售单价: <span class="price">{{product.unitprice}}</span>元 <span class="volum">累计销量: 998个</span>
        </h1>
      </div>
      <div class="detail-opt-input">
        <span>购买数量：</span><Input v-model="value" size='large' type="number" placeholder="输入购买数量" style="width: 300px" />
        <span>库存: {{product.stock}}</span>
        <div class="detail-opt-button">
          <router-link
                    :to="{
                        path : 'order',   //要跳转的路径
                        query: {
                            id     : product.id,
                            value  : this.num,
                            dataObj: product
                        }
                    }"
                >
                <Button type="success" @click="getNum(this.num)">购买</Button></router-link>

          <Button type="warning">返回</Button>
        </div>
      </div>

      <h1>商品介绍</h1>
      <div class="commdity-desc">
        <p>
          购买后不会使用，请查看下方的详细说明，或者联系售后QQ：
          <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=44771091&amp;site=qq&amp;menu=yes" rel="nofollow" target="_blank">
            <img src="http://wpa.qq.com/pa?p=2:44771091:51" alt="点击和我聊天">
          </a>
        </p>
        <p>售后电话：44771091</p>
        <p>官方地址：<router-link to="http://vip.kugou.com/code.html">http:   //vip.kugou.com/code.html</router-link></p>
      </div>
    </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      product: {
        id  : 1,
        name: 
          "【CDK】酷狗豪华会员+音乐包300首 （无限叠加 质保3天 有效期2018.12.30）",
        unitprice: 9.9,
        stock    : 87
      },
      num: 2
    };
  }
};
</script>

<style scoped>
.detail-wrap {
  width   : 80%;
  margin  : 5rem auto;
  overflow: hidden;
  border  : green 1px solid;
}
.detail-wrap h1 {
  background: #4fc08d;
  color     : #fff;
  padding   : 15px 15px;
  font-size : 19px;
}
span.price {
  font-weight: bold;
  color      : #fff;
  font-size  : 22px;
  padding    : 0 5px;
}
.detail-opt-input {
  text-align: center;
  padding   : 3rem;
}
.detail-opt-button {
  margin: 1rem;
}

.commdity-desc {
  padding: 20px;
}

.commdity-desc p {
  padding: 5px 0;
}
span.autosend {
  float           : right;
  background-color: #00a8ff;
  border-radius   : 16px;
  padding         : 2px 5px;
  font-size       : 14px;
}
span.volum {
  float      : right;
  font-size  : 15px;
  font-weight: bold;
}
</style>
