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
import Navbar from "../layout/Navbar.vue";
import HeaderBar from "../layout/HeaderBar.vue";
import Footer from "../layout/Footer.vue";

export default {
  name: "AppContent",
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
