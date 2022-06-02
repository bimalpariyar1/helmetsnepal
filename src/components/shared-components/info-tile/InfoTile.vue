<template>
  <div>
    <h6>{{ title }}</h6>
    <div>
      <slot name="tile-content"></slot>
    </div>
    <div v-if="$slots.extra" class="mt-4">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoTile",
  props: ["title"],
};
</script>

<style lang="scss" scoped></style>
