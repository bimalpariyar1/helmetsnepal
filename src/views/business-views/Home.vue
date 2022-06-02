<template>
  <app-layout>
    <business-hero-slider />
    <category-tiles />

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
      <flash-sale />
    </section>
    <home-video />
    <who-we-are />
    <rider-stories />
    <blogs-block />
    <section class="pt-5">
      <testimonials />
    </section>
    <section class="pt-5">
      <brands />
    </section>
    <newsletter-sub />
  </app-layout>
</template>

<script>
import { itemsList } from "@/assets/data/itemListing";
import AppLayout from "@/layouts/EcommerceLayout.vue";
import BusinessHeroSlider from "@/containers/business/hero-slider/BusinessHeroSlider.vue";
import CategoryTiles from "@/containers/business/category-tiles/CategoryTiles.vue";
import FlashSale from "@/containers/business/flash-sale/FlashSale.vue";
import HomeVideo from "@/containers/business/home-video/HomeVideo.vue";
import WhoWeAre from "@/containers/business/who-we-are/WhoWeAre.vue";
import RiderStories from "@/containers/business/riders-stories/RiderStories.vue";
import BlogsBlock from "@/containers/business/blogs-block/BlogsBlock.vue";
import Testimonials from "@/containers/business/testimonials/Testimonials.vue";
import Brands from "@/containers/business/brands/Brands.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
import AppFooter from "@/components/layout-components/app-footer/AppFooter.vue";
import ItemCarousel from "@/containers/e-commerce/item-carousel/ItemCarousel.vue";
export default {
  components: {
    AppLayout,
    BusinessHeroSlider,
    CategoryTiles,
    FlashSale,
    HomeVideo,
    WhoWeAre,
    RiderStories,
    BlogsBlock,
    Testimonials,
    Brands,
    NewsletterSub,
    AppFooter,
    ItemCarousel,
  },
  name: "Home",

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
