<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <confirm-icon />
      </div>
      <h5>Order Confirmed</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="orderStatus" />
      </div>

      <div>
        <p>Preparing</p>
      </div>
      <h6>Hi John! your order has been Placed</h6>

      <div class="mt-2">
        <button class="btn btn-text text-primary">Cancel Order</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import ConfirmIcon from "@/assets/svg/ConfirmIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  name: "OrderConfirmed",
  components: { ConfirmIcon, Stepper },
  props: ["orderStatus"],
};
</script>

<style lang="scss" scoped></style>
