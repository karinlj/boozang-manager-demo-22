<template>
  <section class="menu">
    <HeaderBar :isOpen="isOpen" @toggleOpen="toggleOpen" />
    <Navbar :isOpen="isOpen" @toggleOpen="toggleOpen" />
  </section>
  <router-view />

  <Footer />
</template>

<script>
import { ref } from "@vue/reactivity";
import Navbar from "./layout/Navbar.vue";
import HeaderBar from "./layout/HeaderBar.vue";
import Footer from "./layout/Footer.vue";

export default {
  components: {
    Navbar,
    HeaderBar,
    Footer,
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = (btnIsOpen) => {
      isOpen.value = btnIsOpen;
      //console.log("isOpen", isOpen.value);
    };
    return {
      isOpen,
      toggleOpen,
    };
  },
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
    filter: brightness(160%);
  }
}
.container {
  max-width: 1300px;
  margin: 0 auto;
}
.container-small {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
