<template>
  <section>
    <page-banner image="/img/banners/pageban01.png">
      <div class="col-md-6">
        <banner-title
          tagline="UNLIMITED TAGLINE AND DESCRIPTION"
          title="Steer your career in the right direction"
        />

        <div class="mt-4 text-center">
          <router-link to="/career" class="btn btn-primary"
            >VIEW IN DETAIL</router-link
          >
        </div>
      </div>
    </page-banner>
  </section>
</template>

<script>
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
export default {
  components: { BannerTitle, PageBanner },
  name: "CareerLinkBanner",
};
</script>

<style lang="scss" scoped></style>
