<template>
  <auth-layout>
    <CContainer>
      <div class="row justify-content-md-center">
        <CCol md="7" lg="5">
          <div class="mb-4">
            <auth-title
              title="Join as a Customer or Vendor"
              description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
            />
          </div>
        </CCol>
      </div>
    </CContainer>
    <section class="signup-step">
      <register />
    </section>
  </auth-layout>
</template>

<script>
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CDropdownDivider,
  CButton,
} from "@coreui/vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import AuthTitle from "@/components/shared-components/auth-title/AuthTitle.vue";
import Register from "@/containers/auth/register/Register.vue";
export default {
  components: {
    AuthLayout,
    AuthTitle,

    CContainer,
    CRow,
    CCol,
    CCard,
    CDropdownDivider,
    CButton,
    Register,
  },
  name: "PageRegister",
};
</script>

<style lang="scss" scoped></style>
