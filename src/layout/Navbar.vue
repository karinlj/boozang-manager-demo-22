<template>
  <nav
    class="nav"
    :class="{ open: isOpen === true }"
    aria-label="Main navigation"
  >
    <ul>
      <!-- <li>
        <router-link :to="{ name: 'Home' }">
          <div @click="handleClick">Home</div>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AddProject' }">
          <div @click="handleClick">AddProject</div>
        </router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Navbar",
  props: ["isOpen"],
  setup(props, context) {
    const btnIsOpen = ref(false);

    const handleClick = () => {
      //obs!!
      btnIsOpen.value = props.isOpen;
      btnIsOpen.value = !btnIsOpen.value;
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
.nav {
  //position: absolute;
  height: 100%;
  position: fixed; //obs!!
  top: 0;
  right: -500px; //obs!!
  z-index: 0; //obs!!  //same parent as vego_burger
  background: $lightGrey;
  height: 100%;
  width: 500px; //obs!!
  padding: 4rem;
  padding-top: 6rem;
  transition: right ease-in 0.3s; //obs!!
  text-align: left;
  a {
    color: $darkBlue;
    display: block;
    margin-bottom: 0.7rem;
    text-decoration: none;
    &:hover {
      color: $green;
      text-decoration: underline;
    }
    &.router-link-active {
      color: $green;
      padding-bottom: 4px;
    }
  }
  &.open {
    right: 0;
  }
}
</style>
