<template>
  <div class="order-wrap" >
      <div>
        <h1>订单生成成功，请完成支付！</h1>
      </div>

      <div class="order-card">
        <div class="order-card-info">
          <div class="product-name">所购商品：{{product.name}}</div>
          <div>商品单价：{{product.singprice}}元</div>
          <div>购买数量：{{num}}个</div>
          <div>订单总价：{{product.singprice * num}}</div>
          <div>支付方式：
            <RadioGroup v-model="payment" type="button" size="large">
              <Radio value='1' label="支付宝"></Radio>
              <Radio value='2' label="微信"></Radio>
            </RadioGroup>
          </div>
        </div>
        <div class="order-card-opt">
          <Button type="success" size="large">确认购买</Button>
          <Button type="warning" size="large">返回</Button>
        </div>

      </div>

    </div>
</template>
<script>
export default {
  data(){
    return {
      product: {
        name     : "XXXXX 7天",
        singprice: 9,
      },
      num    : 2,
      payment: '1',
    }
  }
}
</script>
<style scoped>
.order-wrap {
  width   : 80%;
  margin  : 5rem auto;
  overflow: hidden;
  border  : green 1px solid;
}
.order-wrap h1{
  text-align: center;
  background: #4fc08d;
  color     : #fff;
  padding   : 15px 15px;
}

.order-card .order-card-info{
  font-size  : 1.25rem;
  margin     : 1rem;
  margin-left: 25%;
}
.order-card .order-card-info div{
  padding: 1rem;
}
.product-name{
  overflow     : hidden;
  text-overflow: ellipsis;
  white-space  : nowrap;
  width        : 25em;
}
.order-card-opt{
  text-align: center;
  margin    : 1.5rem;
}
.order-card-opt *{
  margin: 0 0.5rem;
}

</style>
