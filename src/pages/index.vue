<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>商家信息</h2>
        <template v-for="CusServcie in CusServcieList">
          <h3>{{ CusServcie.title}}</h3>
          <ul>
            <li v-for="item in CusServcie.list">
              <p>{{ item.name }}</p>
            </li>
          </ul>
          <div v-if="!CusServcie.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="index-left-block">
        <h2>
          <div id="pInfo">商品信息</div>
          <div id="pPrice">商品价格</div>
          <div id="pStock">商品库存</div>
          <div id="pOpt">操作</div>
        </h2>
        <template>
          <div v-for="item in ProductsList" class="productList">
            <div class="productName" @click="toDetail">{{ item.name }}</div>
            <div class="productPrice">{{ item.singprice}}元</div>
            <div class="productStock">{{ item.stock }}个</div>
            <div class="productButton">
               <router-link
                    :to="{
                        path : 'detail',   //要跳转的路径
                        query: {
                            id     : item.id,
                            dataObj: item
                        }
                    }"
                >
                <i-button type="success" ghost>购买</i-button></router-link>
            </div>
          </div>
          <!-- <div v-if="!Product.last" class="hr"></div> -->
        </template>
      </div>

      <div class="index-left-block">
        <h2>
          <div id="pInfo">商品信息</div>
          <div id="pPrice">商品价格</div>
          <div id="pStock">商品库存</div>
          <div id="pOpt">操作</div>
        </h2>
        <template>
          <div v-for="item in ProductsList" class="productList">
            <div class="productName" @click="toDetail">{{ item.name }}</div>
            <div class="productPrice">{{ item.singprice}}元</div>
            <div class="productStock">{{ item.stock }}个</div>
            <div class="productButton">
               <router-link
                    :to="{
                        path : 'detail',   //要跳转的路径
                        query: {
                            id     : item.id,
                            dataObj: item
                        }
                    }"
                >
                <i-button type="success" ghost>购买</i-button></router-link>
            </div>
          </div>
          <!-- <div v-if="!Product.last" class="hr"></div> -->
        </template>
      </div>

      <div class="index-left-block">
        <h2>
          <div id="pInfo">商品信息</div>
          <div id="pPrice">商品价格</div>
          <div id="pStock">商品库存</div>
          <div id="pOpt">操作</div>
        </h2>
        <template>
          <div v-for="item in ProductsList" class="productList">
            <div class="productName" @click="toDetail">{{ item.name }}</div>
            <div class="productPrice">{{ item.singprice}}元</div>
            <div class="productStock">{{ item.stock }}个</div>
            <div class="productButton">
               <router-link
                    :to="{
                        path : 'detail',   //要跳转的路径
                        query: {
                            id     : item.id,
                            dataObj: item
                        }
                    }"
                >
                <i-button type="success" ghost>购买</i-button></router-link>
            </div>
          </div>
          <!-- <div v-if="!Product.last" class="hr"></div> -->
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsList      : [],
      CusServcieList: {
        CusService1: {
          title: '客服1',
          list : [
            {
              name: 'QQ：123456678',
            },
            {
              name: 'QQ群：123456789',
            },
            {
              name: '微信：123456789',
            },
            {
              name: '电话：123456789',
            }
          ]
        },
        CusService2: {
          title: '客服2',
          list : [
            {
              name: 'QQ：123456678',

            },
            {
              name: 'QQ群：123456789',

            },
            {
              name: '微信：123456789',

            },
            {
              name: '电话：123456789',
            }
          ]
        }
      },
      ProductsList: [],
    }
  },
  methods: {
    toDetail () {
      this.$router.push('/detail')
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/getProductsList')
      .then((res) =>{
        console.log(res.data);
        this.ProductsList = res.data;
      },(err) =>{
        console.log(err)
      })
  }
}
</script>

<style scoped>
.index-wrap {
  width   : 1200px;
  margin  : 0 auto;
  overflow: hidden;
}
.index-left {
  float     : left;
  width     : 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin    : 20px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  font-size    : 1rem;
  background   : #4fc08d;
  color        : #fff;
  padding      : 15px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding    : 0 15px 5px 15px;
  font-weight: bold;
  color      : #222;
}
.index-left-block ul {
  padding: 10.00px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float        : left;
  width        : 400px;
  background   : #fff;
  box-shadow   : 0 0 1px #ddd;
  padding      : 20px;
  margin-right : 20px;
  margin-bottom: 20px;
}

.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.new-item {
  display      : inline-block;
  width        : 230px;
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color     : #fff;
}
.new-item {
  display      : inline-block;
  width        : 230px;
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
}

#productTitle{
  text-align: center;
}
.productList{
  padding: 1rem 0;
}
.productList div{
  font-size: 1.25rem;
  display  : inline;
  padding  : 0 1rem;
}
.productList .productName{
  display      : block;
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
  width        : 25em;
  float        : left;
  cursor       : pointer;
}
.productList .productPrice{
  padding: 0 2rem;
}
.productList .productStock{
  padding: 0 1.5rem;
}
.productList .productButton{

}
h2 div{
  padding: 0 1rem;
  display: inline;
}
#pInfo{
  display   : block;
  width     : 30em;
  float     : left;
  text-align: center;
}
#pPrice{
  padding: 0 2rem;
}
#pStock{
}
#pOpt{
  padding-left: 1.5rem;
}
</style>
