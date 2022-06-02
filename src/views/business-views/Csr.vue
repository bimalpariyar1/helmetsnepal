<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="CORPORATE SUSTAINABILITY"
          title="Doing well by doing good"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        />
      </div>
    </page-banner-two>
    <csr-block />
    <ceo-message />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import CsrBlock from "@/containers/business/csr-block/CsrBlock.vue";
import CeoMessage from "@/containers/business/ceo-message/CeoMessage.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    PageBannerTwo,
    BannerTitle,
    CsrBlock,
    CeoMessage,
    NewsletterSub,
  },
  name: "Csr",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
