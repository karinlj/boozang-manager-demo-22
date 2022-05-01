<template>
  <main class="signin-main">
    <div class="container-small">
      <section class="signin-section">
        <div class="signin-left">
          <div class="signin-left-text">
            <h1>Testing made simple</h1>
            <p>Automation tool for developers and non-developers.</p>
          </div>
        </div>
        <div class="signin-right">
          <div class="signin-text-right">
            <h2>Codeless testing that works</h2>
            <p>
              Try Boozang free for 7 days to automate tests and ship software
              with confidence.
            </p>
          </div>

          <form>
            <label>Email address: <input type="email" required /> </label>
            <label>Password: <input type="password" required /> </label>

            <button>Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style lang="scss" scoped>
.signin-main {
  background: #fff;
  background-image: url("../assets/bg_shapes.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
.signin-section {
  width: 900px;
  height: 600px;
  box-shadow: $themeBoxShadow;

  display: flex;
  justify-content: space-between;
  .signin-left {
    background: $blue;
    background-image: url("../assets/sign_in_pic.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 45%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .signin-left-text {
      h1 {
        color: #fff;
      }
      padding: 3rem;
      color: #fff;
    }
  }
  .signin-right {
    width: 55%;
    flex-direction: column;
    align-items: center;
    padding: 3rem 4rem;
    color: $blue;
    h2 {
      color: $blue;
    }
  }
}
</style>
