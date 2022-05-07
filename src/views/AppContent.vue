<template>
  <HeaderBar />
  <router-view />
  <Footer />
</template>

<script>
import HeaderBar from "../layout/HeaderBar.vue";
import Footer from "../layout/Footer.vue";

export default {
  name: "AppContent",
  components: {
    HeaderBar,
    Footer,
  },
  setup() {},
};
</script>
