<template>
  <order-placed v-if="order.orderStatus === 0" />
  <order-confirmed
    v-if="order.orderStatus === 1"
    :orderStatus="order.orderStatus"
  />
  <order-shipped
    v-if="order.orderStatus === 2"
    :orderStatus="order.orderStatus"
  />
  <order-on-way
    v-if="order.orderStatus === 3"
    :orderStatus="order.orderStatus"
  />
  <order-delivered
    v-if="order.orderStatus === 4"
    :orderStatus="order.orderStatus"
  />
</template>

<script>
import OrderPlaced from "@/components/shared-components/order-steps/OrderPlaced.vue";
import OrderConfirmed from "@/components/shared-components/order-steps/OrderConfirmed.vue";
import OrderShipped from "@/components/shared-components/order-steps/OrderShipped.vue";
import OrderOnWay from "@/components/shared-components/order-steps/OrderOnWay.vue";
import OrderDelivered from "@/components/shared-components/order-steps/OrderDelivered.vue";
export default {
  components: {
    OrderPlaced,
    OrderConfirmed,
    OrderShipped,
    OrderOnWay,
    OrderDelivered,
  },
  name: "OrderTracking",
  props: ["order"],
};
</script>

<style lang="scss" scoped></style>
