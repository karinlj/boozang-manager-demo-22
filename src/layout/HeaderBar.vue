<template>
  <header>
    <HeaderMenuBtn :isOpen="isOpen" @toggleOpen="toggleOpen" />
    <h1>Project Planner</h1>
  </header>
</template>

<script>
import HeaderMenuBtn from "./HeaderMenuBtn.vue";
export default {
  name: "HeaderBar",
  components: {
    HeaderMenuBtn,
  },
  props: ["isOpen"],
  methods: {
    toggleOpen(btnIsOpen) {
      console.log("AppHeader - isOpen", this.isOpen);
      this.$emit("toggleOpen", btnIsOpen);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

header {
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // z-index: 1;
  h1 {
    color: $color_green;
    font-size: 1.8rem;
  }
}
</style>
