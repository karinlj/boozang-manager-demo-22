<template>
  <main class="main">
    <div class="main-container">
      <div class="container-small">
        <h1>Manage your Boozang account</h1>

        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'SignUp' }">Log out </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Account",
};
</script>

<style></style>
