<template>
  <section class="subheader" :class="{ blue: theme === 'home' }">
    <div class="container">
      <div class="subheader-items">
        <!-- slot -->
        <slot name="subheaderItems"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubHeader",
  props: ["theme"],
};
</script>

<style lang="scss">
.subheader {
  padding: 3.8rem $sectionPadding;
  background: $lighterGrey;
  min-height: 230px;
  .subheader-items {
    display: flex;
    flex-direction: column;
    @media all and (max-width: $xs-max) {
      text-align: center;
    }
    @media all and (min-width: $sm-min) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  h1 {
    font-size: 1.8rem;
    margin-top: 0;
  }
  p {
    line-height: 1.5;
  }
  .btn-link {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    margin-top: 2rem;
    text-align: center;
    color: #fff;
    background: $blue;
    border: 2px solid #fff;
    font-weight: 600;
    box-shadow: $themeBoxShadow;
    width: 8rem;
    &:hover {
      text-decoration: none;
      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
    }
    @media all and (max-width: $xs-max) {
      width: 80%;
      margin: 2rem auto;
    }
    @media all and (min-width: $sm-min) {
      margin-top: 0;
      width: auto;
    }
  }
  &.blue {
    background: $blue;
    color: #fff;
    background-image: url("../assets/mgm_banner.png");
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      color: #fff;
    }
  }
}
</style>
