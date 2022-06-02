<template>
  <div class="media-list-item">
    <div class="d-flex">
      <div class="media-list-item-image flex-shrink-0">
        <img :src="image" alt="John Doe" class="me-5" />
      </div>
      <div class="flex-grow-1 ms-3">
        <h5>{{ title }}</h5>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaListItem",
  props: ["image", "title", "description"],
};
</script>

<style lang="scss" scoped></style>
