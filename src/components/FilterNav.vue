<template>
  <nav class="filter_nav" aria-label="Filter navigation">
    <button
      @click="updateFilter('all')"
      :class="{ active: current === 'all' }"
      aria-label="View all projects"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: current === 'completed' }"
      aria-label="View completed projects"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: current === 'ongoing' }"
      aria-label="View ongoing projects"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: ["current"],
  setup(props, context) {
    const updateFilter = (filterBy) => {
      context.emit("filterChange", filterBy);
    };
    return {
      updateFilter,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter_nav {
  button {
    background: none;
    border: none;
    color: $color_gray_medium;
    font-size: 12px;
    text-transform: uppercase;
    margin-right: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    &.active {
      color: $green;
    }
    &:hover {
      color: $green;
    }
  }
}
</style>
