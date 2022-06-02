<template>
  <CCard class="py-5">
    <div class="text-center">
      <div class="step-icon mb-5">
        <bag-icon />
      </div>
      <h5>Order Placed</h5>
      <h6>Hi John! your order has been Placed</h6>
      <div class="mt-5">
        <button class="btn btn-text text-primary">Cancel Order</button>
      </div>
    </div>
  </CCard>
</template>

<script>
import BagIcon from "@/assets/svg/BagIcon.vue";
export default {
  components: { BagIcon },
  name: "OrderPlaced",
};
</script>

<style lang="scss" scoped></style>
