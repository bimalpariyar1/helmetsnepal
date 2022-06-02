<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <shiped-icon />
      </div>
      <h5>Retrived</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="returnItem.returnStatus" />
      </div>

      <div>
        <p>Refunded</p>
      </div>
      <h6>Package sucessfully Returned</h6>

      <div class="mt-2">
        <button class="btn btn-text text-primary">Cancel Return</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import ShipedIcon from "@/assets/svg/ShipedIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  components: { ShipedIcon, Stepper },
  name: "ReturnRetrived",
  props: ["returnItem"],
};
</script>

<style lang="scss" scoped></style>
