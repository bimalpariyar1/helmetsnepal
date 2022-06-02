<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <sad-icon />
      </div>
      <h5>Return Request Acceped</h5>

      <div class="tracking-steps py-4">
        <stepper :orderStatus="returnItem.returnStatus" />
      </div>

      <div>
        <p>We are working on it</p>
      </div>
      <h6>We will notify soon for package pickup</h6>

      <div class="mt-2">
        <button class="btn btn-text text-primary">Cancel Return</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import SadIcon from "@/assets/svg/SadIcon.vue";
import Stepper from "../stepper/Stepper.vue";
export default {
  components: { SadIcon, Stepper },
  name: "ReturnAccepted",
  props: ["returnItem"],
};
</script>

<style lang="scss" scoped></style>
