<template>
  <app-header />
  <section class="py-5 mb-5 dash-body">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="3">
          <dashboard-nav />
        </CCol>
        <CCol md="9">
          <slot></slot>
        </CCol>
      </CRow>
    </CContainer>
  </section>
  <app-footer />
</template>

<script>
import DashboardNav from "@/components/shared-components/dash-nav/DashboardNav.vue";
import AppHeader from "@/components/layout-components/app-header/AppHeader.vue";
import AppFooter from "@/components/layout-components/app-footer/AppFooter.vue";
export default {
  components: { DashboardNav, AppHeader, AppFooter },
  name: "DashboardLayout",
};
</script>

<style lang="scss" scoped></style>
