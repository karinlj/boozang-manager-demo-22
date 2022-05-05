<template>
  <SignUpComp>
    <template v-slot:header>
      <h2>Codeless testing that works</h2>
      <p class="header-text">
        Try Boozang free for 7 days to automate tests and ship software with
        confidence.
      </p>
    </template>

    <template v-slot:form>
      <form @submit.prevent="signingUp">
        <label>Name: <input type="text" required v-model="name" /> </label>
        <label
          >Email address: <input type="email" required v-model="email" />
        </label>
        <label
          >Password: <input type="password" required v-model="password" /><span
            class="min-char"
            >minimum 7 characters</span
          >
        </label>
        <label
          for="promo"
          @click="showPromo = !showPromo"
          type="button"
          aria-label="Type promo code"
          :aria-expanded="[showPromo]"
          >Promotion code?
        </label>
        <input type="text" id="promo" required v-if="showPromo" />
        <button class="signup-btn">Sign Up</button>

        <div class="divider">
          <span class=""></span>
          <p class="divider-text">OR LOG IN WITH</p>
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
        By creating an account, you agree to our <a href="">Terms of Use</a>
      </p>
      <p>
        Already have an account?
        <router-link :to="{ name: 'LogIn' }"> Login </router-link>
      </p>
    </template>
  </SignUpComp>
</template>

<script>
import SignUpComp from "../components/SignUpComp.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  name: "SignUp",
  components: { SignUpComp },
  setup(props) {
    const router = useRouter();
    const showPromo = ref(false);

    const name = ref("");
    const email = ref("");
    const password = ref("");
    const users = ref([
      { name: "Hugo", email: "hugo@misse.com", password: "3698741" },
      { name: "Filip", email: "filip@misse.com", password: "258963" },
    ]);

    const signingUp = () => {
      let user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      const newUsers = [...users.value, user];
      console.log("users", newUsers);
      router.push("/");
    };

    return {
      showPromo,
      name,
      email,
      password,
      signingUp,
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.min-char {
  font-size: 0.7rem;
  font-style: italic;
  float: right;
  padding-bottom: 0.8rem;
  padding-top: 0.2rem;
}
</style>
