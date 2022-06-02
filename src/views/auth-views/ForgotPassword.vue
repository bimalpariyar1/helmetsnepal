<template>
  <auth-layout>
    <div class="mb-4">
      <auth-title
        title="Request Password Reset"
        description="Please provide your email in use, We wil send instructions to reset it."
      />
    </div>
    <section class="forgot-pass-form">
      <forgot-pass-form />
    </section>
  </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import AuthTitle from "@/components/shared-components/auth-title/AuthTitle.vue";
import ForgotPassForm from "@/containers/auth/forgot-pass-form/ForgotPassForm.vue";
export default {
  components: { AuthLayout, AuthTitle, ForgotPassForm },
  name: "ForgotPassword",
};
</script>

<style lang="scss" scoped></style>
