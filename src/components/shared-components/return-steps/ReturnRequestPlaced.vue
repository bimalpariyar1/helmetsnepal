<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <return-icon />
      </div>
      <h5>Return Request Placed</h5>
      <h6>Hi John! your return request has been Placed</h6>
      <div class="mt-5">
        <button class="btn btn-text text-primary">Cancel Return</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import ReturnIcon from "@/assets/svg/ReturnIcon.vue";
export default {
  components: { ReturnIcon },
  name: "ReturnRequestPlaced",
};
</script>

<style lang="scss" scoped></style>
