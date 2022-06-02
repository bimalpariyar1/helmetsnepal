<template>
  <section
    class="page-banner"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageBanner",
  props: ["image"],
};
</script>

<style lang="scss" scoped></style>
