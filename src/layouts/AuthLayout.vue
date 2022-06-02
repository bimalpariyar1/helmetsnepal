<template>
  <auth-header />
  <section class="mt-5">
    <slot></slot>
  </section>
  <auth-footer />
</template>

<script>
import AuthHeader from "@/components/layout-components/AuthHeader.vue";
import AuthFooter from "@/components/layout-components/AuthFooter.vue";
export default {
  name: "AuthLayout",
  components: {
    AuthHeader,
    AuthFooter,
  },

  created() {
    const body = document.querySelector("body");
    body.className = "auth-body";
  },
};
</script>

<style lang="scss" scoped></style>
