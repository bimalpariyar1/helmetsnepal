<template>
  <div class="auth-title text-center">
    <h4>{{ title }}</h4>
    <template v-if="description">
      <p>{{ description }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "AuthTtitle",
  props: ["title", "description"],
};
</script>

<style lang="scss" scoped></style>
