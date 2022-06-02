<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="KNOW IN DETAIL"
          title="Riders stories"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        />
      </div>
    </page-banner-two>
    <rider-story-block />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import RiderStoryBlock from "@/containers/business/rider-story-block/RiderStoryBlock.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    RiderStoryBlock,
    PageBannerTwo,
    BannerTitle,
    NewsletterSub,
  },
  name: "RiderStory",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
