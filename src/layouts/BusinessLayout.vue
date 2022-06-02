<template>
  <app-header />
  <slot></slot>
  <app-footer />
</template>

<script>
import AppHeader from "@/components/layout-components/app-header/AppHeader.vue";
import AppFooter from "@/components/layout-components/app-footer/AppFooter.vue";
export default {
  components: { AppHeader, AppFooter },
  name: "BusinessLayout",
};
</script>

<style lang="scss" scoped></style>
