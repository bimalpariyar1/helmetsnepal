<template>
  <CContainer>
    <CRow>
      <CCol md="12" lg="4" class="mb-lg-0 mb-4">
        <section-title
          tagline="Ultimate Tagline"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
        <div class="mt-4">
          <time-count-down />
        </div>
      </CCol>
      <CCol md="8" lg="5" class="mb-md-0 mb-4">
        <flash-sale-card
          tagline="LIMITED OFFER BUY NOW!!"
          :item="flashSaleProduct"
        />
      </CCol>
      <CCol md="4" lg="3">
        <ad-vertical image="/img/advrt/advrt01.png" />
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import { CRow, CCol, CContainer } from "@coreui/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import TimeCountDown from "@/components/shared-components/count-down/TimeCountDown.vue";
import FlashSaleCard from "@/components/shared-components/flash-sale-card/FlashSaleCard.vue";
import AdVertical from "@/components/shared-components/ad-vertical/AdVertical.vue";
export default {
  name: "FlashSale",
  components: {
    CContainer,
    CRow,
    CCol,
    SectionTitle,
    TimeCountDown,
    FlashSaleCard,
    AdVertical,
  },

  data() {
    return {
      flashSaleProduct: {
        image: "/img/sales/flash-sale01.png",
        tagline: "Limited offer Buy now!!",
        name: "Bilmola Defender Toxin (Silver Gold)",
        price: "₨14,500.00",
        colors: ["#EC1B23", "#305DFC", "#FFFFFF", "#A49F9F"],
        sizes: ["XXL", "MD", "SM"],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
