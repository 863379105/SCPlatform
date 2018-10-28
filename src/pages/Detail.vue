<template>
    <div class="detail-wrap" >
      <div>
        <h1>{{product.name}}</h1>
        <h1>零售单价:{{product.singprice}}元</h1>
      </div>
      <div class="detail-opt-input">
        <span>购买数量：</span><Input v-model="value" placeholder="输入购买数量" style="width: 300px" />
        <span>库存:{{product.stock}}</span>
        <div class="detail-opt-button">
          <router-link
                    :to="{
                        path: 'order',     //要跳转的路径
                        query: {
                            id:product.id,
                            value:this,value,
                            dataObj:product
                        }
                    }"
                >
                <Button type="success" @click="getNum(this.value)">购买</Button></router-link>

          <Button type="warning">返回</Button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{

  },
  data(){
    return {
      product:this.$route.query.dataObj,
      value: '',
    }
  }
}
</script>

<style scoped>
.detail-wrap {
  width: 80%;
  margin: 5rem auto;
  overflow: hidden;
  border: green 1px solid;
}
.detail-wrap h1{
  background: #4fc08d;
  color: #fff;
  padding: 15px 15px;
}
.detail-opt-input{
  text-align: center;
  padding: 3rem ;
}
.detail-opt-button{
  margin: 1rem;
}
</style>
