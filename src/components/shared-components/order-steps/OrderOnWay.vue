<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <van-icon />
      </div>

      <p>Estimated delivery time</p>
      <h5>within few hours</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="orderStatus" />
      </div>

      <div>
        <p>On the way</p>
      </div>
      <h6>Your order in on its way</h6>
    </div>
  </CCard>
</template>

<script>
import Stepper from "../stepper/Stepper.vue";
import VanIcon from "@/assets/svg/VanIcon.vue";
export default {
  components: { Stepper, VanIcon },
  name: "OrderOnWay",
  props: ["orderStatus"],
};
</script>

<style lang="scss" scoped></style>
