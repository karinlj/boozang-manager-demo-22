<template>
  <button
    class="vego_burger"
    :class="{ open: isOpen === true }"
    aria-label="Menu"
    :aria-expanded="[isOpen]"
    @click="handleClick"
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HeaderMenuBtn",
  props: ["isOpen"],

  setup(props, context) {
    const btnIsOpen = ref(false);

    const handleClick = () => {
      //obs!!
      btnIsOpen.value = props.isOpen;
      btnIsOpen.value = !btnIsOpen.value;
      // console.log("AppHeaderBtn - btnIsOpen:", btnIsOpen.value);
      //obs!
      context.emit("toggleOpen", btnIsOpen.value);
    };
    return {
      btnIsOpen,
      handleClick,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/_variables.scss";

.vego_burger {
  font-size: 1.2em;
  z-index: 1; //obs!!  //same parent as nav
  border: none;
  background: transparent;
  span {
    display: block;
    width: 30px;
    height: 2px;
    background: $color_gray_dark;
    margin-bottom: 5px;
    transition: all ease-in 0.3s; //obs!!
  }
  &:hover {
    span {
      background: $color_green;
    }
  }
  &.open {
    //obs!!
    span:nth-child(1) {
      transform: rotate(45deg) translateY(10px);
    }
    span:nth-child(2) {
      opacity: 0;
      width: 0;
    }
    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-10px);
    }
  }
}
</style>
