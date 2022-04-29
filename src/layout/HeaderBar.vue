<template>
  <header>
    <div class="container">
      <!-- <h1>Boozang Manager</h1> -->
      <nav>
        <img
          src="../assets/boozang-icon.png"
          alt="Boozang homepage"
          class="logo"
        />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>
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
  //padding: 1rem 4rem;
  height: 3.5rem;
  // z-index: 1;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .logo {
      min-width: 1.6rem;
      margin-right: 4.5rem;
    }
    nav {
      display: flex;
      align-items: center;
      ul {
        display: flex;
        align-items: center;
      }
      a {
        color: $textColor;
        margin-right: 2.5rem;
      }
    }
  }
}
</style>
