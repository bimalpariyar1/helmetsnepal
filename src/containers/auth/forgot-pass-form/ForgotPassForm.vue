<template>
  <CContainer>
    <div class="row justify-content-md-center">
      <CCol md="7" lg="5">
        <CCard class="p-4">
          <div class="text-end">
            Go back to
            <router-link to="/login">Login</router-link>
          </div>
          <CDropdownDivider class="my-4" />
          <FormKit type="form" @submit="submitHandler" :actions="false">
            <div class="mb-4">
              <FormKit
                type="text"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                validation="required"
                validation-visibility="submit"
              />
            </div>
            <div
              class="d-flex flex-wrap align-items-center justify-content-end"
            >
              <button
                class="btn btn-primary text-white py-2 px-3 forgot-pass-btn"
                type="submit"
              >
                Send Email
              </button>
            </div>
          </FormKit>
        </CCard>
      </CCol>
    </div>
  </CContainer>
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
import GoogleIcon from "@/assets/svg/GoogleIcon.vue";
import FacebookIcon from "@/assets/svg/FacebookIcon.vue";
export default {
  components: {
    CContainer,
    CRow,
    CCol,
    CCard,
    CDropdownDivider,
    CButton,
    GoogleIcon,
    FacebookIcon,
  },
  name: "ForgotPassForm",

  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped></style>
