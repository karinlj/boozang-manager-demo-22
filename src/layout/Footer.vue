<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-link-container">
        <h3>Learning and Documentation</h3>
        <ul>
          <li><a href="">Homepage</a></li>
          <li><a href="">Videos</a></li>
          <li><a href="">Documentation</a></li>
        </ul>
      </div>
      <p class="copy">2022 Boozang Inc. all rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 2rem $sectionPadding;
  background: $blue;
  color: #fff;
  .footer-link-container {
    // margin-left: 10%;
    margin-bottom: 6rem;
    color: #fff;
  }
  h3 {
    color: #fff;
  }
  li {
    padding: 5px 0;
    a {
      color: $lightestBlue;
      font-size: 0.9rem;
    }
  }
  .copy {
    font-size: 0.8rem;
    color: $lightestBlue;
    padding-top: 1rem;
    border-top: 1px solid $borderColorBlue;
  }
}
</style>
