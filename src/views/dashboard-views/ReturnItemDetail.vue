<template>
  <dashboard-layout>
    <CRow class="justify-content-center">
      <CCol md="4">
        <order-summary :order="returnItem" />
      </CCol>
      <CCol md="8"> <return-tracking :returnItem="returnItem" /> </CCol>
    </CRow>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import OrderSummary from "@/components/shared-components/order-summary/OrderSummary.vue";
import ReturnTracking from "@/containers/e-commerce/return-tracking/ReturnTracking.vue";

export default {
  name: "RetrunItemDetail",
  components: {
    DashboardLayout,
    Heading,
    OrderSummary,
    ReturnTracking,
    ReturnTracking,
  },
  data() {
    return {
      returnItem: {
        id: "256JI22",
        amount: "Rs 6355.00",
        addressLineOne: "Kathmandu Nepal",
        addressLineTwo: "Baneshwor, Shantinagar",
        phone: "98454623252",
        returnStatus: 6,
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
