<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <smile-icon />
      </div>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="orderStatus" />
      </div>

      <div>
        <p>Order Delivered</p>
      </div>
      <h6>Thank you</h6>
    </div>
  </CCard>
</template>

<script>
import Stepper from "../stepper/Stepper.vue";
import SmileIcon from "@/assets/svg/SmileIcon.vue";
export default {
  components: { Stepper, SmileIcon },
  name: "OrderDelivered",
  props: ["orderStatus"],
};
</script>

<style lang="scss" scoped></style>
