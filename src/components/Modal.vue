<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ small: smallSize === 'true' }">
      <div>
        <slot>Header</slot>
      </div>
      <slot name="addForm"></slot>
      <slot name="editForm"></slot>
      <slot name="deleteConferm"></slot>
      <slot name="tokenConferm"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project", "smallSize"],

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
  width: 90%;
  min-height: 300px;
  padding: 1rem 2rem;
  background: white;
  border-radius: $themeBorderRadius;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 150px auto;
  &.small {
    min-height: 200px;
  }
  @media all and (max-width: $xs-max) {
    margin: 80px auto;
  }

  @media all and (min-width: $sm-min) {
    width: 420px;
  }
  button {
    padding: 0.6rem 0.9rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
  h1 {
    padding-bottom: 1rem;
    border-bottom: 1px solid $borderColor;
    margin-bottom: 0;
  }
  p {
    margin-top: 1rem;
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
