<template>
  <div
    class="horizontal-advt"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="advt-content">
      <div class="tagline mb-2">
        <span class="px-2 py-0"> Get Rewarded </span>
      </div>
      <div class="title mb-2">
        <h3>50% Cash Back Reward</h3>
      </div>
      <div class="description">
        Valid online & in-store with selected items.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdHorizontal",
  props: ["image"],
};
</script>

<style lang="scss" scoped></style>
