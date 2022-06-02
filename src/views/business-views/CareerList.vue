<template>
  <app-layout>
    <section>
      <page-banner-two>
        <div class="col-md-5">
          <banner-title
            tagline="Who we are"
            title="We provide advanced solutions to grow your business"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </div>
      </page-banner-two>
    </section>
    <career-list-block />
    <who-we-are />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import CareerListBlock from "@/containers/business/career-list-block/CareerListBlock.vue";
import WhoWeAre from "@/containers/business/who-we-are/WhoWeAre.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import PageBannerTwo from "@/components/shared-components/page-banner/PageBannerTwo.vue";
export default {
  components: {
    AppLayout,
    CareerListBlock,
    WhoWeAre,
    BannerTitle,
    PageBannerTwo,
  },
  name: "CareerList",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
