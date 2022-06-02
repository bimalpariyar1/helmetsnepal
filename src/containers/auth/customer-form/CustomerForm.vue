<template>
  <CContainer>
    <div class="row justify-content-md-center">
      <div class="mb-4">
        <auth-title title="Become a customer" />
      </div>
      <CCol md="7" lg="5">
        <CCard class="p-4">
          <CAlert color="danger">
            Email already exists, please try another.
          </CAlert>
          <div class="d-flex flex-wrap justify-content-end">
            Already Have an Account?
            <span>
              &nbsp;
              <router-link to="/login">Login now!</router-link>
            </span>
          </div>
          <CDropdownDivider class="my-4" />
          <FormKit type="form" @submit="submitHandler" :actions="false">
            <div class="mb-4">
              <FormKit
                type="text"
                name="firstName"
                label="First Name"
                placeholder="First Name"
                validation="required"
                validation-visibility="submit"
              />
            </div>
            <div class="mb-4">
              <FormKit
                type="text"
                name="LastName"
                label="Last Name"
                placeholder="Last Name"
                validation="required"
                validation-visibility="submit"
              />
            </div>
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
                type="text"
                name="phone"
                label="Phone Number"
                placeholder="Phone Number"
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
            <div class="mb-4">
              <FormKit
                type="password"
                name="password2"
                label="Confirm Password"
                placeholder="Password"
                validation="required"
                validation-visibility="submit"
              />
            </div>
            <div
              class="d-flex flex-wrap align-items-center justify-content-between"
            >
              <router-link class="fw-bold" to="/register"
                >Go back Register</router-link
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
          <div class="mb-2">Or Register with</div>
          <div class="social-buttons d-flex">
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

import AuthTitle from "@/components/shared-components/auth-title/AuthTitle.vue";
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
    AuthTitle,
  },
  name: "CustomerForm",
};
</script>

<style lang="scss" scoped></style>
