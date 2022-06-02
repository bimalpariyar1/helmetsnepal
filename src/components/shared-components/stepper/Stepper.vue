<template>
  <div class="custom-stepper">
    <div :class="orderStatus >= 1 ? 'step-circle active' : 'step-circle'">
      <div class="tick-icon">
        <tick-icon />
      </div>
    </div>
    <div :class="orderStatus >= 2 ? 'step-circle active' : 'step-circle'">
      <div class="tick-icon">
        <tick-icon />
      </div>
    </div>
    <div :class="orderStatus >= 3 ? 'step-circle active' : 'step-circle'">
      <div class="tick-icon">
        <tick-icon />
      </div>
    </div>
    <div :class="orderStatus >= 4 ? 'step-circle active' : 'step-circle'">
      <div class="tick-icon">
        <tick-icon />
      </div>
    </div>
  </div>
</template>

<script>
import TickIcon from "@/assets/svg/TickIcon.vue";
export default {
  components: { TickIcon },
  name: "Stepper",
  props: ["orderStatus"],
};
</script>

<style lang="scss" scoped></style>
