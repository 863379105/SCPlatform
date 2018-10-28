<template>
  <div class="login-wrap">
    <div class="login-titel">
      <p>会员注册</p>
    </div>
    <div class="login-card">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="手机号码" prop="name">
            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
        </FormItem>

        <FormItem label="密码" prop="password">
            <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
        </FormItem>

        <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
        </FormItem>


        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">注册</Button>
            <router-link to='/login'><Button style="margin-left: 8px">已有账号立即登陆</Button></router-link>

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
                    name: '',
                    mail: '',
                    password:''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
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

