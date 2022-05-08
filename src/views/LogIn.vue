<template>
  <SignUpComp>
    <template v-slot:header>
      <h2>Welcome Back</h2>
      <p class="header-text">Log in to your Boozang account</p>
    </template>

    <template v-slot:form>
      <form @submit.prevent="loginIn">
        <label
          >Email address: <input type="email" required v-model="email" />
        </label>
        <label class="password"
          >Password:
          <span class="forgot-pass"><a href="">Forgot password?</a></span
          ><input type="password" required v-model="password" />
        </label>

        <button class="signup-btn">Log in</button>
        <div class="divider">
          <span class=""></span>
          <p class="">OR LOG IN WITH</p>
          <span class=""></span>
        </div>
        <section class="social-login">
          <button class="github-sign-in">
            <span
              ><img src="../assets/gitHubMark.png" alt="GitHub login"
            /></span>
            GitHub
          </button>
          <button class="google-sign-in">
            <span
              ><img src="../assets/icon_google.png" alt="Google login"
            /></span>
            Google
          </button>
        </section>
      </form>
    </template>
    <template v-slot:smallText>
      <p>
        Need a Boozang account?
        <router-link :to="{ name: 'SignUp' }"> Create account </router-link>
      </p></template
    >
  </SignUpComp>
</template>

<script>
import SignUpComp from "../components/SignUpComp.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  name: "LogIn",
  components: { SignUpComp },
  setup(props) {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const loginIn = () => {
      console.log("email", email.value);
      console.log("password", password.value);
      router.push("/");
    };
    return {
      email,
      password,
      loginIn,
    };
  },
};
</script>

<style lang="scss" scoped>
.password {
  position: relative;
  .forgot-pass {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.75rem;
    font-style: italic;
  }
}
</style>
