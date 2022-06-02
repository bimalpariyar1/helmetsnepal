<template>
  <div class="mb-4">
    <CContainer>
      <CRow class="align-items-end">
        <CCol md="6" class="mb-md-0 mb-4">
          <section-title
            tagline="OUR BRANDS"
            title="One click platform for all kinds of helmet and safety gears"
            description="Lorem ipsum dolor consectetur adipiscing elit eiusmod tempor elit eiusmod tempor."
          />
        </CCol>
        <CCol md="6">
          <swiper-nav
            leftClassName="brandPprevArrow"
            RightClassName="brandNextArrow"
          />
        </CCol>
      </CRow>
    </CContainer>
  </div>
  <CContainer>
    <CRow>
      <CCol md="12">
        <div class="pt-4">
          <swiper
            :modules="modules"
            :breakpoints="breakpoints"
            :autoHeight="true"
            :space-between="50"
            :navigation="{
              nextEl: '.brandNextArrow',
              prevEl: '.brandPprevArrow',
            }"
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="brand in brands" :key="brand.id">
              <CCard class="p-4">
                <img :src="brand.image" alt="" />
              </CCard>
            </swiper-slide>
          </swiper>
        </div>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import { CRow, CCol, CContainer, CCard } from "@coreui/vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SectionTitle from "@/components/shared-components/section-title/SectionTitle.vue";
import SwiperNav from "@/components/shared-components/swiper-nav/SwiperNav.vue";
export default {
  name: "Brands",
  components: {
    CRow,
    CCol,
    CContainer,
    CCard,
    Swiper,
    SwiperSlide,
    SectionTitle,
    SwiperNav,
  },

  data() {
    return {
      brands: [
        { id: 1, image: "/img/brands/brand01.png", slug: "/smk" },
        { id: 2, image: "/img/brands/brand02.png", slug: "/royal" },
        { id: 3, image: "/img/brands/brand03.png", slug: "/kyt" },
        { id: 4, image: "/img/brands/brand04.png", slug: "/steelbird" },
        { id: 5, image: "/img/brands/brand05.png", slug: "/pirel" },
        { id: 6, image: "/img/brands/brand06.png", slug: "/avg" },
      ],

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        425: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
