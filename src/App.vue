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
  font-family: "Roboto", Helvetica, sans-serif;
  // font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $textColor;
}
//reset
html {
  box-sizing: border-box;
  font-size: 1rem;
  letter-spacing: 0.1px;
}
* {
  box-sizing: border-box; //obs!
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
  color: $textColor;
}
.icon_btn {
  box-shadow: none;
}
button,
.btn-link {
  display: block;
  border: 0;
  padding: 0.8rem 1.1rem;
  border-radius: $themeBorderRadius;
  font-size: 0.9rem;
  transition: all 0.3s ease-in;
  box-shadow: $themeBoxShadowLight;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0) !important;
    text-decoration: none;
  }
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
}
.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media all and (min-width: $xxl-min) {
    max-width: 1300px;
  }
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
    margin-top: 5px;
    width: 100%;
    box-sizing: border-box;
    padding: 0.9rem 0.7rem;
    border: 1px solid $borderColor;
    border-radius: $themeBorderRadius;
    color: $textColor;
    &:focus {
      outline: $blue solid 1px;
      border-radius: 5px;
      border-radius: $themeBorderRadius;
    }
    &::placeholder {
      color: $middleGrey;
    }
  }
  input[type="checkbox"] {
    width: auto;
  }
  textarea {
    height: 100px;
    border: 1px solid $borderColor;
  }
  .checkbox-section {
    display: flex;
    align-items: center;
    input {
      margin-right: 0.5rem;
    }
  }
}
.btn-section {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  button {
    &.submit-btn {
      background: $btnGreen;
      color: #fff;
      &:disabled {
        background: $lightestGrey;
        color: lightGrey;
        cursor: not-allowed;
      }
    }
    &.delete-btn {
      background: $red;
      color: #fff;
    }
    &.cancel-link {
      background: $lightestGrey;
    }
  }
}
</style>
