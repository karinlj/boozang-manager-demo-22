<template>
  <main class="signup-main">
    <section class="flag-section">
      <div v-if="showEurope">
        <img src="../assets/eu.svg" alt="EU flag" class="eu-flag" />
      </div>
      <div v-else>
        <img src="../assets/canada.svg" alt="Canada flag" class="canada-flag" />
      </div>
      <button @click="showEurope = !showEurope">{{ regionText }}</button>
    </section>

    <div class="container-small">
      <section class="signup-section">
        <section class="signup-upper">
          <div class="signup-left">
            <img
              src="../assets/boozang_logo_white.png"
              alt="Boozang logo"
              class="logo"
            />
            <img
              src="../assets/robot-white.png"
              alt="Boozang Robot"
              class="robot"
            />
            <div class="signup-left-text">
              <h1>Testing made simple</h1>
              <p>Automation tool for developers and non-developers.</p>
            </div>
          </div>
          <div class="signup-right">
            <div class="signup-text-right">
              <h2>Codeless testing that works</h2>
              <p>
                Try Boozang free for 7 days to automate tests and ship software
                with confidence.
              </p>
            </div>

            <form @submit.prevent="signingUp">
              <label
                >Name: <input type="text" required v-model="name" />
              </label>
              <label
                >Email address: <input type="email" required v-model="email" />
              </label>
              <label
                >Password:
                <input type="password" required v-model="password" /><span
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
          </div>
        </section>
        <section class="signup-lower">
          <div></div>
          <div class="login-link">
            <p>
              By signing up you agree to our <a href="">Terms of Service</a> and
              <a href="">Privacy Policy</a>
            </p>
            <p>
              Already have an account?
              <router-link :to="{ name: 'LogIn' }"> Login </router-link>
            </p>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "SignUp",
  setup(props) {
    const router = useRouter();
    const showPromo = ref(false);
    const showEurope = ref(false);
    const text = ref("");
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
      // console.log("users", newUsers);
      router.push("/");
    };
    //computed
    const regionText = computed(() => {
      if (showEurope.value) {
        text.value = "Switch to Region Region North America";
      } else {
        text.value = "Switch to Region Europe";
      }
      return text.value;
    });
    return {
      name,
      email,
      password,
      showPromo,
      showEurope,
      signingUp,
      regionText,
      users,
    };
  },
};
</script>

<style lang="scss">
.signup-main {
  position: relative;
  background: #fff;
  background-image: url("../assets/bg_shapes.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flag-section {
  position: absolute;
  top: 1rem;
  left: 2rem;
  .eu-flag,
  .canada-flag {
    height: 20px;
    display: block;
  }
  button {
    background: transparent;
    padding: 5px 0;
    font-size: 0.8rem;
    color: $lightGrey;
  }
}
.signup-section {
  a {
    color: $linkColor;
  }
  width: 820px;
  height: 520px;
  .signup-upper {
    // border-radius: $themeBorderRadius;

    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: $themeBoxShadow;
    @media all and (min-width: $md-min) {
      border-radius: $themeBorderRadius;
    }
  }
  .signup-left {
    padding: 2rem 4rem;
    background: linear-gradient(
      333.41deg,
      rgba(126, 93, 166, 0.54) 0%,
      rgba(126, 93, 166, 0) 100%
    );
    background: $blue;

    width: 45%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: $themeBoxShadow;
    display: none;
    @media all and (min-width: $md-min) {
      display: flex;
    }
    .logo {
      max-width: 200px;
    }
    .robot {
      max-width: 170px;
    }
    .signup-left-text {
      h1 {
        color: #fff;
        font-size: inherit;
        font-size: 1.5rem;
      }
      color: #fff;
    }
  }
  .signup-right {
    width: 55%;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
    color: $blue;
    .min-char {
      font-size: 0.7rem;
      font-style: italic;
      float: right;
      padding-bottom: 0.8rem;
      padding-top: 0.2rem;
    }
    h2 {
      color: $blue;
      margin-top: 0;
    }
    .signup-btn {
      clear: both;
      background: $blue;
      color: #fff;
      margin-top: 1.5rem;
      width: 100%;
      a {
        color: #fff;
      }
    }
    .divider {
      font-size: 0.6rem;
      letter-spacing: 1px;
      color: $lightGrey;
      padding: 0.89rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        width: 30%;
        padding-top: -0.5rem;
        border-top: 1px solid $lighterGrey;
      }
    }
    .social-login {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        max-width: 1.5rem;
        margin-right: 0.5rem;
      }
      .google-sign-in,
      .github-sign-in {
        width: 100%;
        padding: 0.3rem 1.1rem;
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid $lighterGrey;
        span {
          margin-top: 2px;
        }
      }
    }

    border-radius: $themeBorderRadius;
    @media all and (min-width: $md-min) {
      border-radius: none;
    }
  }
  .signup-lower {
    display: flex;
    justify-content: space-between;
    background: transparent;
    p {
      line-height: 1.4;
    }
    .login-link {
      width: 55%;
      padding: 1rem 4rem;

      font-size: 0.8rem;
      color: $lightGrey;
    }
  }
}
</style>
