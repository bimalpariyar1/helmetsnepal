<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="keep in touch"
          title="Contact Us"
          description="Feel free to ask for details, don't save any questions!"
        />
      </div>
    </page-banner-two>
    <contact-area />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import ContactArea from "@/containers/business/contact-form/ContactArea.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    BannerTitle,
    PageBannerTwo,
    ContactArea,
    NewsletterSub,
  },
  name: "ContactUs",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
