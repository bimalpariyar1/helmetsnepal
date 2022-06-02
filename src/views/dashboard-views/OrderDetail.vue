<template>
  <dashboard-layout>
    <CRow class="justify-content-center">
      <CCol md="4">
        <order-summary :order="orderDetail" />
      </CCol>
      <CCol md="8">
        <order-tracking :order="orderDetail" />
      </CCol>
    </CRow>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Heading from "@/components/shared-components/heading/Heading.vue";
import OrderSummary from "@/components/shared-components/order-summary/OrderSummary.vue";
import OrderTracking from "@/containers/e-commerce/order-tracking/OrderTracking.vue";
export default {
  name: "OrderDetail",
  components: { DashboardLayout, Heading, OrderSummary, OrderTracking },

  data() {
    return {
      orderDetail: {
        id: "#256JI22",
        amount: "Rs 6355.00",
        addressLineOne: "Kathmandu Nepal",
        addressLineTwo: "Baneshwor, Shantinagar",
        phone: "98454623252",
        orderStatus: 2,
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
