<template>
  <button :class="'swiper-buttons me-3 ' + leftClassName">
    <prev-icon />
  </button>
  <button :class="'swiper-buttons ' + RightClassName">
    <next-icon />
  </button>
</template>

<script>
import NextIcon from "@/assets/svg/NextIcon.vue";
import PrevIcon from "@/assets/svg/PrevIcon.vue";
export default {
  name: "SwiperNav",
  props: ["leftClassName", "RightClassName"],
  components: {
    NextIcon,
    PrevIcon,
  },
};
</script>

<style lang="scss" scoped></style>
