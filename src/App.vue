<template>
  <section class="menu">
    <HeaderBar :isOpen="isOpen" @toggleOpen="toggleOpen" />
    <Navbar :isOpen="isOpen" />
  </section>
  <main>
    <router-view />
  </main>
</template>

<script>
import Navbar from "./layout/Navbar.vue";
import HeaderBar from "./layout/HeaderBar.vue";

export default {
  components: {
    Navbar,
    HeaderBar,
  },
  data() {
    return {
      //obs!!
      isOpen: false,
    };
  },
  methods: {
    toggleOpen(btnIsOpen) {
      this.isOpen = btnIsOpen;
      console.log("this.isOpen", this.isOpen);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";

body {
  background: $color_gray_light;
  margin: 0;
}
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
main {
  max-width: 600px;
  margin: 0 auto;
  padding-top: 6rem;
}
</style>
