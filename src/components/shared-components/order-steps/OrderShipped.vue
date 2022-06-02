<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <shiped-icon />
      </div>

      <p>Estimated delivery time</p>
      <h5>within 1 day</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="orderStatus" />
      </div>

      <div>
        <p>Shipped</p>
      </div>
      <h6>Hi John! your order has been accepted</h6>

      <div class="text-danger">
        From this point onward you cannot cancel order!
      </div>
    </div>
  </CCard>
</template>

<script>
import ShipedIcon from "@/assets/svg/ShipedIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  components: { ShipedIcon, Stepper },
  name: "OrderShipped",
  props: ["orderStatus"],
};
</script>

<style lang="scss" scoped></style>
