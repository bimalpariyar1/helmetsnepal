<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <confirm-icon />
      </div>
      <h5>Return received</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="returnItem.returnStatus" />
      </div>

      <div>
        <p>Return Accessing</p>
      </div>
      <h6>Hi John your return request has been received</h6>

      <div class="mt-2">
        <button class="btn btn-text text-primary">Cancel Return</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import ConfirmIcon from "@/assets/svg/ConfirmIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  components: { ConfirmIcon, Stepper },
  name: "ReturnRequestReceived",
  props: ["returnItem"],
};
</script>

<style lang="scss" scoped></style>
