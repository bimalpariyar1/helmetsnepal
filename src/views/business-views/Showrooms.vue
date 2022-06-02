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
    <section class="pt-5">
      <CContainer>
        <CRow>
          <CCol
            sm="6"
            md="4"
            lg="3"
            class="mb-4"
            v-for="showroom in showrooms"
            :key="showroom.id"
          >
            <showroom-card :showroom="showroom" />
          </CCol>
        </CRow>
        <div class="text-center mt-4">
          <pagination />
        </div>
      </CContainer>
    </section>
    <newsletter-sub />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/EcommerceLayout.vue";
import PageBanner from "@/components/shared-components/page-banner/PageBanner.vue";
import BannerTitle from "@/components/shared-components/banner-title/BannerTitle.vue";
import ShowroomCard from "@/components/shared-components/showroom-card/ShowroomCard.vue";
import NewsletterSub from "@/containers/business/newsletter-sub/NewsletterSub.vue";
import Pagination from "@/components/shared-components/pagination/Pagination.vue";
export default {
  components: {
    AppLayout,
    PageBanner,
    BannerTitle,
    ShowroomCard,
    NewsletterSub,
    Pagination,
  },
  name: "Showrooms",
  data() {
    return {
      showrooms: [
        {
          id: 1,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom01.png",
        },
        {
          id: 2,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom02.png",
        },
        {
          id: 3,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom03.png",
        },
        {
          id: 4,
          address: "Address of Showroom",
          showroomName: "Theme name of showroom",
          phone: "+977 9845625321",
          contactPerson: "John Chrzanawska",
          image: "/img/showrooms/showroom01.png",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped></style>
