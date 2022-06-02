<template>
  <Countdown
    :flipAnimation="false"
    :labels="labels"
    deadline="2022-04-01 10:00:00"
  />
</template>

<script>
import { Countdown } from "vue3-flip-countdown";
export default {
  name: "TimeCountDown",
  components: { Countdown },
  data() {
    return {
      labels: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec" },
    };
  },
};
</script>

<style lang="scss" scoped></style>
