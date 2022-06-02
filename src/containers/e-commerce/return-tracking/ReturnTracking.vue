<template>
  <return-request-placed v-if="returnItem.returnStatus === 0" />
  <return-request-received
    v-if="returnItem.returnStatus === 1"
    :returnItem="returnItem"
  />
  <return-in-process
    v-if="returnItem.returnStatus === 2"
    :returnItem="returnItem"
  />
  <return-accepted
    v-if="returnItem.returnStatus === 3"
    :returnItem="returnItem"
  />
  <return-retrived
    v-if="returnItem.returnStatus === 4"
    :returnItem="returnItem"
  />
  <return-denied v-else />
</template>

<script>
import ReturnRequestPlaced from "@/components/shared-components/return-steps/ReturnRequestPlaced.vue";
import ReturnRequestReceived from "@/components/shared-components/return-steps/ReturnRequestReceived.vue";
import ReturnInProcess from "@/components/shared-components/return-steps/ReturnInProcess.vue";
import ReturnAccepted from "@/components/shared-components/return-steps/ReturnAccepted.vue";
import ReturnRetrived from "@/components/shared-components/return-steps/ReturnRetrived.vue";
import ReturnDenied from "@/components/shared-components/return-steps/ReturnDenied.vue";
export default {
  components: {
    ReturnRequestPlaced,
    ReturnRequestReceived,
    ReturnInProcess,
    ReturnAccepted,
    ReturnRetrived,
    ReturnDenied,
  },
  name: "ReturnTracking",
  props: ["returnItem"],
};
</script>

<style lang="scss" scoped></style>
