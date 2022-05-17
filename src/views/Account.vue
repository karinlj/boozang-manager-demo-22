<template>
  <main>
    <SubHeader :theme="subheaderTheme">
      <template v-slot:subheaderItems>
        <div>
          <h1>My Boozang account</h1>
          <p>Update profile, change password, get token or log out.</p>
        </div>
      </template>
    </SubHeader>

    <section class="account">
      <div class="container">
        <section class="account-profile">
          <h2>Profile</h2>
          <form @submit.prevent="">
            <label
              >Email <input type="email" required v-model="email" />
            </label>
            <label class="password"
              >Password<input type="password" required v-model="password" />
            </label>
            <div class="btn-section">
              <button class="submit-btn">Update profile</button>
            </div>
          </form>
        </section>

        <section class="change-password">
          <h2>Change Password</h2>
          <form @submit.prevent="">
            <label
              >Current password
              <input type="password" required v-model="password" />
            </label>
            <label class=""
              >New Password<input type="password" required v-model="password" />
            </label>
            <label class=""
              >Conferm Password<input
                type="password"
                required
                v-model="password"
              />
            </label>
            <div class="btn-section">
              <button class="submit-btn">Save password</button>
            </div>
          </form>
        </section>

        <section class="get-token">
          <h2>Get token</h2>
          <form @submit.prevent="">
            <label
              >Password
              <input type="password" required v-model="password" />
            </label>
            <div class="btn-section">
              <button class="submit-btn" @click="toggleTokenModal">
                Get token
              </button>
            </div>
          </form>
          <!-- delete -->
          <div v-if="showTokenModal">
            <Modal @closing="toggleTokenModal" :smallSize="smallModalSize">
              <h1>Your token</h1>
              <template v-slot:tokenConferm>
                <p>Token number...</p>
                <div class="btn-section">
                  <button
                    type="button"
                    class="submit-btn"
                    @click="showTokenModal = !showTokenModal"
                  >
                    OK
                  </button>
                </div>
              </template>
            </Modal>
          </div>
        </section>

        <section class="log-out">
          <h2>Log out?</h2>
          <div class="btn-section">
            <button class="submit-btn">
              <router-link :to="{ name: 'LogIn' }" class=""
                >Log out
              </router-link>
            </button>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import Modal from "../components/Modal.vue";
import SubHeader from "../components/SubHeader.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "Account",
  components: { SubHeader, Modal },
  setup(props) {
    const subheaderTheme = ref("home");
    const smallModalSize = ref("true");
    const email = ref("");
    const password = ref("");
    const showTokenModal = ref(false);

    const toggleTokenModal = () => {
      if (password.value) {
        showTokenModal.value = !showTokenModal.value;
      }
    };
    return {
      subheaderTheme,
      email,
      password,
      showTokenModal,
      toggleTokenModal,
      smallModalSize,
    };
  },
};
</script>

<style lang="scss">
main {
  padding-bottom: 3rem;
  min-height: 800px;
  .account-profile,
  .change-password,
  .get-token {
    margin-bottom: 4rem;
    width: 100%;
    @media all and (min-width: $sm-min) {
      width: 80%;
    }
    @media all and (min-width: $md-min) {
      width: 60%;
    }
    @media all and (min-width: $lg-min) {
      width: 50%;
    }
    @media all and (min-width: $xl-min) {
      width: 40%;
    }
  }
}
.account {
  padding: 2rem $sectionPadding;
  .btn-section {
    margin-top: 1rem;
    justify-content: flex-start;
    button {
      padding: 0.6rem 0.9rem;
      font-size: 0.8rem;
      &.submit-btn {
        a {
          color: #fff;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
  .modal {
    .btn-section {
      justify-content: flex-end;
      button {
        margin-right: 0;
      }
    }
  }
}
</style>
