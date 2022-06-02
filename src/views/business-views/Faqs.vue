<template>
  <app-layout>
    <page-banner-two>
      <div class="col-md-7">
        <banner-title
          tagline="Help your self"
          title="Frequently Asked Questions"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
      </div>
    </page-banner-two>
    <faqs-content />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import FaqsContent from "@/containers/business/faqs-content/FaqsContent.vue";

export default {
  components: { AppLayout, PageBannerTwo, BannerTitle, FaqsContent },
  name: "Faqs",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
