<template>
  <ea-login
      :logo="logo"
      tips="提示：账号密码请随意输入"
      @send-code="sendCode"
      @submit="submit"
  ></ea-login>
</template>
<script>
  import logo from '@/assets/logo.svg';
  import store from '@/store';

  export default {
    name: 'Login',
    components: {},
    props: {},
    watch: {},
    data() {
      return {
        logo,
      };
    },
    computed: {},
    methods: {
      sendCode(mobile, done) {
        this.$message.success(`验证码已经发送到 ${mobile}`);
        setTimeout(() => {
          this.$message.warning(`假的，此项目没有实现这个逻辑！`);
        }, 1000);
        done();
      },
      submit(data) {
        if (data.type === 'user') {
          setTimeout(() => {
            this.$message.success(`登录成功 ${data.user} 欢迎使用 e-admin`);
            store.user.id = Date.now().toString();
            store.user.name = data.user;
            localStorage.setItem('document_user', JSON.stringify(store.user));
            setTimeout(() => {
              this.$router.push(store.route.to || '/');
            }, 100);
          }, 100);
        } else {
          this.$message.warning(`请使用账号密码随意填写登录！`);
        }
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>