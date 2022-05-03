<template>
  <main class="signup-main">
    <section class="flag-section">
      <div v-if="showEurope">
        <img src="../assets/eu.svg" alt="EU flag" class="eu-flag" />
        <a href="" role="button" @click="showEurope = !showEurope"
          >Switch to Region North America</a
        >
      </div>

      <div v-if="!showEurope">
        <img src="../assets/canada.svg" alt="Canada flag" class="canada-flag" />
        <a href="" role="button" @click="showEurope = !showEurope"
          >Switch to Region Europe</a
        >
      </div>
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

            <form>
              <label>Email address: <input type="email" required /> </label>
              <label
                >Password: <span class="forgot-pass">Forgot password?</span
                ><input type="password" required />
              </label>

              <button class="signup-btn" @click="signingUp">LogIn</button>
              <div class="divider">
                <span class=""></span>
                <p class="">OR</p>
                <span class=""></span>
              </div>
              <button class="google-sign-in" @click="signingUp">
                <span
                  ><img src="../assets/icon_google.png" alt="Google login"
                /></span>
                Sign In with Google
              </button>
            </form>
          </div>
        </section>
        <section class="signup-lower">
          <div></div>
          <div class="login-link">
            <p>Need a Boozang account? <a href="">Create account</a></p>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  name: "LogIn",
  setup(props) {
    const router = useRouter();
    const showPromo = ref(false);
    const showEurope = ref(false);

    const signingUp = () => {
      console.log("signup");
      router.push("/");
    };

    return {
      showPromo,
      showEurope,
      signingUp,
    };
  },
};
</script>

<style lang="scss" scoped>
// .signup-main {
//   position: relative;
//   background: #fff;
//   background-image: url("../assets/bg_shapes.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .flag-section {
//   position: absolute;
//   top: 1rem;
//   left: 2rem;
//   .eu-flag,
//   .canada-flag {
//     height: 20px;
//     display: block;
//     margin-bottom: 0.2rem;
//   }
//   a {
//     font-size: 0.8rem;
//     color: $lightGrey;
//   }
// }
.signup-section {
  a {
    color: $linkColor;
  }
  //   width: 850px;
  //   height: 550px;
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
    .forgot-pass {
      font-size: 0.8rem;
      font-style: italic;
      float: right;
      padding-bottom: 0.2rem;
      padding-top: 0.8rem;
    }
    // .min-char {
    //   font-size: 0.8rem;
    //   font-style: italic;
    //   float: right;
    //   padding-bottom: 0.8rem;
    //   padding-top: 0.2rem;
    // }
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
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        width: 40%;
        padding-top: -0.5rem;
        border-top: 1px solid $lighterGrey;
      }
    }
    .google-sign-in {
      width: 100%;
      padding: 0.5rem 1.1rem;
      display: flex;
      align-items: center;
      background: #fff;
      border: 1px solid $lighterGrey;
      img {
        max-width: 1.5rem;
        margin-right: 0.5rem;
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
