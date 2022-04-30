<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div>
        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <slot>Default content</slot>
      </div>

      <div class="actions">
        <slot name="links"></slot>
      </div>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: ["header", "text"],

  setup(props, context) {
    const closeModal = () => {
      context.emit("closing");
    };

    return {
      closeModal,
    };
  },
};
</script>

<style lang="scss">
.modal {
  width: 500px;
  height: 600px;
  padding: 1.5rem 2rem;
  margin: 100px auto;
  background: white;
  border-radius: $themeBorderRadius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    // color: white;
  }
  .actions {
    a {
      color: white;
    }
  }
  .actions {
    text-align: center;
    margin: 2rem 0 1rem 0;
    a {
      color: #333;
      padding: 0.5rem;
      border: 1px solid rgb(218, 215, 215);
      border-radius: 4px;
      text-decoration: none;
      margin: 0.5rem;
    }
  }
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}
</style>
