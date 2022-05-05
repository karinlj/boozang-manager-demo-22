<template>
  <main>
    <SubHeader>
      <template v-slot:subheaderItems>
        <div>
          <h1>Manage your Boozang account</h1>
        </div>
      </template>
    </SubHeader>

    <section class="account">
      <div class="container-small">
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'LogIn' }">Log out </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </main>
</template>

<script>
import SubHeader from "../components/SubHeader.vue";

export default {
  name: "Account",
  components: { SubHeader },
};
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 3rem;
  min-height: 800px;
  .account {
    padding: 2rem $sectionPadding;
  }
}
</style>
