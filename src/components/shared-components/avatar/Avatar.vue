<template>
  <div :class="'d-flex avatar ' + className">
    <div class="avatar-image me-3">
      <img alt="" :src="image" />
    </div>
    <div class="avatar-content">
      <div class="avatar-title">
        <span>{{ title }}</span>
      </div>
      <div class="divider my-1"></div>
      <div class="avatar-subtitle">
        <span>{{ subTile }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: ["className", "image", "title", "subTile"],
};
</script>

<style lang="scss" scoped></style>
