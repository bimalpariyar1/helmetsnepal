<template>
  <CCard class="p-3 mb-4">
    <heading title="Order Summary" />

    <div>
      <h6>{{ order.id }}</h6>
      <p>Order Number</p>
    </div>
    <div>
      <h6>{{ order.amount }}</h6>
      <p>Order Amount</p>
    </div>
  </CCard>
  <CCard class="p-3">
    <div class="d-flex">
      <div class="me-3">
        <map-muted-icon />
      </div>
      <div>
        <h6>{{ order.addressLineOne }}</h6>
        <p>{{ order.addressLineTwo }}</p>
      </div>
    </div>
    <div class="d-flex">
      <div class="me-3">
        <phone-muted-icon />
      </div>
      <div>
        <h6>Primary</h6>
        <p>{{ order.phone }}</p>
      </div>
    </div>
  </CCard>
</template>

<script>
import MapMutedIcon from "@/assets/svg/MapMutedIcon.vue";
import Heading from "../heading/Heading.vue";
import PhoneMutedIcon from "@/assets/svg/PhoneMutedIcon.vue";
export default {
  components: { Heading, MapMutedIcon, PhoneMutedIcon },
  name: "OrderSummary",
  props: ["order"],
};
</script>

<style lang="scss" scoped></style>
