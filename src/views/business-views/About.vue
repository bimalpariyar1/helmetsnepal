<template>
  <app-layout>
    <about-banner />
    <about-body />
    <about-video-gallery />
    <core-values />
    <home-video />
    <callouts />
    <who-we-are />
    <team-block />
    <career-linkbanner />
    <section class="py-5">
      <testimonials />
    </section>
    <rider-stories />
    <showroom-block />
    <brands />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import AboutBanner from "@/containers/business/about-banner/AboutBanner.vue";
import AboutBody from "@/containers/business/about-body/AboutBody.vue";
import CoreValues from "@/containers/business/core-values/CoreValues.vue";
import HomeVideo from "@/containers/business/home-video/HomeVideo.vue";
import Callouts from "@/containers/business/callouts/Callouts.vue";
import WhoWeAre from "@/containers/business/who-we-are/WhoWeAre.vue";
import TeamBlock from "@/containers/business/team-block/TeamBlock.vue";
import CareerLinkbanner from "@/containers/business/career-link-banner/CareerLinkbanner.vue";
import Testimonials from "@/containers/business/testimonials/Testimonials.vue";
import RiderStories from "@/containers/business/riders-stories/RiderStories.vue";
import Brands from "@/containers/business/brands/Brands.vue";
import ShowroomBlock from "@/containers/business/showroom-block/ShowroomBlock.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
import AboutVideoGallery from "@/containers/business/about-video-gallery/AboutVideoGallery.vue";
export default {
  components: {
    AppLayout,
    AboutBanner,
    AboutBody,
    CoreValues,
    HomeVideo,
    Callouts,
    WhoWeAre,
    TeamBlock,
    CareerLinkbanner,
    Testimonials,
    RiderStories,
    Brands,
    ShowroomBlock,
    NewsletterSub,
    AboutVideoGallery,
  },
  name: "About",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
