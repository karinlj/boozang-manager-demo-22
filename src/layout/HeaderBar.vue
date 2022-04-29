<template>
  <header>
    <div class="container">
      <h1>Boozang Manager</h1>
      <HeaderMenuBtn :isOpen="isOpen" @toggleOpen="toggleOpen" />
    </div>
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
  setup(props, context) {
    const toggleOpen = (btnIsOpen) => {
      context.emit("toggleOpen", btnIsOpen);
    };
    return {
      toggleOpen,
    };
  },
};
</script>

<style lang="scss">
header {
  // padding: 1rem 4rem;

  // z-index: 1;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: $color_green;
    font-size: 1.8rem;
  }
}
</style>
