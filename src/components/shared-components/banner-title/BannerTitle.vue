<template>
  <div class="banner-title text-center">
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
  name: "BannerTitle",
  props: ["tagline", "title", "description", "className"],
};
</script>

<style lang="scss" scoped>
.banner-title {
  .tagline {
    text-transform: uppercase;
    color: #fff;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #fff;
  }

  p {
    margin: 0;
    color: #fff;
  }
}
</style>
