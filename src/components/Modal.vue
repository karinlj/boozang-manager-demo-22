<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div>
        <slot>Header</slot>
      </div>
      <slot name="editForm"></slot>
      <slot name="deleteConferm"></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: ["project"],

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
  width: 400px;
  min-height: 250px;
  padding: 1.5rem 2.5rem;
  margin: 100px auto;
  background: white;
  border-radius: $themeBorderRadius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
  }
}
.backdrop {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}
</style>
