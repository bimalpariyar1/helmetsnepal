<template>
  <app-layout>
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

    <section class="py-5">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="6">
            <section-title
              className="text-center"
              title="chose your career path with us"
              description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
            />
          </CCol>
        </CRow>
      </CContainer>
    </section>
    <career-categories />
    <who-we-are />
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import CareerCategories from "@/containers/business/career-categories/CareerCategories.vue";
import WhoWeAre from "@/containers/business/who-we-are/WhoWeAre.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
export default {
  components: {
    AppLayout,
    PageBanner,
    BannerTitle,
    SectionTitle,
    CareerCategories,
    WhoWeAre,
    NewsletterSub,
  },
  name: "Career",
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
