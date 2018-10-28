<template>
  <div class="login-wrap">
    <div class="login-titel">
      <p>会员登陆</p>
    </div>
    <div class="login-card">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="账号" prop="username">
            <Input v-model="formValidate.username" placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem label="密码" prop="password" >
            <Input v-model="formValidate.password" placeholder="请输入密码" type="password"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">登陆</Button>
            <router-link to='/register'><Button style="margin-left: 8px">注册</Button></router-link>
        </FormItem>
    </Form>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    username: '',
                    password: '',
                },
                ruleValidate: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }

        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
.login-wrap{
  text-align: center;
  margin: 5rem auto;
  width: 40%;
  border: 1px #4fc08d solid;
}
.login-titel{
  height: 5rem;
  line-height: 5rem;
  padding: 5rem auto;
  font-size: 2rem;
  background: #4fc08d;

}
.login-card{
  margin: 3rem 1.5rem;
}
</style>

