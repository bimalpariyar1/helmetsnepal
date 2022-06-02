<template>
  <div class="text-center general-callout">
    <div class="call-icon mb-4">
      <img :src="callout.icon" alt="" />
    </div>
    <div class="call-content">
      <h4>{{ callout.title }}</h4>
      <p>{{ callout.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Callout",
  props: ["callout"],
};
</script>

<style lang="scss" scoped></style>
