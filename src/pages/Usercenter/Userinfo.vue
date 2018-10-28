<template>
  <div class="sales-board">
      <div class="sales-board-form">
        <div class="userinfo-titel">
          <h1>欢迎您，{{user.username}}</h1>
        </div>
        <div class="userinfo-card">
          <h2>账户名：{{user.username}}</h2>
          <h2>邮箱：{{user.email}}</h2>
          <h2>QQ：{{user.qq}}</h2>
          <h2>注册时间：{{user.regtime}}</h2>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:[]
    }
  },
  created: function(){
    this.$http.get('http://localhost:3000/login')
      .then((res) =>{
        this.user = res.data;
      },(err) =>{
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userinfo-titel{
  font-size: 1.5rem;
  font-weight: bolder;
  text-align: center;
  margin: 2rem;
}
.userinfo-card{
  font-size: 1.25rem;
  padding-left:15%;
}
.userinfo-card h2{
  margin: 2rem 0;
}
</style>
