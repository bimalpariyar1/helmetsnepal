<template>
  <ecommerce-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="KNOW IN DETAIL"
          title="Gift Cards"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
      </div>
    </page-banner-two>
    <gift-cards-display />
    <gift-card-things-to-know />
  </ecommerce-layout>
</template>

<script>
import EcommerceLayout from "@/layouts/EcommerceLayout.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import GiftCardThingsToKnow from "@/containers/e-commerce/giftcard-things-to-know/GiftCardThingsToKnow.vue";
import GiftCardsDisplay from "@/containers/e-commerce/gift-cards-display/GiftCardsDisplay.vue";
export default {
  components: {
    EcommerceLayout,
    PageBannerTwo,
    BannerTitle,
    GiftCardThingsToKnow,
    GiftCardsDisplay,
  },
  name: "GiftCards",
};
</script>

<style lang="scss" scoped></style>
