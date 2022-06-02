<template>
  <CContainer>
    <CRow>
      <CCol
        md="6"
        lg="3"
        class="mb-lg-0 mb-4"
        v-for="callout in calloutTwoData"
        :key="callout.id"
      >
        <callout-two :callout="callout" />
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import CalloutTwo from "@/components/shared-components/callout/CalloutTwo.vue";
export default {
  name: "ECallouts",
  components: { CalloutTwo },
  data() {
    return {
      calloutTwoData: [
        {
          id: 1,
          icon: "/img/callout/call05.svg",
          title: "Premium Products",
          description:
            "Sed ut perspiciatis unde omnis natus error sit voluptatem",
        },
        {
          id: 1,
          icon: "/img/callout/call06.svg",
          title: "Competitive Pricing",
          description:
            "Sed ut perspiciatis unde omnis natus error sit voluptatem",
        },
        {
          id: 1,
          icon: "/img/callout/call07.svg",
          title: "Great Shopping",
          description:
            "Sed ut perspiciatis unde omnis natus error sit voluptatem",
        },
        {
          id: 1,
          icon: "/img/callout/call08.svg",
          title: "Best In Market",
          description:
            "Sed ut perspiciatis unde omnis natus error sit voluptatem",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
