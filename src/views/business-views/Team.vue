<template>
  <app-layout>
    <section>
      <page-banner image="/img/banners/pageban01.png">
        <div class="col-md-7">
          <banner-title
            tagline="MEET OUR TEAM"
            title="People behind what we are as now"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </div>
      </page-banner>
    </section>
    <team-list />
    <career-linkbanner />
    <core-values />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import CareerLinkbanner from "@/containers/business/career-link-banner/CareerLinkbanner.vue";
import CoreValues from "@/containers/business/core-values/CoreValues.vue";
import TeamList from "@/containers/business/team-list/TeamList.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    PageBanner,
    BannerTitle,
    CareerLinkbanner,
    CoreValues,
    TeamList,
    NewsletterSub,
  },
  name: "Team",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
