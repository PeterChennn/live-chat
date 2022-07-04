<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>No account yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <h2>Signup</h2>
      <SignupForm @signup="enterChat" />
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: 'Chatroom' });
    };

    return { showLogin, enterChat };
  },
};
</script>

<style lang="scss">
.welcome {
  text-align: center;
  padding: 20px 0;
  // form styles
  form {
    width: 300px;
    margin: 20px auto;
    label {
      display: block;
      margin: 20px 0 10px;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 10px auto;
    }
    button {
      margin: 20px auto;
    }
  }
  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
