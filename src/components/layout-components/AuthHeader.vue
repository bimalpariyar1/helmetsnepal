<template>
  <header class="auth-header border-bottom py-2">
    <CContainer fluid>
      <div class="auth-header-content">
        <logo />
        <auth-nav />
      </div>
    </CContainer>
  </header>
</template>

<script>
import { CContainer } from "@coreui/vue";
import AuthNav from "./AuthNav.vue";
import Logo from "./Logo.vue";
export default {
  components: { CContainer, Logo, AuthNav },
  name: "AuthHeader",
};
</script>

<style lang="scss" scoped></style>
