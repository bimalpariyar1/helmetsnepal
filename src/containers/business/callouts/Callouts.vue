<template>
  <section class="py-5">
    <CContainer>
      <CRow>
        <CCol sm="6" md="3" v-for="callout in callouts" :key="callout.id">
          <callout :callout="callout" />
        </CCol>
      </CRow>
    </CContainer>
  </section>
</template>

<script>
import Callout from "@/components/shared-components/callout/Callout.vue";
export default {
  components: { Callout },
  name: "Callouts",
  data() {
    return {
      callouts: [
        {
          id: 1,
          title: "Free Shipping",
          description: "Free delivery for all orders",
          icon: "img/callout/call01.png",
        },
        {
          id: 2,
          title: "Money Guarantee",
          description: "Free delivery for all orders",
          icon: "img/callout/call02.png",
        },
        {
          id: 3,
          title: "24/7 Support",
          description: "Free delivery for all orders",
          icon: "img/callout/call03.png",
        },
        {
          id: 4,
          title: "Secure Payment",
          description: "Free delivery for all orders",
          icon: "img/callout/call04.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
