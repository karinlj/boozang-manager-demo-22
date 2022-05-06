<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
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
  // position: fixed;
  // width: 100%;
}
//new
//reset
html {
  box-sizing: border-box;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  position: relative;
}
body,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
p {
  line-height: 1.3;
}
ol,
ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
//general
h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
  // letter-spacing: 0.4px;
  color: $textColor;
}

.btn,
button,
.icon_btn,
.btn-link {
  &:hover {
    filter: brightness(90%);
  }
}
button,
.btn-link {
  display: block;
  border: 0;
  padding: 0.8rem 1.1rem;
  // margin-right: 0.5rem;
  border-radius: $themeBorderRadius;
  font-size: 0.9rem;
  transition: all 0.3s;
}
.btn-link {
  background: #fff;
  color: $blue;
  &:visited {
    background: #fff;
    color: $blue;
  }
  &:focus {
    background: #fff;
    color: $blue;
  }
  &:hover {
    text-decoration: none;
  }
}
.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media all and (min-width: $xxl-min) {
    max-width: 1500px;
  }
}
.container-small {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media all and (min-width: $xxl-min) {
    max-width: 1200px;
  }
}
.main-container {
  //padding-top: 3.5rem;
}

main {
  min-height: 500px;
}
//form
form {
  padding: 0.5rem 0;
  border-radius: 10px;
  background: white;
  label {
    color: $lightGrey;
    display: block;
    margin: 0.7rem 0;
    font-size: 0.8rem;
  }
  input,
  textarea {
    margin-top: 3px;
    padding: 0.5rem 0.5rem;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid $borderColor;
    color: $textColor;
    &:focus {
      outline: $blue solid 1px;
      border-radius: 5px;
    }
  }
  textarea {
    height: 100px;
    border: 1px solid $borderColor;
  }
  .btn-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    button {
      color: white;
      &.submit-btn {
        background: $btnGreen;
      }
      &.cancel-link {
        background: $lightGrey;
      }
    }
  }
}
</style>
