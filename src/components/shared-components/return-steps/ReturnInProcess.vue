<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <inprocess-icon />
      </div>
      <h5>In Process</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="returnItem.returnStatus" />
      </div>

      <div>
        <p>We are working on it</p>
      </div>
      <h6>We are checking if it a valid return</h6>

      <div class="mt-2">
        <button class="btn btn-text text-primary">Cancel Return</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import InprocessIcon from "@/assets/svg/InprocessIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  components: { InprocessIcon, Stepper },
  name: "ReturnInProcess",
  props: ["returnItem"],
};
</script>

<style lang="scss" scoped></style>
