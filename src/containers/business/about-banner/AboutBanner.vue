<template>
  <section>
    <page-banner image="/img/banners/pageban01.png">
      <div class="col-md-7">
        <banner-title
          tagline="One of the fastest-rowing online platform"
          title="We provide advanced solutions to grow your business"
          description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
        />
      </div>
    </page-banner>
  </section>
</template>

<script>
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
export default {
  components: { PageBanner, BannerTitle },
  name: "AboutBanner",
};
</script>

<style lang="scss" scoped></style>
