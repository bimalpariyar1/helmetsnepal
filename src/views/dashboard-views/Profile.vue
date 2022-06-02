<template>
  <dashboard-layout>
    <div class="user-profile-content">
      <CCard class="p-4">
        <div class="user-infos">
          <heading title="Account Information">
            <template #extra>
              <router-link to="/">Edit</router-link>
            </template>
          </heading>

          <div class="user-profile-imag mb-5">
            <img src="/img/avatars/thumb-1.jpg" alt="" />
          </div>
          <CRow>
            <CCol md="6">
              <info-tile title="Contact Information">
                <template #tile-content>
                  <p class="m-0">Alex Driver</p>
                  <p class="m-0">ExampeAdress@gmail.com</p>
                  <p class="m-0">98456253211</p>
                </template>
                <template #extra>
                  <router-link to="/">Edit</router-link>
                </template>
              </info-tile>
            </CCol>
            <CCol md="6">
              <info-tile title="Newsletters">
                <template #tile-content>
                  <p class="m-0">You have not subscribed to our newsletter.</p>
                </template>
                <template #extra>
                  <router-link to="/">Edit</router-link>
                </template>
              </info-tile>
            </CCol>
          </CRow>
        </div>

        <div class="addresses mt-5">
          <heading title="Address Book">
            <template #extra>
              <router-link to="/">Edit</router-link>
            </template>
          </heading>
          <CRow>
            <CCol md="6">
              <info-tile title="Address 1">
                <template #tile-content>
                  <p class="m-0">Kahtmandu Nepal</p>
                  <p class="m-0">Baneshwor, Shantinagar</p>
                </template>
                <template #extra>
                  <router-link to="/">Edit Address</router-link>
                </template>
              </info-tile>
            </CCol>
            <CCol md="6">
              <info-tile title="Address 2">
                <template #tile-content>
                  <p class="m-0">Kathmandu Nepal</p>
                  <p class="m-0">Chabahil, Dhugedhara</p>
                </template>
                <template #extra>
                  <router-link to="/">Edit Address</router-link>
                </template>
              </info-tile>
            </CCol>
          </CRow>
        </div>
      </CCard>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import InfoTile from "@/components/shared-components/info-tile/InfoTile.vue";
export default {
  components: { DashboardLayout, Heading, InfoTile },
  name: "Profile",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
