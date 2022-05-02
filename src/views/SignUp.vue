<template>
  <main class="signup-main">
    <div class="container-small">
      <section class="signup-section">
        <section class="signup-upper">
          <div class="signup-left">
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
              <label>Password: <input type="password" required /> </label>

              <button class="signup-btn" @click="signingUp">Sign Up</button>
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
            <p>
              By signing up you agree to our <a href="">Terms of Service</a> and
              <a href="">Privacy Policy</a>
            </p>
            <p>Already have an account? <a href="">Login</a></p>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "signup",
  setup(props) {
    const router = useRouter();
    const signingUp = () => {
      console.log("signup");
      router.push("/");
    };
    return {
      signingUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.signup-main {
  background: #fff;
  background-image: url("../assets/bg_shapes.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signup-section {
  a {
    color: $linkColor;
  }
  width: 850px;
  height: 550px;
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
    background-image: url("../assets/sign_in_pic.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 45%;
    //display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .signup-left-text {
      h1 {
        color: #fff;
      }
      padding: 1.5rem 2.5rem 2.5rem 2.5rem;
      color: #fff;
    }
    box-shadow: $themeBoxShadow;
    display: none;
    @media all and (min-width: $md-min) {
      display: flex;
    }
  }
  .signup-right {
    width: 55%;
    flex-direction: column;
    align-items: center;
    padding: 3rem 4rem;
    color: $blue;
    h2 {
      color: $blue;
    }
    .signup-btn {
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
