<template>
  <a
    :class="
      size === 'lg'
        ? 'btn btn-primary px-4 py-3 ' + className
        : size === 'md'
        ? 'btn btn-primary px-4 py-2 ' + className
        : 'btn btn-primary px-3 py-2 ' + className
    "
    v-if="target === '_blank'"
    :href="to"
    target="_blank"
    >{{ text }}</a
  >
  <router-link
    v-else
    :class="
      size === 'lg'
        ? 'btn btn-primary px-4 py-3 ' + className
        : size === 'md'
        ? 'btn btn-primary px-4 py-2 ' + className
        : 'btn btn-primary px-3 py-2 ' + className
    "
    :to="to"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "AnchorButton",

  props: {
    className: String,
    to: String,
    target: String,
    text: String,
    size: {
      type: String,
      default: "large",
    },
  },
};
</script>

<style lang="scss" scoped></style>
