<template>
  <CContainer>
    <div class="row justify-content-md-center">
      <CCol md="7" lg="5">
        <CCard class="p-4">
          <CAlert color="danger">
            Entered Email or Password is incorrect.
          </CAlert>
          <div class="d-flex flex-wrap justify-content-end">
            Not a memeber yet?
            <span>
              &nbsp;
              <router-link to="/register">Register now!</router-link>
            </span>
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
            <div class="mb-4">
              <FormKit
                type="password"
                name="password"
                label="Password"
                placeholder="Password"
                validation="required"
                validation-visibility="submit"
              />
            </div>
            <div
              class="d-flex flex-wrap align-items-center justify-content-between"
            >
              <router-link class="fw-bold" to="/forgot-password"
                >Forgot password?</router-link
              >
              <button
                class="btn btn-primary text-white py-2 px-3"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </FormKit>
          <CDropdownDivider class="my-4" />
          <div class="mb-2">Or sign in with</div>
          <div class="social-buttons">
            <CButton class="sigin-google" size="lg">
              <google-icon />
              <span class="ms-2"> Google </span>
            </CButton>
            <CButton class="sigin-facebook ms-3" size="lg">
              <facebook-icon />
              <span class="ms-2"> Facbook </span>
            </CButton>
          </div>
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
  name: "LoginForm",

  methods: {
    submitHandler: function (values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped></style>
