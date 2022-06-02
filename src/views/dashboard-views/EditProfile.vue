<template>
  <dashboard-layout>
    <FormKit
      type="form"
      :value="values"
      @submit="submitHandler"
      :actions="false"
    >
      <CCard class="p-4">
        <heading title="Account Information" />
        <div class="user-profile-imag">
          <div>
            <p>Profile Picture</p>
          </div>
          <img src="/img/avatars/thumb-1.jpg" alt="" />
          <div class="mt-4">
            <button class="btn btn-primary">Upload</button>
          </div>
        </div>
        <div class="info-inputs mt-4">
          <CRow>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="fname"
                label="First Name"
                placeholder="First Name"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="lname"
                label="Last Name"
                placeholder="Last Name"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="email"
                label="Email Address"
                placeholder="Email Address"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
          </CRow>
        </div>
      </CCard>
      <div class="mt-4">
        <CCard class="p-4 mb-3">
          <heading title="Delivery Address 1" />
          <CRow>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="addressLineOne1"
                label="Address Line 1"
                placeholder="Address Line 1"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="addressLineOne2"
                label="Address Line 2"
                placeholder="Address Line 2"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
          </CRow>
        </CCard>

        <CCard class="p-4 mb-3">
          <heading title="Delivery Address 2 (Optional)" />
          <CRow>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="addressLineTwo1"
                label="Address Line 1"
                placeholder="Address Line 1"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="addressLineTwo2"
                label="Address Line 2"
                placeholder="Address Line 2"
                validation-visibility="submit"
              />
            </CCol>
          </CRow>
        </CCard>
      </div>
      <div class="mt-4">
        <CCard class="p-4 mb-3">
          <heading title="Phone Number 1" />
          <CRow>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="phoneNumberOne1"
                label="Primary"
                placeholder="Phone Number 1"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="phoneNumberOne2"
                label="Secondary"
                placeholder="Phone Number 2"
                validation="required"
                validation-visibility="submit"
              />
            </CCol>
          </CRow>
        </CCard>

        <CCard class="p-4 mb-3">
          <heading title="Phone Number 2 (Optional)" />
          <CRow>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="phoneNumberTwo1"
                label="Primary"
                placeholder="Phone Number 1"
                validation-visibility="submit"
              />
            </CCol>
            <CCol md="6" class="mb-4">
              <FormKit
                type="text"
                name="phoneNumberTwo2"
                label="Secondary"
                placeholder="Phone Number 2"
                validation-visibility="submit"
              />
            </CCol>
          </CRow>
        </CCard>
      </div>

      <div class="mt-4" v-if="addresShowHide === false">
        <button class="btn btn-primary text-white py-2 px-3" type="submit">
          Save
        </button>
      </div>
    </FormKit>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
export default {
  name: "EditProfile",
  components: { DashboardLayout, Heading },

  data() {
    return {
      values: {
        fname: "John",
        lname: "Doe",
        username: "Ultimateuser",
        email: "test@gmail.com",
        addressLineOne1: "",
        addressLineTwo1: "",
        addressLineOne2: "",
        addressLineTwo2: "",
        phoneNumberOne1: "",
        phoneNumberOne2: "",
        phoneNumberTwo1: "",
        phoneNumberTwo2: "",
      },
      addresShowHide: false,
    };
  },
  methods: {
    submitHandler: function (values) {
      console.log(values);
    },

    handleAddress: function (e) {
      e.preventDefault();

      this.addresShowHide = true;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
