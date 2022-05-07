<template>
  <header>
    <div class="container">
      <nav>
        <img
          src="../assets/boozang-icon.png"
          alt="Boozang homepage"
          class="logo"
        />
        <ul>
          <li>
            <router-link :to="{ name: 'Home' }"> Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Account' }">Account </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  components: {},
};
</script>

<style lang="scss" scoped>
header {
  padding: 0 $sectionPadding;
  height: 3.5rem;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .logo {
      min-width: 1.6rem;
      margin-right: 2.5rem;
      @media all and (min-width: $md-min) {
        margin-right: 4.5rem;
      }
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
        margin-right: 1.5rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1px;
        padding-bottom: 2px;
        border-bottom: 3px solid transparent;
        transition: border-color 0.2s ease-in;
        @media all and (min-width: $md-min) {
          margin-right: 2.1rem;
        }
        &:hover {
          text-decoration: none;
          border-bottom: 3px solid $lightblue;
        }
        &.router-link-exact-active {
          border-bottom: 3px solid $lightblue;
        }
      }
    }
  }
}
</style>
