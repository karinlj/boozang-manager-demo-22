<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div>
        <slot>Header</slot>
      </div>
      <slot name="addForm"></slot>
      <slot name="editForm"></slot>
      <slot name="deleteConferm"></slot>
    </div>
  </div>
</template>

<script>
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
  width: 420px;
  min-height: 300px;
  padding: 1rem 2rem;
  margin: 150px auto;
  background: white;
  border-radius: $themeBorderRadius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    padding: 0.7rem 0.9rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
  h1 {
    padding-bottom: 1rem;
    border-bottom: 1px solid $borderColor;
  }
  p {
    font-size: 0.95rem;
    color: $lightGrey;
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
