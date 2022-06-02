<template>
  <div class="heading-tile pb-2 mb-3">
    <div>
      <h5>{{ title }}</h5>
      <p class="mt-2 mb-0">{{ description }}</p>
    </div>
    <div v-if="$slots.extra" class="heading-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: ["title", "description"],
};
</script>

<style lang="scss" scoped></style>
