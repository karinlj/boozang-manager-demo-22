<template>
  <main class="signup-main">
    <section class="flag-section">
      <div v-if="showEurope">
        <img src="../assets/eu.svg" alt="EU flag" class="eu-flag" />
      </div>
      <div v-else>
        <img src="../assets/canada.svg" alt="Canada flag" class="canada-flag" />
      </div>
      <button @click="showEurope = !showEurope">{{ regionTextOutput }}</button>
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
              <!-- slot -->
              <slot name="header"></slot>
            </div>
            <!-- slot -->
            <slot name="form"></slot>
          </div>
        </section>
        <section class="signup-lower">
          <div></div>
          <div class="small-text">
            <!-- slot -->
            <slot name="smallText"></slot>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

export default {
  name: "SignUp",
  setup(props) {
    const showEurope = ref(false);
    const regionText = ref("");

    //computed
    const regionTextOutput = computed(() => {
      if (showEurope.value) {
        regionText.value = "Switch to Region North America";
      } else {
        regionText.value = "Switch to Region Europe";
      }
      return regionText.value;
    });
    return {
      showEurope,
      regionTextOutput,
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
  padding: 1rem;
  width: 100%;
  height: auto;
  @media all and (min-width: $sm-min) {
    width: 410px;
    margin: 0 auto;
  }
  @media all and (min-width: $md-min) {
    width: 800px;
    height: 520px;
  }
  a {
    color: $linkColor;
  }
  .signup-upper {
    display: flex;
    justify-content: space-between;
    background: #fff;
    box-shadow: $themeBoxShadow;
    border-radius: $themeBorderRadius;
  }
  .signup-left {
    padding: 2rem 3rem;
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
      border-top-left-radius: $themeBorderRadius;
      border-bottom-left-radius: $themeBorderRadius;
    }
    .logo {
      max-width: 200px;
    }
    .robot {
      max-width: 170px;
      padding: 1.5rem 0;
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
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color: $blue;
    border-top-right-radius: $themeBorderRadius;
    border-bottom-right-radius: $themeBorderRadius;
    @media all and (max-width: $xs-max) {
      padding: 2rem 1.2rem;
    }
    @media all and (min-width: $sm-min) {
      padding: 2rem 3rem;
    }
    @media all and (min-width: $md-min) {
      width: 55%;
    }
    h2 {
      color: $blue;
      margin-top: 0;
      margin-bottom: 0;
      @media all and (min-width: $sm-min) {
        margin-bottom: 1rem;
      }
    }
    p {
      display: none;
      @media all and (min-width: $sm-min) {
        display: block;
      }
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
  }
  .signup-lower {
    display: flex;
    justify-content: space-between;
    background: transparent;
    p {
      line-height: 1.4;
    }
    .small-text {
      width: 100%;
      padding: 1rem;
      font-size: 0.8rem;
      color: $lightGrey;
      @media all and (min-width: $sm-min) {
        padding: 1rem 2rem;
      }
      @media all and (min-width: $md-min) {
        width: 55%;
        padding: 1rem 3rem;
      }
    }
  }
}
</style>
