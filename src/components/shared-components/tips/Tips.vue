<template>
  <div class="notice-tips">
    <div class="content">
      <h6>Tips to buy safe helmets!</h6>
      <p>
        Lorem ipsum dolor sit amet, consect etuer adipiscing elit. Aenean
        commodo ligula eget dolor.
      </p>
      <div class="action">
        <router-link to="/">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tips",
  props: ["title", "description", "url"],
};
</script>

<style lang="scss" scoped></style>
