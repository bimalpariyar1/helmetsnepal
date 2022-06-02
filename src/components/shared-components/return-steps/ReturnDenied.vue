<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <cross-icon-cricle />
      </div>
      <h5>Return Request Denied</h5>

      <div class="tracking-steps py-4">
        <stepper />
      </div>
      <h6>Sorry, this item cannot be returned</h6>

      <div class="mt-2">
        <router-link to="/">Contact Support Team</router-link>
      </div>
    </div>
  </CCard>
</template>

<script>
import CrossIconCricle from "@/assets/svg/CrossIconCricle.vue";
export default {
  components: { CrossIconCricle },
  name: "ReturnDenied",
};
</script>

<style lang="scss" scoped></style>
