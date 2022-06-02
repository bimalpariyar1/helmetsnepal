<template>
  <div class="callout-solid p-4">
    <div>
      <img :src="callout.icon" alt="" />
    </div>
    <div>
      <h5 class="my-3">
        {{ callout.title }}
      </h5>
      <p class="m-0">{{ callout.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalloutTwo",
  props: ["callout"],
};
</script>

<style lang="scss" scoped></style>
