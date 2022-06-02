<template>
  <div class="image-card">
    <img alt="" :src="cardContent.image" />
    <div class="overlay"></div>
    <div class="card-content">
      <div class="tagline mb-3">{{ cardContent.tagline }}</div>
      <h4>{{ cardContent.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: { cardContent: Object },
};
</script>

<style lang="scss" scoped></style>
