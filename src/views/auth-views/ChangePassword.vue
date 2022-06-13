<template>
  <auth-layout>
    <CContainer>
      <div class="row justify-content-md-center">
        <CCol md="7" lg="5">
          <div class="mb-4">
            <auth-title title="Change Password" />
          </div>
        </CCol>
      </div>
    </CContainer>
    <section class="change-pass-form">
      <change-pass-form />
    </section>
  </auth-layout>
</template>

<script>
import { CContainer, CCol } from "@coreui/vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AuthTitle from "@/components/shared-components/auth-title/AuthTitle.vue";
import ChangePassForm from "@/containers/auth/change-pass-form/ChangePassForm.vue";

export default {
  components: {
    CContainer,
    CCol,
    AuthLayout,
    AuthTitle,
    ChangePassForm,
    ChangePassForm,
  },
  name: "ChangePassword",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
