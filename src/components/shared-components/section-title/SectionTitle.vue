<template>
  <div :class="className ? 'section-title ' + className : 'section-title '">
    <div class="tagline mb-3">{{ tagline }}</div>
    <div class="mb-4">
      <h2>{{ title }}</h2>
    </div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["tagline", "title", "description", "className"],
};
</script>

<style lang="scss" scoped></style>
