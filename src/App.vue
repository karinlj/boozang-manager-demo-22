<template>
  <!-- <section class="menu">
    <HeaderBar :isOpen="isOpen" @toggleOpen="toggleOpen" />
    <Navbar :isOpen="isOpen" @toggleOpen="toggleOpen" />
  </section> -->

  <router-view />

  <!-- <Footer /> -->
</template>

<script>
//import { ref } from "@vue/reactivity";
// import Navbar from "./layout/Navbar.vue";
// import HeaderBar from "./layout/HeaderBar.vue";
// import Footer from "./layout/Footer.vue";

export default {
  components: {
    // Navbar,
    // HeaderBar,
    // Footer,
  },
  // setup() {
  //   const isOpen = ref(false);
  //   const toggleOpen = (btnIsOpen) => {
  //     isOpen.value = btnIsOpen;
  //     //console.log("isOpen", isOpen.value);
  //   };
  //   return {
  //     isOpen,
  //     toggleOpen,
  //   };
  // },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color_gray_medium;
}
* {
  box-sizing: border-box; //obs!!
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.menu {
  position: fixed;
  width: 100%;
}

//new
//reset
html {
  box-sizing: border-box;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  position: relative;
}
body,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
p {
  line-height: 1.3;
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
//general
h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
  // letter-spacing: 0.4px;
  color: $textColor;
}
a,
.btn,
button,
.icon_btn {
  &:hover {
    opacity: 0.7;
  }
}
button {
  display: block;
  border: 0;
  padding: 0.8rem 1.1rem;
  margin-right: 0.5rem;
  border-radius: $themeBorderRadius;
  font-size: 0.9rem;
  transition: all 0.3s;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
  @media all and (min-width: $lg-min) {
    max-width: 1300px;
  }
}
.container-small {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  @media all and (min-width: $lg-min) {
    max-width: 1000px;
  }
}
.main-container {
  padding-top: 3.5rem;
}

//form
form {
  padding: 1rem 0;
  border-radius: 10px;
  background: white;
  label {
    color: $lightGrey; //$color_gray_darker;
    display: block;
    margin: 1.2rem 0 1rem 0;
    font-size: 0.8rem;
    // text-transform: uppercase;
  }
  input,
  textarea {
    margin-top: 5px;
    padding: 0.9rem 0.5rem;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid $borderColor; //$color_gray;
    color: $textColor;
  }
  textarea {
    height: 100px;
    border: 1px solid $borderColor; //$color_gray;
  }
  .btn-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    button {
      color: white;
      &.submit-btn {
        background: $btnGreen;
      }
      &.cancel-link {
        background: $lightGrey;
      }
    }
  }
}
</style>
