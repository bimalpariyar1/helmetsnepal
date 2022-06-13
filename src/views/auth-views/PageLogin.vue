<template>
  <auth-layout>
    <div class="mb-4">
      <auth-title title="Sing in to your account" />
    </div>
    <login-form />
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import AuthTitle from "@/components/shared-components/auth-title/AuthTitle.vue";
import LoginForm from "@/containers/auth/login-form/LoginForm.vue";
export default {
  components: { AuthLayout, AuthTitle, LoginForm, LoginForm },
  name: "PageLogin",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
