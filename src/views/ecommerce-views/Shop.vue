<template>
  <app-layout>
    <business-hero-slider />
    <div class="mt-5">
      <advanced-search />
    </div>
    <category-tiles />
    <body-ad>
      <div class="text-center">
        <p class="m-0">own it now, up to 12 months free insurance learn more</p>
      </div>
    </body-ad>
    <section class="my-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Featured Items"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="featuredPrevArrow"
        nextEl="featuredNextArrow"
      />
    </section>
    <section class="pb-5">
      <horizontal-ad-block />
    </section>

    <section class="pb-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Recommended Items"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="recomPrevArrow"
        nextEl="recomNextArrow"
      />
    </section>
    <section class="pb-5">
      <flash-sale />
    </section>
    <section class="pb-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Helmets"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="helmetsPrevArrow"
        nextEl="helmetsdNextArrow"
      />
    </section>
    <section class="py-5 bg-gray">
      <body-banner />
    </section>
    <section class="py-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Riding Gears"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="gearsPrevArrow"
        nextEl="gearsdNextArrow"
      />
    </section>
    <section class="pb-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Aperals"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="aperalsPrevArrow"
        nextEl="aperalsdNextArrow"
      />
    </section>

    <section class="pt-5">
      <horizontal-ad-block />
    </section>
    <section class="mt-5">
      <e-callouts />
    </section>
    <section class="pt-5">
      <item-carousel
        :items="itemsList"
        sectionTitle="Accessories"
        subTitle=" own it now, up to 6 months interest free!"
        prevEl="accessPrevArrow"
        nextEl="accessNextArrow"
      />
    </section>
    <newsletter-sub />
  </app-layout>
</template>

<script>
import { itemsList } from "@/assets/data/itemListing";
import AppLayout from "@/layouts/AppLayout.vue";
import BusinessHeroSlider from "@/containers/business/hero-slider/BusinessHeroSlider.vue";
import CategoryTiles from "@/containers/business/category-tiles/CategoryTiles.vue";
import BodyAd from "@/containers/e-commerce/body-ad/BodyAd.vue";

import HorizontalAdBlock from "@/containers/e-commerce/horizontal-ads-block/HorizontalAdBlock.vue";

import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
import FlashSale from "@/containers/business/flash-sale/FlashSale.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
import ECallouts from "@/containers/e-commerce/e-callouts/ECallouts.vue";
import BodyBanner from "@/containers/e-commerce/body-banner/BodyBanner.vue";
import AdvancedSearch from "@/containers/e-commerce/advanced-search/AdvancedSearch.vue";
export default {
  name: "Shop",
  components: {
    AppLayout,
    BusinessHeroSlider,
    CategoryTiles,
    BodyAd,
    HorizontalAdBlock,
    ItemCarousel,
    FlashSale,
    NewsletterSub,
    ECallouts,
    BodyBanner,
    AdvancedSearch,
  },

  data() {
    return {
      itemsList,
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
