<template>
  <div class="item-group-title d-md-flex d-sm-block align-items-center">
    <h2>{{ title }}</h2>
    <div class="title-right mt-sm-2 mt-md-0">
      <span class="mx-4 d-none d-sm-none d-md-inline-flex">|</span>
      <span class="tagline">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemGroupTitle",
  props: ["title", "subTitle"],
};
</script>

<style lang="scss" scoped></style>
