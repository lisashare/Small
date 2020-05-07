<template>
  <div class="login">
    <div class="login-box">
      <div class="login-switch-tab">
        <a href="javascript:void(0);" :class="[cur == 1?'active':'']" @click="tabSubmitFn(1)">密码登陆</a>
        <a href="javascript:void(0);" :class="[cur == 2?'active':'']" @click="tabSubmitFn(2)">短信登陆</a>
      </div>
      <form class="login-form" v-show="cur == 1">
        <div class="fm-field">
          <div class="form-item">
            <div class="form-group">
              <label><i class="fa fa-user-o"></i></label>
              <div class="control control-username">
                <input
                  type="text"
                  class="fm-text"
                  id="fm-login-id"
                  placeholder="会员名/邮箱/手机号"
                  autocapitalize="off"
                  maxlength="60"
                  v-model="username"
                  @input="msg.username = ''"
                />
              </div>
            </div>
            <p class="n-msg n-msg-username">{{msg.username}}</p>
          </div>
          <div class="form-item">
            <div class="form-group">
              <label><i class="fa fa-lock"></i></label>
              <div class="control control-password">
                <input
                  type="password"
                  class="fm-text"
                  id="fm-login-password"
                  placeholder="请输入登陆密码"
                  autocapitalize="off"
                  maxlength="60"
                  v-model="password"
                  @input="msg.password = ''"
                />
              </div>
            </div>
            <p class="n-msg n-msg-username">{{msg.password}}</p>
          </div>
        </div>
        <div class="fm-btn">
          <button type="button" class="fm-button fm-submit password-login">登录</button>
        </div>
        <div class="login-links">
          <router-link to="forgetpassword" target="_blank" class="forgot-password-a-link">忘记密码</router-link>
          <router-link to="register" target="_blank" class="register-a-link">免费注册</router-link>
        </div>
      </form>
      <form class="login-form" v-show="cur == 2">
        <div class="fm-field">
          <div class="form-item">
            <div class="form-group">
              <label><i class="fa fa-lg fa-mobile"></i></label>
              <div class="control control-username">
                <input
                  type="text"
                  class="fm-text"
                  id="fm-sms-login-id"
                  placeholder="请输入手机号"
                  autocapitalize="off"
                  maxlength="11"
                  v-model="mobile"
                  @input="msg.username = ''"
                />
              </div>
            </div>
            <p class="n-msg n-msg-username">{{msg.username}}</p>
          </div>
          <div class="form-item">
            <div class="form-group">
              <label><i class="fa fa-keyboard-o"></i></label>
              <div class="btn-smscode">获取验证码</div>
              <div class="control control-password">
                <input
                  type="text"
                  class="fm-text"
                  id="fm-smscode"
                  placeholder="请输入验证码"
                  autocapitalize="off"
                  maxlength="6"
                  v-model="code"
                  @input="msg.password = ''"
                />
              </div>
            </div>
            <p class="n-msg n-msg-username">{{msg.password}}</p>
          </div>
        </div>
        <div class="fm-btn">
          <button type="button" class="fm-button fm-submit sms-login">登录</button>
        </div>
        <div class="login-links">
          <router-link to="register" target="_blank" class="register-a-link">免费注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      cur: 1, // 密码登陆与验证码登陆tab
      username: "",
      password: "",
      mobile: "",
      code: '',
      msg: { // 提示信息
        username: "",
        password: ""
      }
    };
  },
  methods: {
    tabSubmitFn(i) {
      if (this.cur == i) return;
      this.cur = i;
    }
  },
  watch: {
      mobile() {
        this.mobile=this.mobile.replace(/[^\d]/g,'');
      },
      code(){
        this.code=this.code.replace(/[^\d]/g,'');
      }
    }
};
</script>
<style lang="less" scoped>
.login {
  .login-box {
    position: absolute;
    top: 24%;
    right: 18%;
    width: 4.2rem;
    min-height: 3rem;
    padding: 0.6rem 0.6rem 0.4rem;
    color: #6c6c6c;
    background-color: hsla(0, 0%, 100%, 0.9);
    box-shadow: -1px 7px 27px 0px rgba(114, 154, 249, 0.36);
  }
  .login-switch-tab {
    position: relative;
    margin-bottom: 0.4rem;
    a {
      position: relative;
      display: inline-block;
      height: 0.46rem;
      font-size: 0.24rem;
      font-weight: 600;
      color: #3c3c3c;
    }
  }
  .active {
    color: #41a8f3;
  }
  .active:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0.8rem;
    height: 0.04rem;
    background: linear-gradient(90deg,#55bfff, #3c3c3c);
  }
  input {
    padding-left: 0.74rem;
    height: 0.62rem;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e3e4e4;
    font-size: 0.22rem;
  }
  // input::-webkit-credentials-auto-fill-button , // password
  // input::-webkit-contacts-auto-fill-button { // other
  //     display: none !important;
  //     visibility: hidden;
  //     pointer-events: none;
  //     position: absolute; /* 避免占用 input 元素额外的 padding，正常情况下存在 display: none!; 就可以了 */
  //     right: 0;
  // }
}
.form-group {
  position: relative;
  label {
    position: absolute;
    width: 0.62rem;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    color: #fff;
    left: 0;
    background-color: #ccc;
  }
}
.n-msg {
  height: 0.4rem;
  line-height: 0.4rem;
}

.btn-smscode{
    position: absolute;
    top: 1px;
    right: .12rem;
    height: .6rem;
    line-height: .6rem;
    font-size: .2rem;
    text-align: center;
    cursor: pointer;
}
.fm-button {
  margin: 0.14rem 0 0.2rem;
  //   background: #f40;
  //   border-color: #f40;
  //   font-size: 0.2rem;
}
.fm-button {
  background-color: #ff9000;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff9000),
    to(#ff9000)
  );
  background-image: linear-gradient(90deg, #ff9000, #ff9000);
  border: 1px solid #ff9000;
  border-radius: 0.04rem;
  font-size: 0.24rem;
  font-weight: 600;
  height: 0.64rem;
  line-height: 0.64rem;
  outline: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
}
.login-links {
  text-align: right;
  a {
    font-size: 0.2rem;
    color: #6c6c6c;
  }
}
</style>