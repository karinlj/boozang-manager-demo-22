<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div>
        <slot>Header</slot>
      </div>
      <slot name="editForm"></slot>
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
  width: 500px;
  height: 500px;
  padding: 1.5rem 3.5rem;
  margin: 100px auto;
  background: white;
  border-radius: $themeBorderRadius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
